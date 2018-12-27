
/** ксласс Machine (механизм) **/
function Machine(){

    this.activate = false;       //флаг включения/выключения (true - включено)
    //публичный метод включения
    this.turnOn = function () {
        this.activate = true;    //устанавливаем флаг включено
        console.log("Включено"); //выводим в консоль сообщение что включили
    };
    //публичный метод выключения
    this.turnOff = function () {
        this.activate = false;   //устанавливаем флаг выключено
        console.log("Выключено");//выводим в консоль сообщение что выключили
    };

}
/** класс HomeAppliance (бытовой прибор) < Machine (унаследован от механизма) **/
function HomeAppliance(name = "pribor"){
    Machine.call(this);         //наследуемся от Machine
    var power =  false;         //флаг включения/выключения питания (true - включено)

    this.name = name;

    //публичный метод включения питания
    this.plugIn = function () {
        if(!power) {                                            //если питание отключено
            power = true;                                       //питание включено
            console.log("Питание " + this.name + " включено");  //сообщение в консоль что питание включено
        }
    };

    //публичный метод выключения питания
    this.plugOff = function () {
        if(power) {                                             //если питание  включено
            power = false;                                      //питание отключено
            console.log("Питание " + this.name + " отключено"); //сообщение в консоль что питание отключено
        }
    };

    //переопределяем метод turnOn
    this.turnOn = function () {
        if(power) {                                     //если питание  включено
            if(!this.activate) {                        //если стройство не включено
                this.activate = true;                   //устанавливаем флаг включено
                console.log(this.name + " Включен");    //выводим в консоль сообщение что включили
            }
            else{                                       //если устройство включено
                console.log(this.name + "Уже включен"); //выводим в консоль что уже включены
            }
        }
        else{                                                                   //если питание не подключено
            console.log("Сначало нужно подключить питание для " + this.name);   //выводим сообщение что нужно подключить питание
        }
    };

    //переопределяем метод turnOff
    this.turnOff = function () {
        if(power) {                                     //если питание  включено
            if (this.activate) {                        //если устройство включено
                this.activate = false;                  //устанавливаем флаг включено
                console.log(this.name + " Выключен");   //выводим в консоль сообщение что выключили
            }
            else{                               //если стройство не включено
                console.log("Уже выключено");   //выводим в консоль сообщение что уже выключено
            }
        }
        else{                                                       //если питание  включено
            console.log("Смысл, если питание и так отключено?");    //сообщаем что питание и так отключено
        }
    };
}

/** класс WashingMachine (стиральная машина) < HomeAppliance (унаследован от бытового прибора) **/
function WashingMachine() {
    HomeAppliance.call(this);                          //наследуемся от HomeAppliance

    //метод run
    this.run = function () {
        if(this.activate) {                            //если устройство включено
            console.log("Стиральная машина запущена"); //выводим сообщение что машинка запущена
        }
        else{                                          //если устройство не включено
            console.log("Сначала надо включить");      //сообщаем что сначала надо включить устройство
        }
    };
}



/** LightSource (источник света) < HomeAppliance (унаследован от бытового прибора) **/
function LightSource(name = "lamp") {
    HomeAppliance.call(this);                                                               //наследуемся от HomeAppliance
    this.name = name;
    this.level = 0;

    this.setLevel = function (level) {
        if(level<1 && level>100){                                                           //если уровень задан не правильно
            console.log("Уровень освещенности " + this.name + " должен быть от 1 до 100");  //выводим сообщение с диапазоном
            return;                                                                         //прерываем выполнение
        }
        this.level = level;                                                                 //задаем указанный уровень
        console.log("Уровень освещенности: " + this.level + "%");                           //выводим сообщение что уровень установлен
    }
}


/** AutoVehicle (автоматическое транспортное средство) < Machine (унаследован от механизма) **/
function AutoVehicle(startx = 0, starty = 0) {
    Machine.call(this);                                                                 //наследуемся от Machine

    this.startx = startx;                                                               //задаем начальные
    this.starty = starty;                                                               //значения

    //метов setPosition
    this.setPosition = function(setx, sety) {
        this.startx = setx;                                                             //устанавливаем кординату x
        this.starty = sety;                                                             //станавливаем координату y
        console.log("Установлены координаты: x=" + this.startx + ", y=" + this.starty); //выводим сообщение что установленны такито координаты
    }
}

/** Car (автомобиль) < AutoVehicle (унаследован от трансп. средства) **/
function Car(speed=10) {

    AutoVehicle.call(this); //следуемся от AutoVehicle
    var timerId = null;     //тут будет handle таймера, чтобы могли его потом остановить
    var self = this;        //сохраняем this чтобы можно было обратиться к методу родительского класса


    this.speed = speed;     //задаем скорость по умолчанию

    //метод setSpeed устанавливает скорость
    this.setSpeed = function (speed) {
        this.speed = speed;                                         //устанавливаем скорость
        console.log("Скорость автомобил: " + this.speed + "км/ч");  //выводим сообщение о том что скорость установленна
    };

    //метод который будет вызываться в setInterval, менять позицю,
    //проверять условия и при необходимости останавливать выполнение setInterval
    function changePosition (endx, endy) {
        var newx = self.startx + self.speed; //новые координаты x
        var newy = self.starty + self.speed; //новые координаты y

        if(newx>endx) newx=endx;             //проверяем что новые координаты не больше заданных
        if(newy>endy) newy=endy;             //и если больше то приравниваем новые координаты заданым

        self.setPosition(newx,newy);         //устанавливаем новые координаты

        if(newx===endx && newy===endy) {     //если заданные координаты достигнуты
            clearInterval(timerId);          //завершаем выполнение setInterval
            console.log("Мы достигли заданных координат");//сообщаем что заданные координаты достигнуты
        }
    }

    //метод run
    this.run = function (endx, endy) {
        console.log("Координаты для перемещения: x=" + endx + ", y=" + endy);   //выводим конечные координаты
        timerId = setInterval(changePosition,1000, endx, endy);         //задаем интервал 1 сек. на просчет новых координат и перемещение

    };


}


//кусок кода из примера
var bosch = new WashingMachine();   //создание объекта bosh
bosch.plugIn();                     //включаем в сеть
bosch.turnOn();                     //включаем прибор


var lightBulb = new LightSource();  //создание объекта lightBulb
lightBulb.plugIn();                 //включаем в сеть
lightBulb.setLevel(60);             //задаем уровень освещенности
lightBulb.turnOn();                 //включаем лампу )

var honda = new Car();                 //создаем объект honda
honda.setPosition(30, 40);  //устанавливаем начальные координаты nonda
honda.turnOn();                        //включаем
honda.setSpeed(60);                    //устанавливаем скорость
honda.run(180, 240);       //запускаем honda и гворим до куда ехать =)


//этого в примере не было решил добавить
bosch.run();                           //запускаем прибор bosh