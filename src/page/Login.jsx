import { useState } from "react";

export default function Login() {
    const [userID, setUserID] = useState("");
    const [password, setPassword] = useState("");

    const handleLoginSubmit = (ev) => {
    ev.preventDefault();
}
    return (
        <div className="h-screen flex items-center justify-center bg-blue-300">
            <div className="bg-white py-12 px-10 border border-red-700 rounded-3xl shadow shadow-red">
                <div className="text-center mb-5 text-4xl">Login</div>
                <form className="max-w-md mx-auto" onSubmit={handleLoginSubmit}>
                    <input
                        type="text"
                        placeholder="Enter your id"
                        value={userID}
                        onChange={e => setUserID(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={ e=> setPassword(e.target.value)}
                    />
                    <div className="pl-5 py-3 ">
                        <input type="checkbox" />
                        Remember me
                    </div>
                    
                    <button className="primary">Login</button>

                </form>
            </div>
        </div>
    );
}