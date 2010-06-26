Screw.Unit(function() {
  describe('Grid', function() {
	it("should parse string to array of cells", function() {
		var grid = Grid.parse('--:' +
					   	 	  '-+');
		expect(grid.display()).to(equal, '--:' +
								       	 '-+');
	});
  });
});