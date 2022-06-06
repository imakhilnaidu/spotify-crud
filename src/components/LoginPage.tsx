import { useState } from "react"
import { Button, Card } from "react-bootstrap"
import logo from "../images/spotify-logo.png"
import "../style.css"

const LoginPage = () => {

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("");

    console.log(email);
    

  return (
    <div className="login">
        <img className="login-img" src={logo} alt="logo" />
        <Card className="login-card">
            <p className="login-card-title">LOGIN</p>
            <form className="login-form">
                <input 
                type="text" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required/>
                <input 
                type="password" 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required/>
                <br />
                <Button type="submit" variant="dark">Login</Button>
            </form>
        </Card>
    </div>
  )
}

export default LoginPage