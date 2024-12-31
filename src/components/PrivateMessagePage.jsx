import { useParams, useNavigate } from 'react-router-dom';
import { users } from '../data/user';
import bgMusic from '../assets/public/bgmusic.mp3';

const PrivateMessagePage = ()=>{

const {codeName} = useParams();
const navigate = useNavigate(); 
const user = users.find((u)=> u.codeName ===codeName)
if (!user){
    return <h1 style={{textAlign:'center', maginTop:'50px'}} >Invalid Access</h1>
}

return (
<div className="message-container">
 <audio autoPlay loop>
        <source src={bgMusic} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio> 
<img className="user-image" src={user.image} alt={`${user.codeName}'s picture`} />
<button
        onClick={() => navigate('/')} // Navigate back to the search page
        className="goback"
        
      >
        Go Back (뒤로가기)
      </button>
</div>
);

}

export default PrivateMessagePage;