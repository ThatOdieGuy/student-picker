const router = require("express").Router();
const db = require("../../models");

//   /api/students
router.get("/", (req, res) => {
  db.Students.findAll().then(students => {
    res.json(students);
  });
})

router.post("/add", (req, res) => {
  const student = req.body.student;

  console.log("Got student!", student);

  db.Students.create({ student: student }).then(() => {
    //Created new student!
    
    res.json({ studentReceived: student });
  })

  
});

module.exports = router;
