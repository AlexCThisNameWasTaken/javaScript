//document.getElementById("count-el").innerText = 5


let count = 0
let saveEl = document.getElementById("save-el")
let countStr = " "


function increment() {
	count = Math.floor(Math.random() * 1000)
	document.getElementById("count-el").innerText = count
}

function save() {
	countStr = count + " - "
	saveEl.textContent += countStr
	count = 0
	//count.textContent = count
	document.getElementById("count-el").innerText = count
	console.log(count)
}

function reset() {
	countStr = "Previous Entries: "
	document.getElementById("save-el").innerHTML= countStr
	//saveEl.textContent = 
	//count.textContent = 0
	count = 0
	document.getElementById("count-el").innerHTML = count
	console.log("asfddsfj")
}