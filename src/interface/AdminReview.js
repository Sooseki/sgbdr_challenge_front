
import { useGetApi } from '../Api/Api'
import { useState, useEffect } from 'react';


const AdminReview = () => {

    const [getStudent, students, setStudents] = useGetApi("http://localhost:5050/admin/student")

    useEffect(() => {
        getStudent()
    }, []);
    
    return (
        <div>
        {students && students.rows.map((student, index) => (
            <ul key={`${student.name_student}-${index}`}>
                <li>{student.id_challenge}</li>
                <li>{student.id_student}</li>
                <li>{student.name_student}</li>
                <p>---------</p>
            </ul>
            )
        )}
        </div>
    );
}
export default AdminReview