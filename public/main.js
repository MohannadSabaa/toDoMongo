const add = document.querySelector('#add');
const taskTitle = document.querySelector('#task-title')
const container = document.querySelector('.courses-container');

document.addEventListener('DOMContentLoaded',async () => {
    
    const resp = await fetch('/api/v1/posts')

   const result = await resp.json()
   result.forEach(({_id, task, __v} = r) => {
    const taskCard = document.createElement('div');
    taskCard.classList.add('card');
    taskCard.id = _id;
    const taskEl = document.createElement('li');
    taskEl.classList.add('task')
    const taskName = document.createElement('p');
    taskName.textContent = task;
    taskName.className = `${__v === 1 ? 'true': 'false'}`
    const btnBox = document.createElement('div');
    btnBox.classList.add('btn-box');
    const done = document.createElement('button');
    done.id = 'done';
    done.textContent = 'done'
    const undone = document.createElement('button');
    undone.id = 'undone';
    undone.textContent = 'undone'
    btnBox.append(done, undone);
    taskEl.append(taskName, btnBox);
    taskCard.append(taskEl);
    container.append(taskCard)
   })
})

add.addEventListener('click',async () => {
const resp = await fetch('/api/v1/posts', {
    method: 'POST',
    headers:{"Content-type": "application/json"},
    body: JSON.stringify({
                task: taskTitle.value,
                // author: 'Nada',
                // tags: ['node', 'backend'],
                // isPublished: true
            })})
    const result = await resp;
        window.location.reload();
})

container.addEventListener('click', async (e) => {
const Eventid = e.target.id

    if(Eventid === 'done') {
      
    const parent = e.target.closest('.card')
    const resp = await fetch(`/api/v1/posts/done/${parent.id}`,{method:'PUT'});
    const result = await resp.json();
    window.location.reload();
    }
    if(Eventid === 'undone') {
        
    const parent = e.target.closest('.card')
    const resp = await fetch(`/api/v1/posts/undone/${parent.id}`, {method:'PUT'});
        const result = await resp.json();
        
       window.location.replace('/')
    }
})