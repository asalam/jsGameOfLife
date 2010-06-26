Grid = function() {
	var that = this;
	that.cells = [];
	
	this.display = function () {
		var lines = [];
		for (rownumber in that.cells) {
			var row = that.cells[rownumber];
			
			var line = "";
			for(colNumber in row) {
				line += (row[colNumber].toString());
			}
			lines.push(line);
		}
		return lines.join(":");
	};
};

Grid.parse = function(aGridString) {
	var grid = new Grid();
	var rowStrings = aGridString.split(':');

	for(var rowNumber in rowStrings) {
		var cellStrings = rowStrings[rowNumber].split('');
		var row = [];
		for(var colNumber in cellStrings) {
			row.push(new Cell(new Number(rowNumber), new Number(colNumber), cellStrings[colNumber], grid));
		}

		grid.cells[rowNumber] = row; 
	}
	
	return grid;
};