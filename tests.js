ATLAS.loadingAssets();

QUnit.module( "ATLAS" );

QUnit.test("Test Fecth Atlas", function(assert) {
  assert.expect( 1 );
  var done = assert.async( 1 );
  setTimeout(function() {
    assert.ok( ATLAS.fetchAtlas() !== null, "Atlas loaded!");
    done();
  }, 2000 );
});

QUnit.test("Test Fecth Sprite", function(assert) {
  assert.expect( 5 );
  var done = assert.async( 5 );

  setTimeout(function() {
    assert.ok( ATLAS.fetchSprite("Bordered/disc_green.png") !== null, "Sprite Multi Disc Green loaded!");
    done();
  }, 200 );

  setTimeout(function() {
    assert.ok( ATLAS.fetchSprite("Multi/classic_blue.png") !== null, "Sprite Bordered Classic Blue loaded!");
    done();
  }, 200 );

  setTimeout(function() {
    assert.ok( ATLAS.fetchSprite("Single/meeple_yellow.png") !== null, "Sprite Single Meeple Yellow loaded!");
    done();
  }, 200 );

  setTimeout(function() {
    assert.ok( ATLAS.fetchSprite("gamepad4.png") !== null, "Sprite Gamepad 4 loaded!");
    done();
  }, 200 );

  setTimeout(function() {
    assert.ok( ATLAS.fetchSprite("brick_black.png") !== null, "Sprite Brick Black loaded!");
    done();
  }, 200 );
});

QUnit.module( "Moves" );

QUnit.test("Test Moving Pawns", function(assert) {
  assert.expect( 6 );
  var done = assert.async( 6 );

  setTimeout(function() {
    assert.ok( nextPossibleMove(board.pawns[GREEN]).getColor() == GREEN, "Moving green pawn to same disc's color!");
    done();
  }, 200 );

  setTimeout(function() {
    assert.ok( nextPossibleMove(board.pawns[BLUE]).getColor() == BLUE, "Moving blue pawn to same disc's color!");
    done();
  }, 200 );

  setTimeout(function() {
    assert.ok( nextPossibleMove(board.pawns[YELLOW]).getColor() == YELLOW, "Moving yellow pawn to same disc's color!");
    done();
  }, 200 );

  setTimeout(function() {
    assert.ok( nextPossibleMove(board.pawns[RED]).getColor() == RED, "Moving red pawn to same disc's color!");
    done();
  }, 200 );

  setTimeout(function() {
    assert.ok( nextPossibleMove(board.pawns[PURPLE]).getColor() == PURPLE, "Moving purple pawn to same disc's color!");
    done();
  }, 200 );

  setTimeout(function() {
    assert.ok( nextPossibleMove(board.pawns[GREEN]).getColor() != BLUE, "Not moving green pawn to blue disc!");
    done();
  }, 200 );
});
