basic.forever(function () {
    let waarde_van_het_kompas = 0
    if (waarde_van_het_kompas > 45 && waarde_van_het_kompas < 135) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
    if (waarde_van_het_kompas > 135 && waarde_van_het_kompas < 225) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    }
    if (waarde_van_het_kompas > 225 && waarde_van_het_kompas < 315) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    }
    if (waarde_van_het_kompas > 315 && waarde_van_het_kompas < 360 || waarde_van_het_kompas > 0 && waarde_van_het_kompas < 45) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
})
