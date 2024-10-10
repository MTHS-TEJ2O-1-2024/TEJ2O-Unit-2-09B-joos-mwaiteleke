/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Joos
 * Created on: Oct 2024
 * This program plays rock, paper, scissors
*/


let randomNumber: number = 0
let score = 0

randomNumber = -1
basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onGesture(Gesture.Shake, function () {
    randomNumber = randint(0, 2)
    basic.clearScreen()

   
    if (randomNumber == 0) {
        basic.showIcon(IconNames.Square)
    }

    if (randomNumber == 1) {
        basic.showIcon(IconNames.SmallSquare)
    }
   
    if (randomNumber == 2) {
        basic.showIcon(IconNames.Scissors)
    }
    basic.pause(1000)
    basic.showIcon(IconNames.Happy)})

input.onButtonPressed(Button.A, function() {
    score = score+1
    basic.showIcon(IconNames.Yes)
})

input.onButtonPressed(Button.B, function() {
    basic.showString("Score:")
    basic.showNumber(score)
})