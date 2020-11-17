window.onload = function () {
	let input = document.getElementById('in');
	let out = document.getElementById('out');
	let btn = document.getElementById('add');
  function CreateNewTask(text) {
	let newTaskField = document.createElement('form');
	let newTask = document.createElement('span');
	newTask.textContent = text;
	newTask.setAttribute('contenteditable', 'true');
	out.appendChild(newTaskField);
let deleteButton = document.createElement('button');
	deleteButton.textContent = 'X';
	deleteButton.className = 'deleteButton';
	deleteButton.onclick = function () {
	out.removeChild(newTaskField);
    }
let checkbox = document.createElement('input');
	checkbox.setAttribute('type', 'checkbox', 'value', 'text');
	checkbox.className = 'inputCheckbox';
	newTaskField.appendChild(checkbox);
	newTaskField.appendChild(newTask);
	newTaskField.appendChild(deleteButton);
  }
input.onkeyup = function (e) {
	if( e.keyCode === 13 ) {
	if ( input.value == input.value.replace( /[^\s]/g, '' ) ) {
	input.value = '';
	return null;
	}
	CreateNewTask( input.value );
	input.value = '';
	} else {
	return false;
	}
	}
btn.onclick = function () {
	if ( input.value == input.value.replace( /[^\s]/g, '' ) ) {
	input.value = '';
	return null;	
	} else {
	CreateNewTask( input.value );
	input.value = '';
	}
	}

	
}
	

