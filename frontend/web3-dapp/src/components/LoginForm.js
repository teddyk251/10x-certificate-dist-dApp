import { useState } from "react";
import { useHistory } from "react-router-dom";

const LoginForm = () => {

    const [details, setDetails] = useState({name:"", email:"", password:"" });
    const [loginStatus, setLoginStatus] = useState(false);
    const [error, setError] = useState(false);
    const history = useHistory();

    const submitHandler = (e) => {
        e.preventDefault();

        fetch('http://127.0.0.1:5000/login', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(details)
        })
        .then(response => response.json())
        .then((data) => {
            if (data.body === "success") {
                setLoginStatus(true);
                if (data.role === "trainee") {
                    history.push("/trainee");
                 } else {
                     history.push("/staff");
                 }
            }
            else {
                setError(true);
            }

            console.log(data.body)
           
        })
    }


    return ( 
        <form  onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Login</h2>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" onChange={e => setDetails({...details, name:e.target.value})} value={details.name} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" required id="email" onChange={e => setDetails({...details, email:e.target.value})} value={details.email} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" required onChange={e => setDetails({...details, password:e.target.value})} value={details.password}/>
                </div>
                
                <input type="submit" value="LOGIN" />
                { error && <div className="incorrect-input">Invalid Login Credentials</div>}
            </div>
        </form>
     );
}
 
export default LoginForm;