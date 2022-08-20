basic.showIcon(IconNames.Skull)
serial.redirectToUSB()
basic.forever(function () {
    serial.writeValue("數位信號", pins.digitalReadPin(DigitalPin.P15))
})
