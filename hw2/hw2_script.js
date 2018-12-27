/** Home work #2 NodeJS ES6**/

/** ксласс Machine (механизм) **/
class Machine {

    //конструктор класса Machine
    constructor(){
        this.activate = false;          //флаг включения/выключения (true - включено)
    }

    //публичный метод включения
    turnOn(){
        this.activate = true;           //устанавливаем флаг включено
        console.log("Включено");        //выводим в консоль сообщение что включили
    }

    //публичный метод выключения
    turnOff() {
        this.activate = false;          //устанавливаем флаг выключено
        console.log("Выключено");       //выводим в консоль сообщение что выключили
    }
}

/** класс HomeAppliance (бытовой прибор) < Machine (унаследован от механизма) **/
class HomeAppliance extends Machine{    //наследуемся от Machine

    //конструктор класса HomeAppliance
    constructor(name = 'Бытовой прибор') {  //name по умолчанию - "Бытовой прибор"
        super();
        this.name = name;                   //задаем начальное значение name
        this.power=false;                   //задеам начальное флага включения/выключения питания (true - включено)
    }

    //публичный метод включения питания
    plugIn() {
        if(!this.power) {                                   //если питание отключено
            this.power = true;                              //питание включено
            console.log(`Питание ${this.name} включено`);   //сообщение в консоль что питание включено
        }
    }

    //публичный метод выключения питания
    plugOff() {
        if(this.power) {                                    //если питание  включено
            this.power = false;                             //питание отключено
            console.log(`Питание ${this.name} отключено`);  //сообщение в консоль что питание отключено
        }
    }

    //переопределяем метод turnOn
    turnOn() {
        if(this.power) {                                    //если питание  включено
            if(!this.activate) {                            //если стройство не включено
                this.activate = true;                       //устанавливаем флаг включено
                console.log(`${this.name} Включен`);        //выводим в консоль сообщение что включили
            }
            else{                                           //если устройство включено
                console.log(`${this.name} Уже включен`);    //выводим в консоль что уже включены
            }
        }
        else{                                                                   //если питание не подключено
            console.log(`Сначало нужно подключить питание для ${this.name}`);   //выводим сообщение что нужно подключить питание
        }
    }

    //переопределяем метод turnOff
    turnOff() {
        if(this.power) {                                            //если питание  включено
            if (this.activate) {                                    //если устройство включено
                this.activate = false;                              //устанавливаем флаг включено
                console.log(`${this.name} Выключен`);               //выводим в консоль сообщение что выключили
            }
            else{                                                   //если стройство не включено
                console.log("Уже выключено");                       //выводим в консоль сообщение что уже выключено
            }
        }
        else{                                                       //если питание  включено
            console.log("Смысл, если питание и так отключено?");    //сообщаем что питание и так отключено
        }
    }
}

/** класс WashingMachine (стиральная машина) < HomeAppliance (унаследован от бытового прибора) **/
class WashingMachine extends HomeAppliance{ //наследуемся от HomeAppliance

    //конструктор класса WashingMachine
    constructor(name = 'Стиральная машина') {       //name по умолчанию "Стиральная машинв"
        super();
        this.name = name;                           //задаем начальное значение name
    }

    //метод run
    run(){
        if(this.activate) {                         //если устройство включено
            console.log(`${this.name} запущена`);   //выводим сообщение что машинка запущена
        }
        else{                                       //если устройство не включено
            console.log("Сначала надо включить");   //сообщаем что сначала надо включить устройство
        }
    }
}

/** LightSource (источник света) < HomeAppliance (унаследован от бытового прибора) **/
class LightSource extends HomeAppliance{    //наследуемся от HomeAppliance

    //конструктор класса LightSource
    constructor(name = 'Источник света'){   //name по умолчанию - "Источник света"
        super();
        this.name = name;                   //задаем начальное значение name
        this.level = 0;                     //задаем начальное значение освещенности

    }
    //пуьличный метод setLevel
    setLevel(level = 0) {                                                               //уровень освещенности по умолчанию level=0
        if(level<1 && level>100){                                                       //если уровень задан не правильно
            console.log(`Уровень освещенности ${this.name} должен быть от 1 до 100`);   //выводим сообщение с диапазоном
            return;                                                                     //прерываем выполнение
        }
        this.level = level;                                                             //задаем указанный уровень
        console.log(`Уровень освещенности: ${this.level}`);                             //выводим сообщение что уровень установлен
    }
}

/** AutoVehicle (автоматическое транспортное средство) < Machine (унаследован от механизма) **/
class AutoVehicle extends Machine{  //наследуемся от Machine

    //конструктор калсса AutoVehicle
    constructor(startx = 0, starty = 0) {   //по умолчанию  startx и starty равны 0
        super();
        this.startx = startx;               //задаем начальные
        this.starty = starty;               //значения
    }

    //метов setPosition
    setPosition(setx, sety) {
        this.startx = setx;                                                         //устанавливаем кординату x
        this.starty = sety;                                                         //станавливаем координату y
        console.log(`Установлены координаты: x=${this.startx}, y=${this.starty}`);  //выводим сообщение что установленны такито координаты
    }
}

/** Car (автомобиль) < AutoVehicle (унаследован от трансп. средства) **/
class Car extends AutoVehicle{  //наследуемся от AutoVehicle

    //конструктор класса Car
    constructor(speed=10){      //скорость по умолчанию speed=10
        super();
        this.speed = speed;     //устанавливаем начальное значение скорости
    }

    //метод setSpeed устанавливает скорость
    setSpeed(speed) {
        this.speed = speed;                                      //устанавливаем скорость
        console.log(`Скорость автомобиля: ${this.speed} км/ч`);  //выводим сообщение о том что скорость установленна
    }

    //метод run
    run(endx, endy) {
        console.log(`Координаты для перемещения: x=${endx}, y=${endy}`);   //выводим конечные координаты

        let timerId = setInterval(() => {               //Запускаем тайсер с интервалом который указан в конце блока
            let newx = this.startx + this.speed;                //новые координаты x
            let newy = this.starty + this.speed;                //новые координаты y
            if(newx>endx) newx=endx;                            //проверяем что новые координаты не больше заданных
            if(newy>endy) newy=endy;                            //и если больше то приравниваем новые координаты заданым
            this.setPosition(newx,newy);                        //устанавливаем новые координаты
            if(newx===endx && newy===endy) {                    //если заданные координаты достигнуты
                clearInterval(timerId);                         //завершаем выполнение setInterval
                console.log("Мы достигли заданных координат");  //сообщаем что заданные координаты достигнуты
            }
        },1000);                                        //задаем интервал 1 сек. на просчет новых координат и перемещение
    }
}



//кусок кода из примера
let bosch = new WashingMachine();   //создание объекта bosh
bosch.plugIn();                     //включаем в сеть
bosch.turnOn();                     //включаем прибор


let lightBulb = new LightSource();  //создание объекта lightBulb
lightBulb.plugIn();                 //включаем в сеть
lightBulb.setLevel(60);             //задаем уровень освещенности
lightBulb.turnOn();                 //включаем лампу )

let honda = new Car();                 //создаем объект honda
honda.setPosition(30, 40);  //устанавливаем начальные координаты nonda
honda.turnOn();                        //включаем
honda.setSpeed(60);                    //устанавливаем скорость
honda.run(180, 240);       //запускаем honda и гворим до куда ехать =)


//этого в примере не было решил добавить
bosch.run();                           //запускаем прибор bosh