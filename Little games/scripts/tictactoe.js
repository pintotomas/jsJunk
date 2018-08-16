var siguiente_turno = {
	"X": "O",
	"O": "X"
};

var players = {"X":1,
			   "O":2
			   }

player1_wins = 0
player2_wins = 0

grid = ["E","E","E","E","E","E","E","E","E"];
turno = "X"

var celdas = document.getElementsByClassName("grid-item");

for (var x = 0; x < celdas.length; x++){
	celdas[x].addEventListener("click", jugar);
}

var boton_restart=document.getElementById("restartbutton");
boton_restart.addEventListener("click", restart);
possible_wins = [[1,2], [-1,1], [-2,-1], [3,6], [-3,3], [-3,-6], [4,8], [-4,4], [-4,-8], [2,4], [-2,2], [-2,-4]];
valid_positions = [[0,3,6], [1,4,7], [2,5,8],[0,1,2], [3,4,5], [6,7,8], [0], [4], [8], [2], [4], [6]]

function jugar(){
	if ((this.innerHTML != "X") && (this.innerHTML != "O")){
		var last_play = this.innerHTML;
		grid[last_play] = turno;
		this.innerHTML = turno;
		document.getElementById('ponerFicha').play();
		this.style.color = "#f4f442";
		for (var i = 0; i < possible_wins.length; i++){
			if (valid_position_to_check_win(last_play, i)){
				var winner = check_win(last_play, possible_wins[i]);
				if (winner){
					console.log("There is a winner")
					setTimeout(restart(turno), 500);
					return
				}
				
			}
		}
		if (game_draw()){
				restart("E")
				return
				}
		turno = siguiente_turno[turno];
	}
}

function game_draw(){
	return !(grid.includes("E"))
}

function valid_position_to_check_win(position, win_to_check){

	var array = valid_positions[win_to_check];

	return array.includes(parseInt(position));
}


function check_win(last_play, possibles){
	last_play = parseInt(last_play);
	if ((grid[last_play] == grid[last_play + possibles[0]]) && (grid[last_play] == grid[last_play + possibles[1]])){
		return true;
	}
	return false;
}

function restart(winner){
	if ((winner == "X") || (winner == "O")){
		winner_mark = document.getElementById("winner");
		looser_mark = document.getElementById("looser");
		winner_mark.innerHTML = winner;
		looser_mark.innerHTML = siguiente_turno[winner];
		final_msg = document.getElementById("endgamenotification");
		final_msg.style.display = "inline";
		if (winner == "X"){
			winner_win_count = document.getElementById("p1wins")
			player1_wins += 1
			win_counter = player1_wins
		}
		else{
			winner_win_count = document.getElementById("p2wins")
			player2_wins += 1
			win_counter = player2_wins
		}

		winner_win_count.innerHTML = win_counter

		


		setTimeout(clear_cells, 1000);
	}
	else{
		clear_cells();
	}
	
}

function clear_cells(){
	var celdas = document.getElementsByClassName("grid-item");
	for (var x = 0; x < celdas.length; x++){
		celdas[x].innerHTML = x;
		celdas[x].style.color = "transparent";
	}
	turno = "X"
	grid = ["E","E","E","E","E","E","E","E","E"];
	final_msg = document.getElementById("endgamenotification");
	final_msg.style.display = "inline";
	final_msg.style.display = "none";

}
