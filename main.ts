let joe = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . 2 2 2 2 2 . . . . . . . .
    . . . 2 . . . 2 . . . . . . . .
    . . . 2 . . . 2 . . . . . . . .
    . . . 2 . . . 2 . . . . . . . .
    . . . 2 2 2 2 2 . . . . . . . .
    . . . . 2 2 2 2 2 . . . . . . .
    . . . . 2 2 2 2 2 2 . . . . . .
    . . . . 2 2 2 2 2 2 . . . . . .
    . . . . 2 2 2 2 . . . . . . . .
    . . . . 2 2 2 2 . . . . . . . .
    . . . . 2 2 2 2 2 . . . . . . .
    . . . . 2 2 2 2 2 . . . . . . .
    . . . . 2 2 . 2 2 . . . . . . .
    . . . . 2 2 . 2 2 . . . . . . .
    . . . . 2 2 . 2 2 . . . . . . .
`,SpriteKind.Player)
let john = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . 8 8 8 8 8 . . . . . . . .
    . . . 8 . . . 8 . . . . . . . .
    . . . 8 . . . 8 . . . . . . . .
    . . . 8 . . . 8 . . . . . . . .
    . . . 8 8 8 8 8 . . . . . . . .
    . . . . 8 8 8 8 8 . . . . . . .
    . . . . 8 8 8 8 8 8 . . . . . .
    . . . . 8 8 8 8 8 8 . . . . . .
    . . . . 8 8 8 8 . . . . . . . .
    . . . . 8 8 8 8 . . . . . . . .
    . . . . 8 8 8 8 8 . . . . . . .
    . . . . 8 8 8 8 8 . . . . . . .
    . . . . 8 8 . 8 8 . . . . . . .
    . . . . 8 8 . 8 8 . . . . . . .
    . . . . 8 8 . 8 8 . . . . . . .
`, SpriteKind.Player)

let gravity = 5
let direction = [1,1]
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(joe)

