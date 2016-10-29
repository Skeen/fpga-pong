# FPGA Pong

Single-Player pong game build using Altera Lite 16.0 (Quartus).

# Setup

Assumes a ~50MHz clock signal, developed on the cheap 48MHz: MAX II EPM570T100C5.

## Pin mapping
```
PIN_1   VGA_BLUE
PIN_2   VGA_GREEN
PIN_3   VGA_RED
PIN_4   VGA_HORIZONTAL_SYNC
PIN_5   VGA_VERTICAL_SYNC
PIN_12  CLOCK
PIN_100 RX (Serial)
```

## Pin connection
Flash the FPGA with the software, and connect according to the above Pin mapping and;
* http://fpga4fun.com/PongGame.html

Connect `RX (Serial)` to TX of your serial line.

# Usage
At this point the monitor should be showing the Pong Game.
To play run `index.js` from within the `communicator` folder.

# Credit
This work is remixed from;

* Pong Game found at: http://fpga4fun.com/PongGame.html
* Serial Interface (reciever) found at: http://fpga4fun.com/SerialInterface.html

Both developed and published by: Jean P. Nicolle @ fpga4fun.com & KNJN LLC.
