function solução () {
	
}
function tarefa () {
    game.showLongText("Tarefa:", DialogLayout.Bottom)
}
function esquerda (aSprite: Sprite) {
    grid.move(aSprite, 1, 0)
    pause(200)
}
function subir (aSprite: Sprite) {
    grid.move(aSprite, 0, -1)
    pause(200)
}
function direita (aSprite: Sprite) {
    grid.move(aSprite, -1, 0)
    pause(200)
}
function inicialização () {
    scene.setBackgroundImage(assets.image`tabuleiro`)
    tiles.setCurrentTilemap(tilemap`tabuleiro_tiles`)
    personagem = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    personagem.setStayInScreen(true)
    grid.place(personagem, tiles.getTileLocation(0, 0))
}
function descer (aSprite: Sprite) {
    grid.move(aSprite, 0, 1)
    pause(200)
}
let personagem: Sprite = null
inicialização()
tarefa()
solução()
