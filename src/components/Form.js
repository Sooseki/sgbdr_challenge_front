import './form.css';
export const Form = ({questions, setUsername, setUserFamily}) => {
    console.log(setUserFamily)
   
    return (
        <div>
            <form>
                {Object.keys(questions).map((key, index) => {
                    return (
                        <div key={index}>
                            <label> {questions[key].question}
                                <input className='questions' type={questions[key].tag} onChange={(e) => setUsername(e.target.value)}/>
                            </label>
                        </div>
                    );
                })}
                <input type="submit" value="Envoyer" />
            </form>
        </div>
    )
}