Simulation = function (aGridString) {
	var that = this;
	var grid = [];
	populateGrid(aGridString);	
	
	function populateGrid(aGridString){
		var rowStrings = aGridString.split(':');
		
		for(var rowNumber in rowStrings) {
			var cellStrings = rowStrings[rowNumber].split('');
			var cells = [];
			for(var colNumber in cellStrings) {
				cells.push(new Cell(new Number(rowNumber), new Number(colNumber), cellStrings[colNumber], grid));
			}
			
			grid[rowNumber] = cells; 
		}
	};
	
	function calculateNextCellState() {
		applyToCell(function(cell){
			cell.calculateNextState();
			});
	};
	
	function updateCellState() {
		applyToCell(function(cell){
			cell.update(); 
		});
	};	
	
	function applyToCell(func){
		for(var rowNumber in grid) {
			var row = grid[rowNumber];
			for (var cellNumber in row){
				var cell = row[cellNumber];
				func(cell);
			}
		}
	};
		
	this.runGeneration = function () {
		calculateNextCellState();
		updateCellState();
	};
	
	this.display = function () {
		var lines = [];
		for (rownumber in grid) {
			var row = grid[rownumber];
			
			var line = "";
			for(colNumber in row) {
				line += (row[colNumber].toString());
			}
			lines.push(line);
		}
		return lines.join(":");
	};
};