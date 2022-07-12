
import Api from '../Api/Api'
import { useState, useEffect } from 'react';

const AdminReview = () => {
    const [apiCall, setApiCall] = useState({})

    useEffect(() => {
        if (Object.keys(apiCall).length === 0) {

        } else {
            renderEachElement()
            console.log('ouiii')
        }
        console.log(apiCall)

    }, [apiCall]);

    const renderEachElement = () => {
        {
            apiCall.map(function (eachElement) {
                return (
                    <ul>
                        <li>{eachElement.id_challenge}</li>
                        <li>{eachElement.id_student}</li>
                        <li>{eachElement.id_student}</li>
                        <li>{eachElement.name_student}</li>
                        <p>---------</p>
                    </ul>
                )
            })
        }
    }

    return (
        <div>
            <Api setApiCall={setApiCall} apiCall={apiCall} />
            {/* {apiCall.map(function (eachElement) {
                return (
                    <ul>
                        <li>{eachElement.id_challenge}</li>
                        <li>{eachElement.id_student}</li>
                        <li>{eachElement.id_student}</li>
                        <li>{eachElement.name_student}</li>
                        <p>---------</p>
                    </ul>
                )
            })} */}
        </div>
    );
}
export default AdminReview