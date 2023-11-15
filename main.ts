let minumero = 0
radio.onReceivedNumber(function (receivedNumber) {
    minumero = randint(1, 6)
    if (receivedNumber < minumero) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("String")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(randint(1, 6))
})
