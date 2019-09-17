// CREATE A NEW NOTE
// An input and buttons shows up when clicked a new button
	document.addEventListener("click", function() {
	document.querySelector('.new-note').style.display = 'block';
});

// SAVE THE NOTE
// Save a note when clicked the save button
	function newElement() {
		let li = document.createElement("li");
		let inputvalue = document.querySelector("#myInput").value;
		let savedNote = document.createTextNode(inputvalue);
		li.appendChild(savedNote);
		if (inputvalue === ''){
			alert("Please write something")
		} else {
			document.querySelector("#myNotes").appendChild(li);
		}
		document.querySelector("#myInput").value = '';
		// Spawn close button for each note
		let span = document.createElement("span");
		text = document.createTextNode("\u00D7");
		span.className = "close";
		span.appendChild(text);
		li.appendChild(span);
		// Span edit button for each note
		let spanTwo = document.createElement("span");
	    textTwo = document.createTextNode(":");
	    spanTwo.className = "edit";
	    spanTwo.appendChild(textTwo);
	    li.appendChild(spanTwo);
		// Hide a saved note when clicked close button
		for (i = 0; i < close.length; i++){
			close[i].onclick = function() {
				let div = this.parentElement;
				div.style.display = "none";
				console.log(parentElement);
			}
		}
	}

// DELETE THE NOTE
// Clear inputs on the text area
	function clearElement() {
		document.querySelector("#myInput").value = '';
	}

// Create close button and append it to each note
	let nodeList = document.getElementsByTagName("li");
	let i;
	for (i = 0; i < nodeList.length; i++){
		span = document.createElement("span");
		text = document.createTextNode("\u00D7");
		span.className = "close";
		span.appendChild(text);
		nodeList[i].appendChild(span);
	}

// Click the close button to hide saved notes
	let close = document.getElementsByClassName("close");
	    i;
	for (i = 0; i < close.length; i++){
		close[i].onclick = function() {
		let div = this.parentElement;
		div.style.display = "none";
		}
	}
// EDIT THE NOTE
// Create edit button and append it to each note
	nodeList = document.getElementsByTagName("li");
	i;
	for (i = 0; i < nodeList.length; i++){
	  spanTwo = createElement("span");
	  textTwo = document.createTextNode(":");
	  spanTwo.className = "edit";
	  spanTwo.appendChild(text);
	  nodeList[i].appendChild(span);
	}
// Open and edit the saved note when clicked the edit button
