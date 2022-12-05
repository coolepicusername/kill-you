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
let speed = [20,20]
let stun = [0,0]
let primCoolDown = [0,0]

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

    if ((controller.player1.isPressed(ControllerButton.Left)) && (joe.vx > -speed[0] * 5)) {
        joe.vx -= speed[0]
    } else if ((controller.player1.isPressed(ControllerButton.Right)) && (joe.vx < speed[0] * 5)) {
        joe.vx += speed[0]
    } else {
        if (joe.vx > 0) {
            joe.vx -= speed[0]
        }
        if (joe.vx < 0) {
            joe.vx += speed[0]
        }
    }
    
    if ((controller.player2.isPressed(ControllerButton.Left)) && (john.vx > -speed[1] * 5)) {
        john.vx -= speed[1]
    } else if ((controller.player2.isPressed(ControllerButton.Right)) && (john.vx < speed[1] * 5)) {
        john.vx += speed[1]
    } else {
        if (john.vx > 0) {
            john.vx -= speed[1]
        }
        if (john.vx < 0) {
            john.vx += speed[1]
        }
    }
})

controller.player1.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function() {
if (joe.isHittingTile(CollisionDirection.Bottom)){
    joe.vy -= speed[0] * 5
}
})
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    if (john.isHittingTile(CollisionDirection.Bottom)) {
        john.vy -= speed[1] * 5
    }
})
controller.player1.A.onEvent(ControllerButtonEvent.Pressed, function() {
    let 
})