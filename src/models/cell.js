Cell = function(row, column, state, grid) {
	var that = this;
	var neighbours = [];
	this.state = state;
	this.nextState = '';
	
	this.toString = function() {
		return state;
	};
	
	this.update = function() {
		state = that.nextState;
	};
	
	this.calculateNextState = function(){
		var cellStateToLeft = getCellState(row, column - 1);
		var cellStateToRight = getCellState(row, column + 1);
		
		if(that.state === '+' && (cellStateToLeft === '+' && cellStateToRight === '+')){
			that.nextState = '+';
		} else {
			that.nextState = '-';
		}
	};
	
	function getCellState(row, otherColumn){
		var otherCell = grid[row][otherColumn];
		if(otherCell == undefined){
			return '-';
		}
		return grid[row][otherColumn].state;
	};
};