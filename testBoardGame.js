/* Used to test events.js
 * with qunit.js available in qunit.com
 */





QUnit.module( "Board Game" );


QUnit.test( "Loading boardGame variables", function( assert ) {

  // quantity of expected asserts during test
  assert.expect(14);

  assert.equal( NUM_PLAYERS,4, "Players Number: Passed!" );

  assert.equal( GREEN,0, "Color: Passed!" );
  assert.equal( BLUE,1, "Color: Passed!" );
  assert.equal( RED,2, "Color: Passed!" );
  assert.equal( PURPLE,3, "Color: Passed!" );
  assert.equal( YELLOW,4, "Color: Passed!" );
  assert.equal( WHITE,5, "Color: Passed!" );
  assert.equal( BLACK,6, "Color: Passed!" );

  assert.equal(NUMBER_DISC_COLORS,7,"Disc Number: Passed!");

  assert.equal(NUMBER_DISC_ROW,11,"Disc Row Number: Passed!");
  assert.equal(NUMBER_DISC_COL,5,"Disc Col Number: Passed!");

  // Testing Board Offset Objetct variables
  assert.equal(BOARD_OFFSET.X,50,"X Offset: Passed!");
  assert.equal(BOARD_OFFSET.Y,100,"Y Offset: Passed!");

  assert.equal(NUMBER_PAWNS,5,"Pawns Number: Passed!");


});

QUnit.test("Test Generate Board", function(assert) {
  assert.ok( generateBoard !== null, "Board Generated");
});

QUnit.test("Test Generate Players", function(assert) {
  assert.ok( generatePlayers !== null, "Players Generated");
});

QUnit.test("Test Fetches", function(assert) {

  assert.expect(2);

  assert.ok( fetchPawn !== null, "Pawn Fetched");

  assert.ok(fetchDisc !== null,"Disc fetched");
});


QUnit.test("Validatinf Discs", function(assert) {

  assert.expect();
  assert.ok( generatePlayers !== null, "Players Generated");
});
