import './login.css'

export default function Login() {
  return (
    <div className='login'>
      <div className="loginWrapper">
        <div className="loginLeft">
            <h3 className="logingLogo">Lamasocial</h3>
            <span className="loginDesc">Connect with Friends and the world around you on Lamasocial.</span>
        </div>
        <div className="loginRright">
            <div className="loginBox">
                <input placeholder="Email" className="loginInput" />
                <input placeholder="Password" className="loginInput" />
                <button className="loginButton">Log In</button>
                <span className="loginForgot">Forgot Password?</span>
                <button className="logingRagisterButton">Creat New Account</button>
            </div>
        </div>
      </div>
    </div>
  )
}
