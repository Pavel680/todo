window.onload = function () {
  let input = document.getElementById('in');
  let out = document.getElementById('out');
  let btn = document.getElementById('add');
  input.onchange=function(){
	CreateNewTask(input.value);
	input.value = '';  
  }

  function CreateNewTask(text) {
	let newTaskField = document.createElement('form');
	let newTask = document.createElement('span');
	newTask.textContent = text;
	
	out.appendChild(newTaskField);

	newTask.addEventListener('dblclick',function (){
	newTask.setAttribute('contenteditable','true');
	})

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
	deleteButton.className='deleteButton';
	
    let checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox', 'value','text');
	checkbox.className='inputCheckbox';
	newTaskField.appendChild(checkbox);
	newTaskField.appendChild(newTask);
    deleteButton.onclick = function () {
     out.removeChild(newTaskField);
    };
    newTaskField.appendChild(deleteButton);
	
  }
  btn.onclick = function () {
    if (input.value == '') {
	input.setAttribute('placeholder','Поле ввода не должно быть пустым');	
	} else {
    CreateNewTask(input.value);
	input.value = '';
	input.removeAttribute('placeholder'); }
  };
};
