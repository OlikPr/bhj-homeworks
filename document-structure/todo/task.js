
const tasksForm = document.getElementById('tasks__form');
const taskInput = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');


function createTask(title) {
	const taskElement = document.createElement('div');
	taskElement.classList.add('task');

	const titleElement = document.createElement('div');
	titleElement.classList.add('task__title');
	titleElement.textContent = title;

	const removeButton = document.createElement('a');
	removeButton.classList.add('task__remove');
	removeButton.innerHTML = '&times;';
	removeButton.addEventListener('click', () => {
		taskElement.remove(); 
	});

	taskElement.appendChild(titleElement);
	taskElement.appendChild(removeButton);

	return taskElement;
}


function addTask(event) {
	event.preventDefault(); 

	const title = taskInput.value.trim();
	if (title !== '') {
		const task = createTask(title);
		tasksList.appendChild(task);
		taskInput.value = ''; 
	}
}


tasksForm.addEventListener('submit', addTask);