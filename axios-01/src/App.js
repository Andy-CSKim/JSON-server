
import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import {getUser, postUser, putUser, deleteUser} from './fetch';



function App() {
  const [dataFromServer, setDataFromServer] = useState() // empty array

  const doGet = () => {
    console.log("Get()");
    // const resp = getUser();
    // console.log(resp);  // Promise

    getUser().then((resp) => {
      console.log(resp);
      // [0] : {id: 1, name: 'Lee', role: 'developer'}
      setDataFromServer(JSON.stringify(resp));
    });

  }

  const doPost = () => {
    console.log("Post()");
    // const resp = getUser();
    // console.log(resp);  // Promise
    const newUser = {name: 'John', role: 'admin'};

    postUser(newUser).then((resp) => {
      console.log(resp);
      // [0] : {id: 1, name: 'Lee', role: 'developer'}
      setDataFromServer(JSON.stringify(resp));
    });
  }

  const doPut = () => {
    console.log("Put()");
    // const resp = getUser();
    // console.log(resp);  // Promise
    const curUser = {name: 'John', role: 'admin'};
    const id = 6;

    putUser(id, curUser).then((resp) => {
      console.log(resp);
      // [0] : {id: 1, name: 'Lee', role: 'developer'}
      setDataFromServer(JSON.stringify(resp));
    });
  }

  const doDelete = () => {
    console.log("Delete()");
    // const resp = getUser();
    // console.log(resp);  // Promise
    const id = 6;

    deleteUser(id).then((resp) => {
      console.log(resp);
      // [0] : {id: 1, name: 'Lee', role: 'developer'}
      setDataFromServer(JSON.stringify(resp));
    });
  }  
  // username = []
  // username && username[0].name
  // <p>welcome {username.length !== 0 && username[0].name}</p>
  
  // <p>welcome {username[0].name}</p>
  // <p>welcome {username[1].name}</p>

  return (
    <div className="App">
      <header className="App-header">
        <p>CRUD example</p>
        <button onClick={doGet}>Get</button> <br/>
        <button onClick={doPost}>Post</button> <br/>
        <button onClick={doPut}>Put</button> <br/>
        <button onClick={doDelete}>Delete</button> <br/>

        <br/><br/>
        {/* {username.map((user) => <p>id:{user.id}<br/>name: {user.name}<br/> role: {user.role}</p>)} */}
        <textarea name="postContent" rows={20} cols={100} value={dataFromServer}> </textarea>

      </header>
    </div>
  );
}

export default App;

