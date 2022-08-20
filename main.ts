basic.showIcon(IconNames.Skull)
serial.redirectToUSB()
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P16, pins.digitalReadPin(DigitalPin.P15))
    if (pins.digitalReadPin(DigitalPin.P15) == 1) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Diamond)
    }
})
