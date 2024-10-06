

document.getElementById('add_task').addEventListener('click', add_task);
function add_task()
{
    
    let taskInput = document.getElementById('task').value;
    if (task==="")
    {
        alert("Please enter a task");   
        return ;
    }
    const event = document.createElement('li')
    event.innerText = taskInput;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox_class';
    event.prepend(checkbox);
    event.appendChild(document.createElement('br'));
    checkbox.addEventListener('change', function()
    {
        if (checkbox.checked)
            event.classList.add('completed');//applying completed css style when checked
        else
            event.classList.remove('completed');
    })
    
    const deleteButton = document.createElement('input');
    deleteButton.type = 'Delete';
    deleteButton.className = 'delete_class';
    event.appendChild(deleteButton);
    

    const eventlist = document.getElementById('Tasks_to_do')
    
    eventlist.appendChild(event)
    
    deleteButton.addEventListener('click', function()
    {
        eventlist.removeChild(event);
    }
)
    
    
    task.value = '';}
