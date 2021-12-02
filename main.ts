radio.onReceivedString(function (receivedString) {
    Received_word = receivedString
    basic.showString(Received_word)
    if (Received_word == "bad") {
        music.playTone(988, music.beat(BeatFraction.Breve))
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.showString("good")
    }
})
let Received_word = ""
radio.setGroup(10)
