import "./Topbar.css"

export default function Topbar() {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">LamaSocial</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <span className="material-icons">
                        search
                    </span>
                    <input placeholder="Search for Friend, Post Or video" className="searchInput" /> 
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLinks">HomePage</span>
                    <span className="topbarLinks">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="tobarIconeItem">
                        <span className="topbarIconeBadge">1</span>
                        <span className="material-icons">
                            person
                        </span>
                    </div>

                    <div className="tobarIconeItem">
                        <span className="topbarIconeBadge">2</span>
                        <span className="material-icons">
                            chat
                        </span>
                    </div>

                    <div className="tobarIconeItem">
                        <span className="topbarIconeBadge">3</span>
                        <span className="material-icons">
                            notifications
                        </span>
                    </div>
                    <img className="topbarImg" src="/assets/person/1.jpeg" alt="" />
                </div>
            </div>
        </div>
    )
}
