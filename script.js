//INITIAL TEST

console.log("bilo sta");

//LOOPS

//forEach - practical use

var arr = [1, 4, 57, true, "bravo care!"];

arr.forEach(function(item) {
	console.log(item);
});

arr.forEach(function(item){
	var dopuna = document.getElementById("puni");
	dopuna.innerHTML += '<p>' + item + '</p>';

});

arr.forEach(function(item){
	
	var dodajga = document.createElement('p');
	dodajga.textContent = item;
	document.querySelector('.dodaj').appendChild(dodajga);

});

// Input fields - onClick

var podnaslov = document.querySelector('.input-title');

function onClick(e) {
	
	podnaslov.addEventListener('click', createInput);
}

function createInput() {
	var unos = document.createElement('input');
	unos.setAttribute('type', 'text');
	document.querySelector('.input-field').appendChild(unos);
}

onClick(podnaslov);