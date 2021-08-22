import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddStudentModal from '../modal/AddStudentModal';
import EditStudentModal from '../modal/EditStudentModal';
function Student() {
    const [studentList, setStudentList] = useState([]);
  useEffect(() => {
    axios.get('https://nodetest.wpboss.cc/showstudent').then((response) => {
      setStudentList(response.data);
    })
      .catch((err) => {
        console.log(err);
      })
  }, [studentList]);
  const deleteStudent = (id) => {
    axios.delete(`https://nodetest.wpboss.cc/deletestudent/${id}`, {

    })
  }
    return (
        <>
           <div className="card mt-3">
                <div className="card-header">
                  <span className="float-start left-title">Student Lists</span>
                  <span className="float-end"><AddStudentModal></AddStudentModal></span>
                </div>
                <div className="card-body mt-3">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th scope="col">SL No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Date Of Birth</th>
                        <th scope="col">Subject</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {studentList.map((studentRow, index) => {
                        return (
                          <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{studentRow.name}</td>
                            <td>{studentRow.email}</td>
                            <td>{studentRow.phone}</td>
                            <td>{studentRow.dob}</td>
                            <td>{studentRow.subject}</td>
                            <td><EditStudentModal id={studentRow._id}></EditStudentModal>&nbsp;&nbsp;<button className="btn btn-danger" onClick={() => deleteStudent(studentRow._id)}>Delete</button></td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
        </>
    )
}

export default Student;