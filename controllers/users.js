const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log("Hit the users route");
  
  const todos = ["Do Laundry", "Cook food"]

  res.send("All Users")
})
  
router.get('/new', (req, res) => {
  console.log("Hit the todos/new ");
  res.send("New User")
})
  
router.get('/:id', (req, res) => {
  
  res.send("User w/ ID")
})
  
router.get('/:id/edit', (req, res) => {
  res.send("User Edit")
})

module.exports = router;