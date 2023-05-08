import "./online.css"

export default function Online({user}) {
    return (
        <li className="rightbarFriend">
            <div className="rightPrtofileImgContainer">
                <img src={user.profilePicture} alt="" className="rightPrtofileImg" />
                <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarusername">{user.username}</span>
        </li>
    )
}
