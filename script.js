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