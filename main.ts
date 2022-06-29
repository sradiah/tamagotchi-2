input.onButtonPressed(Button.A, function () {
    honger += honger + 30
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(honger)
})
let honger = 0
radio.setGroup(1)
honger = 0
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
basic.forever(function () {
    honger += 1
    if (honger >= 60) {
        basic.showIcon(IconNames.Skull)
        honger = 0
    } else if (honger >= 50) {
        basic.showIcon(IconNames.Angry)
    } else if (honger >= 35) {
        basic.showIcon(IconNames.Confused)
    } else if (honger >= 20) {
        basic.showIcon(IconNames.Sad)
    } else {
    	
    }
})
