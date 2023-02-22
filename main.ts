input.onGesture(Gesture.LogoDown, function () {
    basic.showLeds(`
        . . . . .
        # . . . #
        . # # # .
        . . . . .
        . # . # .
        `)
    basic.showLeds(`
        . # # # #
        . # . . #
        # # # . #
        . # . . #
        . . . # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onGesture(Gesture.ScreenDown, function () {
    basic.showString("Im a AI")
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        `)
    basic.showLeds(`
        . . # . .
        . . . . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # . . .
        # . # # #
        `)
    basic.showLeds(`
        . # # . .
        # . . # .
        . . # . .
        . . . . .
        . . # . .
        `)
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # # . .
        . # . . .
        . # . . .
        # # . . .
        # # . . .
        `)
    basic.showNumber(0)
    basic.showLeds(`
        . # . . .
        # . . # #
        . # . # .
        # . . # #
        # # # . .
        `)
    basic.showString("GND")
    basic.showLeds(`
        . # . # .
        # . # # #
        . # . # .
        # . # # #
        # # # # .
        `)
    music.playMelody("C5 A B G A F G E ", 120)
    music.playMelody("G B A G C5 B A B ", 120)
    basic.showLeds(`
        # # # . .
        # . # . .
        # . # . .
        # . # . .
        # # # . .
        `)
    basic.showLeds(`
        # # . . .
        . # . . .
        . # . . .
        . # . . .
        # # . . .
        `)
    basic.showLeds(`
        # . . . #
        # . . . #
        # . . . #
        # . . . #
        # . . . #
        `)
    basic.showLeds(`
        . . . # .
        . . . # .
        . . . # #
        . . . # .
        . . . # .
        `)
    basic.showLeds(`
        . . # . .
        . . # . #
        . . # # .
        . . # . #
        . . # . .
        `)
    basic.showLeds(`
        . # . . #
        . # . # .
        . # # . .
        . # . # .
        . # . . #
        `)
    basic.showLeds(`
        # . . # .
        # . # . .
        # # . . .
        # . # . .
        # . . # .
        `)
    basic.showLeds(`
        . . # . .
        . # . . .
        # . . . .
        . # . . .
        . . # . .
        `)
    basic.showLeds(`
        . # . . .
        # . . . .
        . . . . .
        # . . . .
        . # . . .
        `)
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        `)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # . # .
        # . # . #
        `)
    basic.pause(100)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . # . .
        # . # . #
        # . # . #
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        # . # . #
        # . # . #
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . # . #
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . # # # .
        `)
    basic.clearScreen()
    music.playMelody("D D D - - - - - ", 120)
    basic.pause(100)
    basic.showLeds(`
        . . # . .
        # . # . #
        # . # . #
        # . . . #
        . # # # .
        `)
    music.playTone(294, music.beat(BeatFraction.Whole))
    serial.redirectToUSB()
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # # # .
        # . # . #
        # . # # #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        # # . . #
        # # . # .
        . . # . .
        # # . # .
        # # . . #
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        # # # # .
        # . # . #
        # . # # #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    _1 = 0
    _1 = randint(1, 2)
    if (_1 == 1) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    } else if (0 == 0) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            # # # # .
            # . # . #
            # . # # #
            # . . . #
            # # # # #
            `)
    }
    basic.pause(5000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # . . .
        # # . . .
        # # # # .
        # # # # .
        # # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
let _1 = 0
basic.showLeds(`
    . # # # .
    # . . . .
    # . . # #
    # . . . #
    . # # # .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    # # # . #
    # . # . .
    # # # . #
    # . # . #
    `)
basic.showLeds(`
    . . . . .
    # . . . #
    # # # . .
    # . # . #
    # . # . #
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
led.setBrightness(255)
basic.showLeds(`
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    `)
basic.showLeds(`
    . . # # .
    # . # . #
    . # # # .
    # . # . #
    . . # # .
    `)
basic.clearScreen()
basic.forever(function () {
	
})
