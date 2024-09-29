import { useState, useContext } from "react";
import { AuthContext } from "../store/auth-context";
import { Link, useNavigate } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { isLoggedIn, loginHandler } = useContext(AuthContext);
    const navigate = useNavigate();

    const handlerUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlerPasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Basic validation
        if (username.trim() === "" || password.trim() === "") {
            setError("Username and password cannot be empty.");
            return;
        }
        loginHandler();
        navigate("/game");
    };

    return (
        <>
            {!isLoggedIn && (
                <div>
                    <h1>This is the Login component</h1>
                    <form onSubmit={handleSubmit} aria-label="Login Form">
                        <fieldset>
                            <label htmlFor="username">User Name:</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={username}
                                onChange={handlerUsernameChange}
                                aria-required="true"
                            />
                            <br />

                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={handlerPasswordChange}
                                aria-required="true"
                            />
                            <br />

                            {error && <p style={{ color: "red" }}>{error}</p>}

                            <button type="submit">Submit</button>
                        </fieldset>
                    </form>
                </div>
            )}

            {isLoggedIn && (
                <>
                    <p>Login successful! Welcome, {username}.</p>
                    <Link to="/game">Go to game</Link>
                </>
            )}
        </>
    );
}

export default Login;
