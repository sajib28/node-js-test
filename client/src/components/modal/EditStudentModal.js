import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import axios from 'axios';
function EditStudentModal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);


    const [studentData, studentDatState] = useState({
        name: '',
        email: '',
        phone: '',
        dob: '',
        subject: ''
    })
    const editStudent = (id) => {
        axios.get(`https://nodetest.wpboss.cc/editStudent/${id}`)
            .then((response) => {
                studentDatState({
                    name:response.data.name,
                    email:response.data.email,
                    phone:response.data.phone,
                    dob:response.data.dateOfBirth,
                    subject:response.data.subject
                })
               
            })
            .catch((err) => {
                console.log(err);
            })
        setShow(true);
    }

    const updateStudent = (id) => {
        axios.put('https://nodetest.wpboss.cc/updatestudent', {
            id: id,
            name: studentData.name,
            email: studentData.email,
            phone: studentData.phone,
            dob: studentData.dob,
            subject: studentData.subject,
        })
        setShow(false);
    }

    return (
        <>
            <Button variant="success" onClick={() => editStudent(props.id)}>
                Edit { }
            </Button>

            <Modal show={show} onHide={handleClose}>
                <form className="add-student">
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Student</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" value={studentData.name} onChange={(e) => { studentDatState({ ...studentData, name: e.target.value }) }} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" value={studentData.email} onChange={(e) => { studentDatState({ ...studentData, email: e.target.value }) }} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Phone</label>
                            <input type="text" className="form-control" id="phone" value={studentData.phone} onChange={(e) => { studentDatState({ ...studentData, phone: e.target.value }) }} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="death_of_birth" className="form-label">Date of Birth</label>
                            <input type="date" className="form-control" id="death_of_birth" value={studentData.dob} onChange={(e) => { studentDatState({ ...studentData, dob: e.target.value }) }} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="subject" className="form-label">Subject</label>
                            <input type="text" className="form-control" id="subject" value={studentData.subject} onChange={(e) => { studentDatState({ ...studentData, subject: e.target.value }) }} />
                        </div>
                        {/* <button type="submit" className="btn btn-primary" onClick={addStudent}>Submit</button> */}

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={() => updateStudent(props.id)}>
                            Update
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>

        </>
    )
}
export default EditStudentModal;