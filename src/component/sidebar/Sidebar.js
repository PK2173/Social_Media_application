import { User } from '../../dummyData'
import CloseFriend from '../closeFriend/CloseFriend'
import './sidebar.css'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <span className="material-icons">
              rss_feed
            </span>
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <span className="material-icons">
              chat
            </span>
            <span className="sidebarListItemText">Chat</span>
          </li>
          <li className="sidebarListItem">
            <span className="material-icons">
              play_circle
            </span>
            <span className="sidebarListItemText">Video</span>
          </li>
          <li className="sidebarListItem">
            <span className="material-icons">
              group
            </span>
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <span className="material-icons">
              bookmarks
            </span>
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <span className="material-icons">
            help_outline
            </span>
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <span className="material-icons">
              work_outline
            </span>
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <span className="material-icons">
              event
            </span>
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <span className="material-icons">
              school
            </span>
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className='sidebarHr'/>
        <ul className="sidebarFriendList">
          {User.map(e=>(
            <CloseFriend key={e.id} friend={e}/>
          ))}
        </ul>
      </div>
    </div>
  )
}
