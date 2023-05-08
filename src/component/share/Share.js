import './Share.css'

export default function Share() {
    return (
        <div className='share'>
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className='shareProfileImg' src="/assets/person/1.jpeg" alt="" />
                    <input placeholder="What's in your mind Praveen?" className='shareInput' />
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <span className="material-icons shareIcon photo">
                                perm_media
                            </span>
                            <span className='shareOptionText'>Photo or Video</span>
                        </div>
                        <div className="shareOption">
                            <span className="material-icons shareIcon lable">
                                label
                            </span>
                            <span className='shareOptionText'>Tag</span>
                        </div>
                        <div className="shareOption">
                            <span className="material-icons shareIcon room">
                                room
                            </span>
                            <span className='shareOptionText'>Location</span>
                        </div>
                        <div className="shareOption">
                            <span className="material-icons shareIcon emoji" >
                                emoji_emotions
                            </span>
                            <span className='shareOptionText'>Feelings</span>
                        </div>
                    </div>
                    <button className="shareButton">Share</button>
                </div>
            </div>
        </div>
    )
}
