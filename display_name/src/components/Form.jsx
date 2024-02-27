import { useState} from 'react';

function Form() {
    // const [formData, setFormData] = useState({});
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [fullName, setFullName] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        // setFormData(...formData, { })
        const fullNameValue = `Full Name : ${firstName} ${lastName}`;
        setFullName(fullNameValue);
        setFirstName("");
        setLastName("");
    }
  return (
    <div>
        <h1>Full Name Display</h1>
        <form onSubmit={submitHandler}>
            <label>First Name : </label>
            <input type="text" value={firstName} placeholder="First Name" id='firstName' required 
             onChange={(e) => setFirstName(e.target.value)} />
            <br/>
            <br/>
            <label>Last Name : </label>
            <input type="text" value={lastName} placeholder="Last Name" id='lastName' required
             onChange={(e) => setLastName(e.target.value)} />
            <br/>
            <br/>
            <button type="submit">submit</button>
        </form>
        <div>
            <h3>{fullName}</h3>
        </div>
    </div>
  )
}

export default Form