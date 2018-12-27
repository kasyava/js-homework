/** Home work #2 NodeJS ES6**/

class Machine {
    //конструктор класса Machine
    constructor(){
        this.activate = false;       //флаг включения/выключения (true - включено)
        console.log("Создан экземпляр класса Machine");
    }
    //публичный метод включения
    turnOn = () =>{
        this.activate = true;    //устанавливаем флаг включено
        console.log("Включено"); //выводим в консоль сообщение что включили
    };
    //публичный метод выключения
    turnOff = () => {
        this.activate = false;   //устанавливаем флаг выключено
        console.log("Выключено");//выводим в консоль сообщение что выключили
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