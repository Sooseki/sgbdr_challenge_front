
import { useGetApi } from '../Api/Api'
import { useState, useEffect } from 'react';
import "./AdminReview.css"
import { apiUrl } from '../helpers';


const AdminReview = () => {

    const [getStudent, students, setStudents] = useGetApi(apiUrl + "/admin/student")

    useEffect(() => {
        getStudent()
    }, []);

    return (
        <div>
            <ul className='test title'>
                <li>id_student</li>
                <li>id_challenge</li>
                <li>name_student</li>
                <li>email_student</li>
                <li>first_name_student</li>
            </ul>
            {students && students.rows.map((student, index) => (
                <ul key={`${student.name_student}-${index}`} className={`test${index} test`}>
                    <li>{student.id_student}</li>
                    <li>{student.id_challenge}</li>
                    <li>{student.name_student}</li>
                    <li>{student.email_student}</li>
                    <li>{student.first_name_student}</li>
                </ul>
            )
            )}
        </div>
    );
}
export default AdminReview