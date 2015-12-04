ATLAS.loadingAssets();

QUnit.module( "ATLAS" );

QUnit.test("Test Fecth Atlas", function(assert) {
  assert.ok( ATLAS.fetchAtlas() !== null, "Atlas loaded!");
});

QUnit.test("Test Fecth Sprite", function(assert) {
  assert.expect( 5 );
  var done = assert.async( 5 );

  setTimeout(function() {
    assert.ok( ATLAS.fetchSprite("Bordered/disc_green.png") !== null, "Sprite Multi Disc Green loaded!");
    done();
  }, 2000 );

  setTimeout(function() {
    assert.ok( ATLAS.fetchSprite("Multi/classic_blue.png") !== null, "Sprite Bordered Classic Blue loaded!");
    done();
  }, 2000 );

  setTimeout(function() {
    assert.ok( ATLAS.fetchSprite("Single/meeple_yellow.png") !== null, "Sprite Single Meeple Yellow loaded!");
    done();
  }, 2000 );

  setTimeout(function() {
    assert.ok( ATLAS.fetchSprite("gamepad4.png") !== null, "Sprite Gamepad 4 loaded!");
    done();
  }, 2000 );

  setTimeout(function() {
    assert.ok( ATLAS.fetchSprite("brick_black.png") !== null, "Sprite Brick Black loaded!");
    done();
  }, 2000 );

});
