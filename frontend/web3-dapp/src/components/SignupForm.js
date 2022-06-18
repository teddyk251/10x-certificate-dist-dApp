import { useState } from "react";
import { Link } from "react-router-dom";

const SignUpForm = ({ Signup, error }) => {

    const [details, setDetails] = useState({ name: "", email: "", password: "", publicKey: "", role:"" });

    const submitHandler = (e) => {
        e.preventDefault();

        Signup(details);
    }


    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Register</h2>
                {/*error*/}
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" onChange={e => setDetails({ ...details, name: e.target.value })} value={details.name} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" required id="email" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" required onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
                </div>
                <div className="form-group">
                    <label htmlFor="publicKey">Public Key:</label>
                    <input type="text" name="publicKey" id="publicKey" required onChange={e => setDetails({ ...details, publicKey: e.target.value })} value={details.publicKey} />
                </div>
                <label>Role</label>
                <select
                    value={details.role}
                    onChange={(e) => setDetails({...details, role:e.target.value})}
                >
                    <option value="trainee">Trainee</option>
                    <option value="staff">Staff</option>
                </select>
                <input type="submit" value="SignUp" />
            </div>
            <Link to="/"> Login </Link>
        </form>
    );
}

export default SignUpForm;