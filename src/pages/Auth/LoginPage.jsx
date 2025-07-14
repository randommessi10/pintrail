import { LogIn, Mail, Lock, Eye, EyeOff, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import '../../styles/LoginPage.css';
import axios from 'axios';
export default function LoginPage() {
    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:3000/auth/login', 
            {email,password}
        )
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        });
        
    }
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [showPassword,setShowPassword] = useState(false);
    return (
        <div className="loginCard">
            <div className="loginIconWrapper">
                <LogIn />
            </div>
            <h2>Welcome Back</h2>
            <p className="subtext">Sign in to your Pintrail account to continue exploring</p>

            <form onSubmit={handleSubmit}>
                <p>Email</p>
                <div className="inputWrapper">
                    <Mail className="icon" />
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <p>Password</p>
                <div className="inputWrapper">
                    <Lock className="icon" />
                    <input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="Password" value={password} 
                    onChange={(e) => setPassword(e.target.value)} />
                    {showPassword ? 
                        <EyeOff className="icon right" onClick={() => setShowPassword(false)} /> : 
                        <Eye className="icon right" onClick={() => setShowPassword(true)} />}
                </div>

                <p className="forgotPassword">
                    <Link to="/forgot-password">Forgot password?</Link>
                </p>

                <button type="submit" className="primary-btn">Sign In</button>
            </form>

            <p>Don't have an account? <Link to="/register">Sign Up</Link></p>
            <p className="backHomeLink">
                <Link to="/">
                    <ArrowLeft className="arrowIcon" />
                    Back to home
                </Link>
            </p>
        </div>
    );
}
