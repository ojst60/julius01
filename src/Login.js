import { Link } from 'react-router-dom';

const Login = () => {
    return (  
        <div className="login">
            
            <div className="loginSection">

                <h2>Sign in to access your account</h2>
                <form className="loginForm">
                <input type="text" placeholder="Username"></input>
                <input type="password" placeholder="Password"></input>
                <button type="submit">Login</button>
                </form>

                <p><a href="/" _target="blank">Forgot UserName/Password?</a></p>
            </div>
            <div className="others">
                <p>Dont have an account? <Link to="/Signup" >Sign Up Now</Link></p>
                <p>or</p>
                <p>Continue with social media</p>

                
            </div>
            

        </div>
        
    )
    ;
}
 
export default Login;