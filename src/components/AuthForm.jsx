import { Link } from "react-router-dom";

function AuthForm({ formType = "login", handleSubmit }) {
    return (
        <form onSubmit={handleSubmit}>
            {formType === "register" && <input type="text" name="name" />}
            <input type="text" name="email" />
            <input type="password" name="password" />
            <button type="submit">Submit</button>
            <p>
                {formType === "register" ? (
                    <Link to="/login">Login form</Link>
                ) : (
                    <Link to="/register">Register form</Link>
                )}
            </p>
        </form>
    );
}

export default AuthForm;
