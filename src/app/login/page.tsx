import LeftLoginSide from "./components/LeftLoginSide";
import LoginForm from "./components/LoginForm";

export default function Login() {
    return (
        <section className="grid grid-cols-1 grid-rows-1 gap-0 h-screen md:grid-cols-2">
            <LeftLoginSide />
            <LoginForm />
        </section>
    )
}