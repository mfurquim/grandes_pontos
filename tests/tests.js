function loadjsfile(filename){
  var fileref=document.createElement('script')
  fileref.setAttribute("type","text/javascript")
  fileref.setAttribute("src", filename)
}

QUnit.test( "hello test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});

loadjsfile("../Scripts/atlas.js");

QUnit.test("Test Fecth Disc", function(assert) {
  assert.ok( 1 == "1", "Passed!");
});
