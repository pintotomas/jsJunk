var siguiente_turno = {
	"X": "O",
	"O": "X"
};

grid = ["E","E","E","E","E","E","E","E","E"];
turno = "X"

var celdas = document.getElementsByClassName("grid-item");

for (var x = 0; x < celdas.length; x++){
	celdas[x].addEventListener("click", jugar);
}

var boton_restart=document.getElementById("restartbutton");
boton_restart.addEventListener("click", restart);
possible_wins = [[1,2], [-1,1], [-2,-1], [3,6], [-3,3], [-3,-6], [4,8], [-4,4], [-4,-8]];

function jugar(){
	if ((this.innerHTML != "X") && (this.innerHTML != "O")){
		var last_play = this.innerHTML;
		grid[last_play] = turno;
		this.innerHTML = turno;
		this.style.color = "#000000";
		for (var i = 0; i < possible_wins.length; i++){
			var winner = check_win(last_play, possible_wins[i])
			if (winner){
				setTimeout(restart(turno), 500);
			}
		}

		turno = siguiente_turno[turno];
	}
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
