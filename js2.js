try {
    var SerialPort = require("serialport");
    SerialPort.list(function (err, ports) {
        ports.forEach(function (port) {
            pname = port.comName;
            document.getElementById('demo2').innerHTML = port.comName;
            document.getElementById('demo').innerHTML = port.comName;
            var sport = new SerialPort(port.comName);

            sport.on('open', function () {
                document.getElementById('demo2').innerHTML = 'Serial Port Opened!';
                sport.on('data', function (data) {
                    mass = data[0];
                    document.getElementById('demo2').innerHTML = '';
                    document.getElementById('demo').innerHTML =
                        "Dünya'da " + mass + " kg<br>" +
                        "Güneş'te " + Math.round((mass * 274 / 9.81) * 100) / 100 + " kg<br>" +
                        "Merkür'de " + Math.round((mass * 3.7 / 9.81) * 100) / 100 + " kg<br>" +
                        "Venüs'te " + Math.round((mass * 8.87 / 9.81) * 100) / 100 + " kg<br>" +
                        "Ay'da " + Math.round((mass * 1.62 / 9.81) * 100) / 100 + " kg<br>" +
                        "Mars'ta " + Math.round((mass * 3.71 / 9.81) * 100) / 100 + " kg<br>" +
                        "Jüpiter'de " + Math.round((mass * 24.79 / 9.81) * 100) / 100 + " kg<br>" +
                        "Satürn'de " + Math.round((mass * 10.44 / 9.81) * 100) / 100 + " kg<br>" +
                        "Uranüs'te " + Math.round((mass * 8.69 / 9.81) * 100) / 100 + " kg<br>" +
                        "Neptün'de " + Math.round((mass * 11.15 / 9.81) * 100) / 100 + " kg";
                });
            });
        });
    });

}
catch (err) {
    document.getElementById("demo2").innerHTML = err.message;
}