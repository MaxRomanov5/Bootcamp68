import { useDispatch } from "react-redux";
import AuthForm from "../components/AuthForm";
import { login } from "../components/redux/auth/operation";

function Login() {
    const dispatch = useDispatch();
    function handleSubmit(e) {
        e.preventDefault();
        const email = e.currentTarget.elements.email.value;
        const password = e.currentTarget.elements.password.value;
        dispatch(login({ email, password }));
        // e.target.reset();
    }
    return <AuthForm handleSubmit={handleSubmit} />;
}

export default Login;
