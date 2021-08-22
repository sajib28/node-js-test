const express = require('express'); // node js framework
const app = express();
const mongoose = require('mongoose'); // mongoDb Driver
const cors = require('cors');
app.use(cors());
const PORT = process.env.PORT || 8000; // port number
const Student = require('./model/Student');
const Subject = require('./model/Subject');
app.use(express.json()); // send json data to server
app.get('/', (req, res) => {
  res.send('Working');
});

// app.get('/:name', (req, res) => {
//   const name = req.params.name;
//   res.send(`working ${name}`);
// });

mongoose.connect('mongodb+srv://sajib:sajib12345@cluster0.e8ub5.mongodb.net/reactapione', { useNewUrlParser: true, useUnifiedTopology: true })
    .then((res) => {
        console.log("Connection OK")
    })
    .catch((err) => {
        console.log(err)
    })

//Add Student Data
app.post("/insetstudent", async (req, res) => {
    const student = new Student({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        dob: req.body.dob, //dateOfBirth is collection field
        subject: req.body.subject,

    })
    try {
        await student.save();
        res.send("Datas Inserted Successfully");
    } catch (error) {
        console.log(error)
    }

});

 

// Display Student list
app.get("/showstudent", async (req, res) => {
    Student.find({}, (err, result) => {
        if (err) {
            res.send(err);
        }
        res.send(result);
    });
});

// Edit Student Data
app.get("/editStudent/:id", async (req, res) => {
    const id = req.params.id;
    try {
        Student.findById(id, (err, editedData) => {
            res.send(editedData);
        });
    } catch (err) {
        res.send(err);
    }

});


// Update Student Data 
app.put("/updateStudent", async (req, res) => {
    id = req.body.id;
    try {
        Student.findById(id, (err, updatedData) => {
            updatedData.name = req.body.name;
            updatedData.email = req.body.email;
            updatedData.phone = req.body.phone;
            updatedData.dob = req.body.dob;
            updatedData.subject = req.body.subject;
            updatedData.save();
            res.send("Update");
        });
    } catch (err) {
        res.send(err);
    }

});

// Delete Student Data by ID 
app.delete("/deletestudent/:id", async (req, res) => {
    const id = req.params.id;
    await Student.findByIdAndRemove(id).exec();
    res.send("Deleted");
});

//  Add Subject Data   

app.post("/insetsubject", async (req, res) => {
    const subject = new Subject({
        name: req.body.name
    })
    try {
        await subject.save();
        res.send("Subject Inserted Successfully");
    } catch (error) {
        console.log(error)
    }
});

//  Show Subject Data   

app.get("/showsubject", async (req, res) => {
    Subject.find({}, (err, result) => {
        if (err) {
            res.send(err);
        }
        res.send(result);
    });
});

// Edit Student Data
app.get("/editSubject/:id", async (req, res) => {
    const id = req.params.id;
    try {
        Subject.findById(id, (err, editedData) => {
            res.send(editedData);
        });
    } catch (err) {
        res.send(err);
    }

});

// Delete Student Data  by Id
app.delete("/deletesubject/:id", async (req, res) => {
    const id = req.params.id;
    await Subject.findByIdAndRemove(id).exec();
    res.send("Deleted");
});

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));