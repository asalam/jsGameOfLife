Screw.Unit(function() {
  describe('Simulation', function() {
	it("should keep its state", function() {

		var sim = new Simulation('+++:' +
				   			     '+--:' +
				   			     '+-+');

		expect(sim.display()).to(equal, '+++:' +
								        '+--:' +
								        '+-+');
	});

	it("should kill active cells when they have no neighbors", function() {
		var sim = new Simulation('---:' +
				    		 	 '-+-:' +
							 	 '---');
		sim.runGeneration();
		expect(sim.display()).to(equal, '---:' +
								        '---:' +
								        '---');
	}); 

	it("should keep cells alive when they have two horizontal alive neighbors", function() {
		var sim = new Simulation('---:' +
				   			     '+++:' +
				   			     '---');
		sim.runGeneration();
		expect(sim.display()).to(equal, '---:' +
								        '-+-:' +
								        '---');
	});
  });
});