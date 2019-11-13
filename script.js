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

	 
	document.addEventListener('keyup', enter);
	
}

function createInput() {
	var unos = document.createElement('input');
	unos.setAttribute('type', 'text');
	document.querySelector('.input-field').appendChild(unos);
}

function enter(e) {
	var ev = e.keyCode;
	console.log(ev);
		if (ev === 13) {
			createInput();
		}
}

onClick(podnaslov);

//FLEX LIST @ FORM

document.querySelector(".green").textContent = "da l' ce da radi";

var a = document.createElement('div');

a.textContent = "Hoce li dodati ovaj tekst";

document.querySelector('form').appendChild(a);

var arr = ["image01", "image02", "image03", "image04"];

var dodajimg = document.querySelector('.testimg');
for(var i = 0; i < arr.length; i++) {
	dodajimg.innerHTML += "<img src='img/" + arr[i] + ".jpg' alt='slika'>";
	document.querySelectorAll(".testimg").apppendChild = dodajimg;
}

// Table with sticky header

for (var j = 1; j < 21; j++) {
	
	var tableRows = document.querySelector("tbody");
	var tableRow = document.createElement("tr");
	var cells = tableRow.classList.add("cells");
	tableRows.prepend(tableRow);

	for (var i = 1; i < 6; i++) {
		var arr = [21 - j, "Slobodan", "male", "09.06.1978", "Serbia"]
		var cell = document.querySelector(".cells")
		var addCell = document.createElement("td");
		addCell.textContent = arr[i - 1];
		cell.appendChild(addCell);
	}
}