namespace SpriteKind {
    export const Background = SpriteKind.create()
    export const prop = SpriteKind.create()
}
function battleScene_Mac () {
    setupBattleScene()
    generateCow()
    generateElephant()
    generateBeaver()
}
function setupBattleScene () {
    scene.setBackgroundImage(assets.image`Sky`)
    Grasssprite = sprites.create(assets.image`Battle grass`, SpriteKind.Background)
    Grasssprite.setPosition(80, 60)
    platforms = sprites.create(assets.image`Battle grass2`, SpriteKind.Background)
    platforms.setPosition(80, 60)
}
function generateElephant () {
    Envirodant = sprites.create(assets.image`ElephantConst`, SpriteKind.Enemy)
    Envirodant.setPosition(134, 72)
    animation.runImageAnimation(
    Envirodant,
    assets.animation`Elephant`,
    200,
    true
    )
    envirodentAddition = sprites.create(assets.image`Empty`, SpriteKind.Enemy)
    envirodentAddition.setPosition(137, 85)
    envirodentAddition2 = sprites.create(assets.image`Empty`, SpriteKind.Enemy)
    envirodentAddition2.setPosition(153, 85)
}
function generateBeaver () {
    Envirodant = sprites.create(assets.image`Clouds`, SpriteKind.Enemy)
    Envirodant.setPosition(133, 69)
    animation.runImageAnimation(
    Envirodant,
    assets.animation`Beaver`,
    200,
    true
    )
    envirodentAddition = sprites.create(assets.image`Tree Stump`, SpriteKind.Enemy)
    envirodentAddition.setPosition(137, 85)
    envirodentAddition2 = sprites.create(assets.image`Tree Stump`, SpriteKind.Enemy)
    envirodentAddition2.setPosition(153, 85)
}
function generateCow () {
    Envirodant = sprites.create(assets.image`CowConst`, SpriteKind.Enemy)
    Envirodant.setPosition(134, 64)
    animation.runImageAnimation(
    Envirodant,
    assets.animation`Cow`,
    500,
    true
    )
    envirodentAddition = sprites.create(assets.image`Empty`, SpriteKind.Enemy)
    envirodentAddition.setPosition(137, 85)
    envirodentAddition2 = sprites.create(assets.image`Empty`, SpriteKind.Enemy)
    envirodentAddition2.setPosition(153, 85)
}
let envirodentAddition2: Sprite = null
let envirodentAddition: Sprite = null
let Envirodant: Sprite = null
let platforms: Sprite = null
let Grasssprite: Sprite = null
battleScene_Mac()
