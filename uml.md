```
Class Game {
	-BoardGame boardGame
	+loadGame()
    +runGame()
    +shutDown()
    -captureEvents()
    -runLogic()
    -draw()
}

class GameObject {
	-enumerate colour
    -bool locked
	+void move()
	+bool wasClicked()
    -bool isLocked()
}

class BoardGame {
	-Board board
    -Array<Disc> discs
    -Array<Pawn> pawns
	-Board generateBoardGame()
    -Array<Disc> closestDisc(Array<Pawn>)
}

class DrawObject {
    -String name
	-int positionX
    -int positionY
    -int dimensionHeight
    -int dimensionWidth
    #void drawItself()
}

class Pawn {
	+void move()
}

class Disc {
	+void move()
}

class Player {
	+Array<disc> discs
    +int pontua
}

Class Podium {
	-int positions
}

Class Atlas {
	-Image atlasAsset
    -Array<sprite> sprites
    -String url
    +loadingAssets()
    -loadJSON()
    -loadSprite()
    -defineSprite()
    -searchSprite()
}

Class Event {
	-screenConfiguration
	-void changeScreen()
}

DrawObject <|-- GameObject
GameObject <|-- Pawn
GameObject <|-- Disc

Game "1" *-- "1" BoardGame
BoardGame "1" *-- "1-4" Player
BoardGame "1" *-- "55" Disc
BoardGame "1" *-- "5" Pawn
BoardGame "1" *-- "1" Podium
Player "1" *-- "*" Disc

Event -- GameObject: notifies
BoardGame o-- Atlas : has a
```

From [Code UML](http://www.codeuml.com/?635801731195129091)