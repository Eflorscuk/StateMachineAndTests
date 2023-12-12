const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3001

app.use(bodyParser.json())

// States
const states = ['pending', 'in progress', 'done']

// Tasks' array
const tasks = [{ id: 0, description: 'TEST', state: 'done' }]

// All tasks
app.get('/tasks', (req, res) => {
    console.log(req)
    console.log(res)
    res.json(tasks)
})

// Add new Task
app.post('/tasks', (req, res) => {
    const { description } = req.body
    const newTask = {
        id: tasks.length + 1,
        description,
        state: states[0],
    }
    tasks.push(newTask)
    res.json(newTask)
})

// To update a task
app.put('/tasks/:id', (req, res) => {
    const { id } = req.params
    const { state } = req.body

    if (!states.includes(state)) return res.status(400).json({ error: 'Invalid State!' })

    const taskId = parseInt(id)

    if (isNaN(taskId)) return res.status(400).json({ error: 'Invalid Task ID!' })

    const task = tasks.find(t => t.id === taskId)

    if (!task) return res.status(404).json({ error: 'Task not found!' })

    task.state = state
    res.json(task)
})

const server = app.listen(port, () => console.log(`Server listen in http://localhost:${port}`))

module.exports = { app, server }
