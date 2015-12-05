/* Used to test events.js
 * with qunit.js available in qunit.com
 */


<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> testing boardGame with qunit.js
=======
>>>>>>> still testing validating special and normal discs
QUnit.module( "Board Game" );


QUnit.test( "Loading boardGame variables", function( assert ) {

<<<<<<< HEAD
<<<<<<< HEAD
  // quantity of expected asserts during test
  assert.expect(14);
=======
  assert.expect(11);
>>>>>>> testing boardGame with qunit.js
=======
  // quantity of expected asserts during test
  assert.expect(14);
>>>>>>> testing more boardGame variables

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

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> testing more boardGame variables
  // Testing Board Offset Objetct variables
  assert.equal(BOARD_OFFSET.X,50,"X Offset: Passed!");
  assert.equal(BOARD_OFFSET.Y,100,"Y Offset: Passed!");

  assert.equal(NUMBER_PAWNS,5,"Pawns Number: Passed!");


<<<<<<< HEAD
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

// testing validateDisc method
QUnit.test("Validating Discs", function(assert) {

  assert.expect(2);
  // Special Discs should return false when there are more than 5 discs
  assert.equal( validateDisc(6,WHITE),false, "Any special disc with more than count more than 5 should be invalidated");
  // Special Discs should return false when there are more than 9 discs
  assert.equal( validateDisc(10,WHITE),false, "Any normal disc with more than count more than 9 should be invalidated");
});


QUnit.module( "Log Suit" );

QUnit.test("Test log suit methods", function(assert) {

  assert.expect(3);

  assert.ok( createCookie !== null, "create cookie method");
  assert.ok( readCookie !== null, "read cookie method");
  assert.ok( eraseCookie !== null, "erase cookie method");

});

QUnit.test("Test log suit methods", function(assert) {

  assert.expect(2);

  createCookie("field","value",30);

  assert.equal(readCookie("field"),"value","cookie retrieved according to expected response");

  eraseCookie("field");

  assert.equal( readCookie("field"),null,"cookie retrieved according to expected response");

=======
>>>>>>> testing boardGame with qunit.js
=======
>>>>>>> testing more boardGame variables
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

// testing validateDisc method
QUnit.test("Validating Discs", function(assert) {

  assert.expect(2);
  // Special Discs should return false when there are more than 5 discs
  assert.equal( validateDisc(6,WHITE),false, "Any special disc with more than count more than 5 should be invalidated");
  // Special Discs should return false when there are more than 9 discs
  assert.equal( validateDisc(10,WHITE),false, "Any normal disc with more than count more than 9 should be invalidated");
});


QUnit.module( "Log Suit" );

QUnit.test("Test log suit methods", function(assert) {

  assert.expect(3);

  assert.ok( createCookie !== null, "create cookie method");
  assert.ok( readCookie !== null, "read cookie method");
  assert.ok( eraseCookie !== null, "erase cookie method");

});

QUnit.test("Test log suit methods", function(assert) {

  assert.expect(2);

  createCookie("field","value",30);

  assert.equal(readCookie("field"),"value","cookie retrieved according to expected response");

  eraseCookie("field");

  assert.equal( readCookie("field"),null,"cookie retrieved according to expected response");

});
