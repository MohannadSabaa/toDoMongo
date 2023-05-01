import { renderHook, container, taskTitle } from "./renderComponent.js";
const add = document.querySelector('#add');
const taskTitleInput = document.querySelector('#task-title');
document.addEventListener('DOMContentLoaded',async () => {
    taskTitleInput.focus()
    
    document.addEventListener(`${'keypress'}`,async (e) => {
        
        if(e.code === 'Enter') {
            const resp = await fetch('/api/v1/posts', {
                method: 'POST',
                headers:{"Content-type": "application/json"},
                body: JSON.stringify({
                            task: taskTitle.value,
                        })})
                const result = await resp;
                    window.location.reload()
        }
        })
        
        container.addEventListener('click', async (e) => {
        const Eventid = e.target.id
        const parent = e.target.closest('.card')
        if(Eventid === 'done') {
            const resp = await fetch(`/api/v1/posts/done/${parent.id}`,{method:'PUT'});
            const result = await resp.json();
            window.location.replace('/')
            }
        if(Eventid === 'undone') {
            const resp = await fetch(`/api/v1/posts/undone/${parent.id}`,{method:'PUT'});
            const result = await resp.json();
            window.location.replace('/')
            }
        if(Eventid === 'delete') {
            const resp = await fetch(`/api/v1/posts/${parent.id}`, {method:'DELETE'});
            const result = await resp.json();
            window.location.replace('/')
            }
        })
const resp = await fetch('/api/v1/posts');
   const result = await resp.json()
   result.forEach(({_id, task, __v} = r) => renderHook({_id, task, __v}))
})

console.dir(document)