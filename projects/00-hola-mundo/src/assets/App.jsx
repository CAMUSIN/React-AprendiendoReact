import { TwitterFollowCard } from '../TwitterFollowCard';
import './App.css'

export function App(){
    const formatUserName = (userName) => `@${userName}`

    return (
        <div className='app-users'>
            <TwitterFollowCard formatUserName={formatUserName} userName="midudev" name="Miguel Angel Duran" isFollowing={true}/>
            <TwitterFollowCard formatUserName={formatUserName} userName="pheralb" name="Pablo Hernandez"/>
            <TwitterFollowCard formatUserName={formatUserName} userName="camusin" name="Fernando Garcia"/>
        </div>
    );
}