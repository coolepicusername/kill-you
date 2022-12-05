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
`,SpriteKind.Joe)
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
let primeCoolDown = [0,0,15]
let primaryduration = 200

namespace SpriteKind {
    export const P1Attack = SpriteKind.create()
}
namespace SpriteKind {
    export const P2Attack = SpriteKind.create()
}
namespace SpriteKind {
    export const Joe = SpriteKind.create()
}
namespace SpriteKind {
    export const John = SpriteKind.create()
}

tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(joe)

game.onUpdate(function() {
 info.setScore(primeCoolDown[0])
 
 primeCoolDown[0] -= 1
 primeCoolDown[1] -= 1
 
  if (joe.x > john.x) {
      direction[0] = 1
  } else {
      direction[0] = -1
    } if (john.x > joe.x) {
        direction[1] = 1
    } else {
        direction[1] = -1
    }
  
  
       
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
   if (primeCoolDown[0] < 0) {
    let primary1 = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        555555555555555555555555
        555555555555555555555555
        555555555555555555555555
        555555555555555555555555
        555555555555555555555555
        ........................
        ........................
        ........................
        ........................
        ........................
    `,SpriteKind.P1Attack)
    primary1.setPosition(joe.x + 16 * direction[1],joe.y)
    primary1.vx = joe.vx
pause(primaryduration)
    primary1.destroy()
    primeCoolDown[0] = primeCoolDown[2]
   }
})
controller.player2.A.onEvent(ControllerButtonEvent.Pressed, function () {
  if (primeCoolDown[1] < 0) {
    let primary2 = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        555555555555555555555555
        555555555555555555555555
        555555555555555555555555
        555555555555555555555555
        555555555555555555555555
        ........................
        ........................
        ........................
        ........................
        ........................
    `, SpriteKind.P2Attack)
    primary2.setPosition(john.x + 16 * direction[0], john.y)
  primary2.vx = john.vx
    pause(primaryduration)
primary2.destroy()
primeCoolDown[1] = primeCoolDown[2]
  }
})


sprites.onOverlap(SpriteKind.Joe, SpriteKind.P2Attack, function(sprite: Sprite, otherSprite: Sprite) {

   primeCoolDown[0] = 50   

        

    game.splash(joe.x)
    game.splash(sprite.x)
})