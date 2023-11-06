
import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import {getUser, postUser, putUser, deleteUser} from './fetch';



function App() {
  const [dataFromServer, setDataFromServer] = useState() // empty array
  const [name, setName] = useState("")
  const [role, setRole] = useState("")
  const [id, setId] = useState(0)

  // for checking how many times App() is called
  console.log(`App() is called with name: ${name}, role: ${role}, id: ${id}`)

  const doGet = () => {
    console.log("Get ==> ");

    getUser().then((resp) => {
      console.log(resp);
      // [0] : {id: 1, name: 'Lee', role: 'developer'}
      setDataFromServer(JSON.stringify(resp));
    });

  }

  const doPost = () => {
    console.log(`Post ==> name: ${name}, role: ${role}`)
    const newUser = {name: `${name}`, role: `${role}`};

    postUser(newUser).then((resp) => {
      console.log(resp);
      // [0] : {id: 1, name: 'Lee', role: 'developer'}
      setDataFromServer(JSON.stringify(resp));
    });
  }

  const doPut = () => {
    console.log(`Put ==> id:${id}, name: ${name}, role: ${role}`)
    const curUser = {name: `${name}`, role: `${role}`};

    putUser(id, curUser).then((resp) => {
      console.log(resp);
      // [0] : {id: 1, name: 'Lee', role: 'developer'}
      setDataFromServer(JSON.stringify(resp));
    });
  }

  const doDelete = () => {
    console.log(`Delete ==> ${id}`);

    deleteUser(id).then((resp) => {
      console.log(resp);
      // [0] : {id: 1, name: 'Lee', role: 'developer'}
      setDataFromServer(JSON.stringify(resp));
    });
  }  

  return (
    <div className="App">
      <header className="App-header">
        <p>CRUD example</p>
        <button onClick={doGet}>Get</button> <br/>
        <input type="text" name="name" placeholder="name" onInput={e => setName(e.target.value)}/>
        <input type="text" name="role" placeholder="role" onInput={e => setRole(e.target.value)}/>
        <p>id is required only when put or delete</p>
        <input type="number" step="1" name="id" placeholder="id" onInput={e => setId(e.target.value)}/> <br/>
        <button onClick={doPost}>Post</button> <br/>
        <button onClick={doPut}>Put</button> <br/>
        <button onClick={doDelete}>Delete</button> <br/>

        <br/><br/>
        <textarea name="postContent" rows={10} cols={50} value={dataFromServer}> </textarea>

      </header>
    </div>
  );
}

export default App;

