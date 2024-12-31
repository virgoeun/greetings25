import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { users } from '../data/user';

const SearchPage = ()=> {

const [codeName, setCodeName] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState('');
const navigate = useNavigate();

const handlelogin = ()=>{

    const user = users.find((u)=> u.codeName === codeName);

    if (!user) {
        setError("Invalid code name!")
        return;
    }
    if (user.password !== password){
        setError("Wrong Password!")
        return;
    }

    navigate(`/message/${codeName}`)


}

return (
<div className="search-container">
 <h1 className="title">To Unlock Your Message, Enter Your Name & Code</h1>
      <h3 className="subtitle">이름과 비밀번호를 입력하면 메시지가 나타납니다.</h3>
<form
        onSubmit={(e) => {
          e.preventDefault(); // Prevent default form submission
          handlelogin(); // Trigger the login function
        }}
      >
        <input
          type="text"
          placeholder="Name(이름)"
          value={codeName}
          onChange={(e) => setCodeName(e.target.value)}
          className="input-field"
        />
        <br />
        <input
          type="password"
          placeholder="Password(비밀번호)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
        />
        <br />
        <button type="submit" className="login-button">
          Check Alice Message
        </button>
      </form>



{error && <p className="error-message">{error}</p>}
</div>

)
}

export default SearchPage;