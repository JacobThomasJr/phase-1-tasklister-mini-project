
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#create-task-form');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const input = document.querySelector('#new-task-description');
      const task = input.value;
  
      const taskList = document.querySelector('#tasks');
      const newTask = document.createElement('li');
      newTask.textContent = task;
      taskList.appendChild(newTask);
  
      input.value = '';
    });
  });
  

