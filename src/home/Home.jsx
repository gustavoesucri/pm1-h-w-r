import { Link } from "react-router-dom";
import "./Home.css"

export default function Home() {
    return <>
        <h1>Home</h1>
        <ul className="home">
            <li>
                <Link to="/hello-world">Hello world</Link>
            </li>
            <li>
                <Link to="/calculadora">Calculadora</Link>
            </li>
            <li>
                <Link to="/imc">IMC</Link>
            </li>
        </ul>
    </>
}