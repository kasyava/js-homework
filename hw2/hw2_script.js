/** Home work #2 NodeJS ES6**/

class Machine {
    constructor(){

    }
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