var SerialPort = require("serialport");

var port = new SerialPort("/dev/ttyUSB0", {
  baudRate: 115200
});

var value = 0;
var way = 1;
port.on('open', function() 
{
    var send = function(value)
    {
        var buffer = new Buffer([value]);
        port.write(buffer, function(err) 
        {
            if (err) 
            {
                return console.log('Error on write: ', err.message);
            }
            //console.log('message written:', value);
        });
    }

    var move = function(way)
    {
        value += way;
        value = Math.min(value, 255);
        value = Math.max(value, 0);
        send(value);
    }

    var stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.resume();
    stdin.setEncoding('utf8');

    stdin.on('data', function(key){
        /*
        if (key == '\u001B\u005B\u0041') {
            process.stdout.write('up'); 
        }
        */
        if (key == '\u001B\u005B\u0043') {
            move(5);
            //process.stdout.write('right'); 
        }
        /*
        if (key == '\u001B\u005B\u0042') {
            process.stdout.write('down'); 
        }
        */
        if (key == '\u001B\u005B\u0044') {
            move(-5);
            //process.stdout.write('left'); 
        }

        if (key == '\u0003') { process.exit(); }    // ctrl-c
    });

    /*
    setInterval(function()
    {
        var buffer = new Buffer([value]);
        //value += way;
        if(value == 255 || value == -1)
            way *= -1;
        port.write(buffer, function(err) 
        {
            if (err) 
            {
                return console.log('Error on write: ', err.message);
            }
            console.log('message written:', value);
        });
    }, 10);
    */
});

port.on('error', function(err) 
{
    console.log('Error: ', err.message);
});
