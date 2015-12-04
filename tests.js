ATLAS.loadingAssets();

QUnit.test( "hello test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});

QUnit.module( "ATLAS" );

QUnit.test("Test Fecth Atlas", function(assert) {
  assert.ok( ATLAS.fetchAtlas() !== null, "Atlas loaded!");
});

QUnit.test("Test Fecth Sprite", function(assert) {
  assert.expect( 1 );
  var done = assert.async( 1 );

  setTimeout(function() {
    assert.ok( ATLAS.fetchSprite("Multi/disc_green.png") !== null, "Sprite loaded!");
    done();
  }, 500 );
});



QUnit.module( "group b" );
QUnit.test( "a basic test example 3", function( assert ) {
  assert.ok( true, "this test is fine" );
});
QUnit.test( "a basic test example 4", function( assert ) {
  assert.ok( true, "this test is fine" );
});
