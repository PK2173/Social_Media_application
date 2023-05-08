import './register.css'

export default function Register() {
  return (
    <div className='register'>
      <div className="registerWrapper">
        <div className="registerLeft">
            <h3 className="registergLogo">Lamasocial</h3>
            <span className="registerDesc">Connect with Friends and the world around you on Lamasocial.</span>
        </div>
        <div className="registerRright">
            <div className="registerBox">
                <input placeholder="Username" className="registerInput" />
                <input placeholder="Email" className="registerInput" />
                <input placeholder="Password" className="registerInput" />
                <input placeholder="Password Again" className="registerInput" />
                <button className="registerButton">Sign Up</button>
                <button className="registergRagisterButton">Log into Account</button>
            </div>
        </div>
      </div>
    </div>
  )
}
