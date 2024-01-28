"use client"
import { useAuth } from '../contexts/AuthContext';

const LoginComponent = () => {
    const { isLoggedIn, login, logout } = useAuth();

    return (
        <div>
            {isLoggedIn ? (
                <>
                    <p>You are logged in!</p>
                    <button onClick={logout}>Logout</button>
                </>
            ) : (
                <>
                    <p>You are not logged in.</p>
                    <button onClick={() => login("sampleToken")}>Login</button>
                </>
            )}
        </div>
    );
};

export default LoginComponent;