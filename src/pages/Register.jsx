import { useDispatch } from "react-redux";
import { register } from "../components/redux/auth/operation";
import AuthForm from "../components/AuthForm";

function Register() {
    const dispatch = useDispatch();
    function handleSubmit(e) {
        e.preventDefault();
        const name = e.currentTarget.elements.name.value;
        const email = e.currentTarget.elements.email.value;
        const password = e.currentTarget.elements.password.value;
        console.log({ name, email, password });
        dispatch(register({ name, email, password }));
    }
    return <AuthForm formType="register" handleSubmit={handleSubmit} />;
}

export default Register;
