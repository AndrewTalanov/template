import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const createUser = async () => {
      // const data = await axios.post('http://localhost:3000/api/user/createUser', {name: 'Это я', role: 'User'})
      // setUser(data);
    }
    createUser()
  }, []);

  useEffect(()=>{
    console.log(user);
  },[user])

  return (
    <div className="App">
      {}
    </div>
  );
}

export default App;
