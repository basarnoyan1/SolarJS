(function () {
    function func() {
        mass = getRandomInt(0, 70);
        document.getElementById('demo').innerHTML =
         "Dünya'da " + mass + " kg<br>" + 
        "Güneş'te " + getWM(mass, 0) + " kg<br>" + 
        "Merkür'de " + getWM(mass, 1) + " kg<br>" + 
        "Venüs'te " + getWM(mass, 2) + " kg<br>" +
        "Ay'da " + getWM(mass, 4) + " kg<br>" +
        "Mars'ta " + getWM(mass, 5) + " kg<br>" +
        "Jüpiter'de " + getWM(mass, 6) + " kg<br>" + 
        "Satürn'de " + getWM(mass, 7) + " kg<br>" +
        "Uranüs'te " + getWM(mass, 8) + " kg<br>" +
        "Neptün'de " + getWM(mass, 9) + " kg";
            t = setTimeout(function () {
            startTime()
        }, 500);
    }
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
    func();
})();