let 밝기 = 0
basic.forever(function () {
    밝기 = 0
    if (밝기 >= 20) {
        basic.showString("day")
    } else {
        basic.showString("slight")
    }
})
