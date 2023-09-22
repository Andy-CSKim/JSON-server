import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import {getUser} from './fetch';


function App() {
  const [username, setUsername] = useState([]) // empty array
  const handleRequest = () => {
    console.log("sending request");
    // const resp = getUser();
    // console.log(resp);  // Promise

    getUser().then((resp) => {
      console.log(resp);
      // [0] : {id: 1, name: 'Lee', role: 'developer'}
      setUsername(resp);
    });

  }

  // username = []
  // username && username[0].name
  // <p>welcome {username.length !== 0 && username[0].name}</p>
  
  // <p>welcome {username[0].name}</p>
  // <p>welcome {username[1].name}</p>
  // <p>welcome {username[2].name}</p>

  return (
    <div className="App">
      <header className="App-header">
        <p>Blockiki</p>
        <button onClick={handleRequest}>Send Request</button>
        {username.map((user) => <p>welcome {user.name}</p>)}
      </header>
    </div>
  );
}

export default App;
