import React, { useEffect, useState } from 'react';
import AddSubjectModal from "../modal/AddSubjectModal"
import axios from 'axios';
 function Subject() {
    const [subjecttList, setSubjectList] = useState([]);
    useEffect(() => {
      axios.get('https://nodetest.wpboss.cc/showsubject').then((response) => {
        setSubjectList(response.data);
      })
        .catch((err) => {
          console.log(err);
        })
    }, [subjecttList]);

   const deleteSubject = (id) => {
    axios.delete(`https://nodetest.wpboss.cc/deletesubject/${id}`, {

    })
}
    return (
        <div>
            <div className="card mt-3">
                <div className="card-header">
                    <span className="float-start left-title">Subject Lists</span>
                    <span className="float-end"><AddSubjectModal></AddSubjectModal></span>
                </div>
                <div className="card-body mt-3">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th scope="col">SL No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {subjecttList.map((subjectRow, index) => {
                        return (
                          <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{subjectRow.name}</td>
                            {/* <EditStudentModal id={studentRow._id}></EditStudentModal> */}
                            {/* onClick={() => deleteSubject(subjectRow._id)} */}
                            <td>&nbsp;&nbsp;<button className="btn btn-danger" onClick={() => deleteSubject(subjectRow._id)}>Delete</button></td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
            </div>
        </div>
    )
}
export default Subject;