game.onUpdate(function() {
  if (joe.x > john.x) {
      direction[0] = 1
  } else {
      direction[0] = -1
    } if (john.x > joe.x) {
        direction[1] = 1
    } else {
        direction[1] = -1
    }
  
  
  info.setScore(direction[0])
       
    john.setImage(img`
        . . . . . . . . . . . . . . . .
        . . . . . 8 8 8 8 8 . . . . . .
        . . . . . 8 . . . 8 . . . . . .
        . . . . . 8 . . . 8 . . . . . .
        . . . . . 8 . . . 8 . . . . . .
        . . . . . 8 8 8 8 8 . . . . . .
        . . . . . . 8 8 8 8 8 . . . . .
        . . . . . . 8 8 8 8 8 8 . . . .
        . . . . . . 8 8 8 8 8 8 . . . .
        . . . . . . 8 8 8 8 . . . . . .
        . . . . . . 8 8 8 8 . . . . . .
        . . . . . . 8 8 8 8 8 . . . . .
        . . . . . . 8 8 8 8 8 . . . . .
        . . . . . . 8 8 . 8 8 . . . . .
        . . . . . . 8 8 . 8 8 . . . . .
        . . . . . . 8 8 . 8 8 . . . . .
    `)
    if (direction[0] > 0) {
        joe.setImage(img`
            . . . . . . . . . . . . . . . .
            . . . . . . 2 2 2 2 2 . . . . .
            . . . . . . 2 . . . 2 . . . . .
            . . . . . . 2 . . . 2 . . . . .
            . . . . . . 2 . . . 2 . . . . .
            . . . . . . 2 2 2 2 2 . . . . .
            . . . . . 2 2 2 2 2 . . . . . .
            . . . . 2 2 2 2 2 2 . . . . . .
            . . . . 2 2 2 2 2 2 . . . . . .
            . . . . . . 2 2 2 2 . . . . . .
            . . . . . . 2 2 2 2 . . . . . .
            . . . . . 2 2 2 2 2 . . . . . .
            . . . . . 2 2 2 2 2 . . . . . .
            . . . . . 2 2 . 2 2 . . . . . .
            . . . . . 2 2 . 2 2 . . . . . .
            . . . . . 2 2 . 2 2 . . . . . .
        `)
    } else {
        joe.setImage(img`
            . . . . . . . . . . . . . . . .
            . . . . . 2 2 2 2 2 . . . . . .
            . . . . . 2 . . . 2 . . . . . .
            . . . . . 2 . . . 2 . . . . . .
            . . . . . 2 . . . 2 . . . . . .
            . . . . . 2 2 2 2 2 . . . . . .
            . . . . . . 2 2 2 2 2 . . . . .
            . . . . . . 2 2 2 2 2 2 . . . .
            . . . . . . 2 2 2 2 2 2 . . . .
            . . . . . . 2 2 2 2 . . . . . .
            . . . . . . 2 2 2 2 . . . . . .
            . . . . . . 2 2 2 2 2 . . . . .
            . . . . . . 2 2 2 2 2 . . . . .
            . . . . . . 2 2 . 2 2 . . . . .
            . . . . . . 2 2 . 2 2 . . . . .
            . . . . . . 2 2 . 2 2 . . . . .
        `)
    }

    if (direction[1] > 0) {
        john.setImage(img`
            . . . . . . . . . . . . . . . .
            . . . . . . 8 8 8 8 8 . . . . .
            . . . . . . 8 . . . 8 . . . . .
            . . . . . . 8 . . . 8 . . . . .
            . . . . . . 8 . . . 8 . . . . .
            . . . . . . 8 8 8 8 8 . . . . .
            . . . . . 8 8 8 8 8 . . . . . .
            . . . . 8 8 8 8 8 8 . . . . . .
            . . . . 8 8 8 8 8 8 . . . . . .
            . . . . . . 8 8 8 8 . . . . . .
            . . . . . . 8 8 8 8 . . . . . .
            . . . . . 8 8 8 8 8 . . . . . .
            . . . . . 8 8 8 8 8 . . . . . .
            . . . . . 8 8 . 8 8 . . . . . .
            . . . . . 8 8 . 8 8 . . . . . .
            . . . . . 8 8 . 8 8 . . . . . .
        `)
    } else {
        john.setImage(img`
            . . . . . . . . . . . . . . . .
            . . . . . 8 8 8 8 8 . . . . . .
            . . . . . 8 . . . 8 . . . . . .
            . . . . . 8 . . . 8 . . . . . .
            . . . . . 8 . . . 8 . . . . . .
            . . . . . 8 8 8 8 8 . . . . . .
            . . . . . . 8 8 8 8 8 . . . . .
            . . . . . . 8 8 8 8 8 8 . . . .
            . . . . . . 8 8 8 8 8 8 . . . .
            . . . . . . 8 8 8 8 . . . . . .
            . . . . . . 8 8 8 8 . . . . . .
            . . . . . . 8 8 8 8 8 . . . . .
            . . . . . . 8 8 8 8 8 . . . . .
            . . . . . . 8 8 . 8 8 . . . . .
            . . . . . . 8 8 . 8 8 . . . . .
            . . . . . . 8 8 . 8 8 . . . . .
        `)
    }
    joe.vy += gravity
    john.vy += gravity

    if ((controller.player1.isPressed(ControllerButton.Left)) && (joe.vx > -100)) {
        joe.vx -= 20
    } else if ((controller.player1.isPressed(ControllerButton.Right)) && (joe.vx < 100)) {
        joe.vx += 20
    } else {
        if (joe.vx > 0) {
            joe.vx -= 20
        }
        if (joe.vx < 0) {
            joe.vx += 20
        }
    }
    
    if ((controller.player2.isPressed(ControllerButton.Left)) && (john.vx > -100)) {
        john.vx -= 20
    } else if ((controller.player2.isPressed(ControllerButton.Right)) && (john.vx < 100)) {
        john.vx += 20
    } else {
        if (john.vx > 0) {
            john.vx -= 20
        }
        if (john.vx < 0) {
            john.vx += 20
        }
    }
})

controller.player1.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function() {
if (joe.isHittingTile(CollisionDirection.Bottom)){
    joe.vy -= 100  
}
})
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    if (john.isHittingTile(CollisionDirection.Bottom)) {
        john.vy -= 100
    }
})