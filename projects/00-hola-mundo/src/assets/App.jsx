import { TwitterFollowCard } from '../TwitterFollowCard';
import './App.css'

export function App(){
    const formatUserName = (userName) => `@${userName}`

const users = [
    {
        userName:"midudev",
        name:"Miguel Angel Duran",
        isFollowing: true
    },
    {
        userName:"camusin",
        name:"Fernando Garcia",
        isFollowing: false
    },
    {
        userName:"pheralb",
        name:"Pablo Hernandez"
    },
    {
        userName:"ObuchiYuki",
        name:"Obuchi Yuki"
    },
]

    return (
        <div className='app-users'>
            {
                users.map(({ userName, name, isFollowing}) => (
                    <TwitterFollowCard key={userName} 
                    formatUserName={formatUserName} 
                    userName={userName} 
                    initialIsFollowing={isFollowing}
                    >
                        {name}
                    </TwitterFollowCard>
                ))
            }
        </div>
    );
}