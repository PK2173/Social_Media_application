import Feed from "../../component/feed/Feed"
import Rightbar from "../../component/rightbar/Rightbar"
import Sidebar from "../../component/sidebar/Sidebar"
import Topbar from "../../component/topbar/Topbar"
import "./profile.css"

export default function Profile() {
    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profilRight">
                    <div className="profileRoghtTop">
                        <div className="profileCover">
                            <img className="profileCoverImg" src="assets/post/3.jpeg" alt="" />
                            <img className="profileUserImg" src="assets/person/7.jpeg" alt="" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Safak Kocaoglu</h4>
                            <span className="profileInfoDesc">Hello My Friend</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar profile />
                    </div>
                </div>
            </div>
        </>
    )
}
