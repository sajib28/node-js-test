import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import axios from 'axios';
function AddSubjectModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [subjectData, subjectDataState] = useState({
        name: '',
    })

    const addSubject = (e) => {
        e.preventDefault();
        axios.post('https://nodetest.wpboss.cc/insetsubject', {
            name: subjectData.name,
        })
        subjectDataState("");
        setShow(false);
    }
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add New Student
            </Button>

            <Modal show={show} onHide={handleClose}>
                <form className="add-student" id="addSubject">
                    <Modal.Header closeButton>
                        <Modal.Title>Add New Subject</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" value={subjectData.name} onChange={(e) => { subjectDataState({ ...subjectData, name: e.target.value }) }} />
                        </div>
                        {/* <button type="submit" className="btn btn-primary" onClick={addSubject}>Submit</button> */}

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit" onClick={addSubject}>
                            Save
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>

        </>
    )
}
export default AddSubjectModal;