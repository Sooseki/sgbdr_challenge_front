
import { useGetApi } from '../Api/Api'
import { useState, useEffect } from 'react';
import "./AdminReview.css"

const AdminReview = () => {

    const [getStudent, students, setStudents] = useGetApi("http://localhost:5050/admin/student")

    useEffect(() => {
        getStudent()
    }, []);

    return (
        <div>
            <ul className="Red">
                {students && students.rows.map((student, index) => (
                    <ul key={`${student.name_student}-${index}`} className="test">
                        <li>{student.id_student}</li>
                        <li>{student.id_challenge}</li>
                        <li>{student.mark_student_challenge}</li>
                        <li>{student.name_student}</li>
                    </ul>
                )
                )}
            </ul>
        </div>
    );
}
export default AdminReview