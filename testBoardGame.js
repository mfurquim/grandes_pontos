/* Used to test events.js
 * with qunit.js available in qunit.com
 */





QUnit.module( "Board Game" );


QUnit.test( "Loading boardGame variables", function( assert ) {

  assert.expect(11);

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

});
