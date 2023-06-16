import { useState } from "react"

export function TwitterFollowCard({ children, formatUserName, userName, initialIsFollowing}){
    const [ following, setFollowing ] = useState(initialIsFollowing)
    const textIsFollowing = following ? 'Following' : 'Follow'
    const buttonClassName = following ? 'tw-followCard-button is-following' : 'tw-followCard-button'

    function handleClick(){
        setFollowing(!following)
    }

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' alt="Avatar" 
                    src={`https://unavatar.io/github/${ userName }`}/>
                <div className='tw-followCard-info'>
                    <strong>{ children }</strong>
                    <span  className='tw--infoUserName'>{ formatUserName(userName) }</span>
                </div>
            </header>
            <aside>
                <button onClick={handleClick} className={buttonClassName}>
                    <span className="tw-followCard-isfollow">{ textIsFollowing }</span>
                    <span className="tw-followCard-unfollow">Unfollow</span>
                </button>
            </aside>
        </article>
    )
}   