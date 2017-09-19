const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log("Hit the todos route");
  
  const todos = ["Do Laundry", "Cook food"]

  res.render("todos", {
    todos: todos
  })
})
  
router.get('/new', (req, res) => {
  console.log("Hit the todos/new ");
  
  res.render("new", {})
})
  
router.get('/:id', (req, res) => {
  console.log("Hit the todos/:id ");
  
})
  
router.get('/:id/edit', (req, res) => {
  console.log("Hit the todos/:id/edit ");
    
})

module.exports = router;