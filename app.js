var five = require("johnny-five");
var board = new five.Board();
var first = true;
var mass, old_mass = 0;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getAcc(code) {
    switch (code) {
        case 0:
            return 274;
            break; //Sun
        case 1:
            return 3.7;
            break; //Mercury
        case 2:
            return 8.87;
            break; //Venus
        case 3:
            return 9.81;
            break; //Earth
        case 4:
            return 1.62;
            break; //Moon
        case 5:
            return 3.71;
            break; //Mars
        case 6:
            return 24.79;
            break; //Jupiter
        case 7:
            return 10.44;
            break; //Saturn
        case 8:
            return 8.69;
            break; //Uranus
        case 9:
            return 11.15;
            break; //Neptune
        case 10:
            return 0.62;
            break; //Pluto
    }
}

function getWM(mass, code) {
    return mass * getAcc(code) / getAcc(3);
}

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }

board.on("ready", function () {
    // Create an Led on pin 13
    var led = new five.Led(13);
    // Blink every half second
    led.blink(500);

    this.loop(500, () => {
        old_mass = mass;
        mass = getRandomInt(0, 70);
        if (first == true) {
            old_mass = mass;
            first = false;
        }
        if (mass > 1 && Math.abs(mass - old_mass)  > 15) {
            if (mass < 30) {
                console.log("Güle güle!");
            } else {
                if (old_mass < 30) {
                    console.log("Hoş geldiniz!");
                }
                console.log("//Dünya'da " + mass + " kg\n" + 
                "Güneş'te " + getWM(mass, 0) + " kg\n" + 
                "Merkür'de " + getWM(mass, 1) + " kg\n" + 
                "Venüs'te " + getWM(mass, 2) + " kg\n" +
                "Ay'da " + getWM(mass, 4) + " kg\n" +
                "Mars'ta " + getWM(mass, 5) + " kg\n" +
                "Jüpiter'de " + getWM(mass, 6) + " kg\n" + 
                "Satürn'de " + getWM(mass, 7) + " kg\n" +
                "Uranüs'te " + getWM(mass, 8) + " kg\n" +
                "Neptün'de " + getWM(mass, 9) + " kg");
                sleep(2000);
            }
        }
        else{
            console.log("Ağırlık: "+ mass + ". Eski ağırlık:" + old_mass + ". Fark: " + Math.abs(mass - old_mass) + ".");
        }
    });

});