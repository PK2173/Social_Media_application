import { User } from '../../dummyData'
import Online from '../online/Online'
import './rightbar.css'

export default function Rightbar({profile}) {
  const HomeRightbar = ()=>{
    return(
      <>
      <div className="birthdayContainer">
          <img className='birthdayImg' src="assets/gift.png" alt="" />
          <span className="barthdaytext"> <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today.</span>
        </div>
        <img src="assets/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        {User.map(e=>(
          <Online key={e.id} user={e}/>
        ))}
      </>
    )
  }

  const ProfileRightbar = ()=>{
    return(
      <>
      <h4 className='rightbarTitle'>User Information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInforItem">
          <span className="rightbarInfoKey">City</span>
          <span className="rightbarInfoValue">New York</span>
        </div>
      </div>
      <div className="rightbarInfo">
        <div className="rightbarInforItem">
          <span className="rightbarInfoKey">From</span>
          <span className="rightbarInfoValue">Madrid</span>
        </div>
      </div>
      <div className="rightbarInfo">
        <div className="rightbarInforItem">
          <span className="rightbarInfoKey">Relationship</span>
          <span className="rightbarInfoValue">Single</span>
        </div>
      </div>
      <h4 className="rightbarTitle">User Friends</h4>
      <div className="rigthbarFollowings">
        <div className="rightbarFollowing">
          <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Jon Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/2.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Jon Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Jon Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/4.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Jon Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/5.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Jon Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/6.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Jon Carter</span>
        </div>
      </div>
      </>
    )
  }
  return (
    <div className='rightbar'>
      <div className="reightbarWrapper">
        {profile ? <ProfileRightbar/>: <HomeRightbar/>}
      </div>
    </div>
  )
}
