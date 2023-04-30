const taskTitle = document.querySelector('#task-title')
const container = document.querySelector('.tasks-container');


const renderHook = ({_id, task, __v}) => {
    const taskCard = document.createElement('div');
    taskCard.classList.add('card');
    taskCard.id = _id;
    const taskEl = document.createElement('li');
    taskEl.classList.add('task')
    const taskName = document.createElement('p');
    taskName.textContent = task.toUpperCase();
    taskName.className = `${__v === 1 ? 'true': 'false'}`
    const btnBox = document.createElement('div');
    btnBox.classList.add('btn-box');
    const done = document.createElement('button');
    done.id = 'done';
    done.className = "material-symbols-outlined"
    done.textContent ='fact_check'
    const undone = document.createElement('button');
    undone.id = 'undone';
    undone.className = "material-symbols-outlined"
    undone.textContent = 'hourglass_top'
    btnBox.append(done, undone);
    taskEl.append(taskName, btnBox);
    taskCard.append(taskEl);
    container.append(taskCard)
}

export  {renderHook, container, taskTitle};