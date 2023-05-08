import './closeFriend.css'

export default function CloseFriend({ friend }) {
    return (
        <li className="sidebarFriend">
            <img className='sidebarFriendImg' src={friend.profilePicture} alt="" />
            <span className="sidbarFriendName">{friend.username}</span>
        </li>
    )
}
