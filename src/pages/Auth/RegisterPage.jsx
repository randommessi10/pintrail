import { UserPlus, User, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import "../../styles/RegisterPage.css";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

export default function RegisterPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [checkbox, setCheckbox] = useState(false);

    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();

        if (name && email && password && checkbox) {
            axios.post('http://localhost:3000/auth/register', {
                name,
                email,
                password
            })
            .then(response => {
                console.log(response.data);
                alert('Account created successfully!');
                navigate('/login'); // 🔁 Redirect to Login after success
            })
            .catch(error => {
                if (error.response?.data?.message) {
                    alert(error.response.data.message); // Show backend error (e.g. duplicate email)
                } else {
                    alert('An unexpected error occurred. Please try again.');
                }
                console.error(error);
            });
        } else {
            alert('Please fill all fields and agree to the terms.');
        }
    }
    
    return (
        <div className="registerPage">
            <div className="loginCard">
                <div className="loginIconWrapper">
                    <UserPlus />
                </div>

                <h2>Join Pintrail</h2>
                <p className="subtext">Create your account to start exploring amazing destinations</p>

                <form onSubmit={handleSubmit}>
                    <p>Full Name</p>
                    <div className="inputWrapper">
                        <User className="icon" />
                        <input type="text" placeholder="Enter your full name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>

                    <p>Email</p>
                    <div className="inputWrapper">
                        <Mail className="icon" />
                        <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <p>Password</p>
                    <div className="inputWrapper">
                        <Lock className="icon" />
                        <input 
                            type={showPassword ? "text" : "password"} 
                            placeholder="Create your password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                        {showPassword ? 
                            <Eye className="icon right" onClick={() => setShowPassword(false)} /> : 
                            <EyeOff className="icon right" onClick={() => setShowPassword(true)} />
                        }
                    </div>

                    <div className="inputWrapper checkboxRow">
                        <input 
                            type="checkbox" 
                            id="terms" 
                            onChange={(e) => setCheckbox(e.target.checked)} 
                        />
                        <label htmlFor="terms" className="termsText">
                            I agree to the <Link to="/terms-of-service">Terms of Service</Link> and <Link to="/privacy-policy">Privacy Policy</Link>
                        </label>
                    </div>

                    <button type="submit" className="primary-btn">Create account</button>
                </form>

                <p className="infoText">
                    Already have an account? <Link to="/login">Sign In</Link>
                </p>

                <p className="backHomeLink">
                    <Link to="/"><span className="arrowIcon">←</span> Back to Home</Link>
                </p>
            </div>
        </div>
    );
}
