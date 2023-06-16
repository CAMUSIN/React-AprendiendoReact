import { useState } from "react"

export function TwitterFollowCard({ formatUserName, userName, name, isFollowing = false}){
    const [ following, setFollowing ] = useState(isFollowing)
    const textIsFollowing = following ? 'Siguiendo' : 'Seguir'
    const buttonClassName = following ? 'tw-followCard-button is-following' : 'tw-followCard-button'

    function handleClick(){
        setFollowing(!following)
    }

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' alt="El Avatar de midudev" 
                    src={`https://unavatar.io/github/${ userName }`}/>
                <div className='tw-followCard-info'>
                    <strong>{ name }</strong>
                    <span  className='tw--infoUserName'>{ formatUserName(userName) }</span>
                </div>
            </header>
            <aside>
                <button onClick={handleClick} className={buttonClassName}>{ textIsFollowing }</button>
            </aside>
        </article>
    )
}   