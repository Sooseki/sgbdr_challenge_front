import './form.css';
export const Form = ({ questions, submit, setData }) => {

    const updateUsers = (e, tag) => {
        // console.log(tag, ' : ', e.target.value)
        setData((data) => ({
            ...data,
            [tag]: e.target.value,
        }))
    }

    const handleSumbit = (e) => {
        e.preventDefault();
        submit();
    }

    return (
        <div>
            <form onSubmit={handleSumbit}>
                {Object.keys(questions).map((key, index) => {
                    return (
                        <div key={index}>
                            <label> {questions[key].question}
                                <input className={`questions ${String(questions[key].tag)}`} type={questions[key].tag} onChange={(e) => updateUsers(e, questions[key].tag)} />
                            </label>
                        </div>
                    );
                })}
                <input type="submit" value="Envoyer" />
            </form>
        </div>
    )
}

{/* <input className='questions' type={questions[key].tag} onChange={(e) => setData(e.target.value)}/> */ }