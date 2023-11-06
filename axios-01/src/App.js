
import logo from './logo.svg';
import './App.css';
import {useState, useEffect, useRef} from 'react';
import {getUser, postUser, putUser, deleteUser} from './fetch';



function App() {
  const [dataFromServer, setDataFromServer] = useState() // empty array
  // change to useRef() to call once
  //const [name, setName] = useState("")
  // const [role, setRole] = useState("")
  // const [id, setId] = useState(0)
  const name = useRef("")
  const role = useRef("")
  const id = useRef(0)

  // for checking how many times App() is called
  console.log(`App() is called with name: ${name.current}, role: ${role.current}, id: ${id.current}`)
  
  const doGet = () => {
    console.log("Get ==> ");

    getUser().then((resp) => {
      console.log(resp);
      // [0] : {id: 1, name: 'Lee', role: 'developer'}
      setDataFromServer(JSON.stringify(resp));
    });

  }

  const doPost = () => {
    console.log(`Post ==> name: ${name.current}, role: ${role.current}`)
    const newUser = {name: `${name.current}`, role: `${role.current}`};

    postUser(newUser).then((resp) => {
      console.log(resp);
      // [0] : {id: 1, name: 'Lee', role: 'developer'}
      setDataFromServer(JSON.stringify(resp));
    });
  }

  const doPut = () => {
    console.log(`Put ==> id:${id.current}, name: ${name.current}, role: ${role.current}`)
    const curUser = {name: `${name.current}`, role: `${role.current}`};

    putUser(id.current, curUser).then((resp) => {
      console.log(resp);
      // [0] : {id: 1, name: 'Lee', role: 'developer'}
      setDataFromServer(JSON.stringify(resp));
    });
  }

  const doDelete = () => {
    console.log(`Delete ==> ${id.current}`);

    deleteUser(id.current).then((resp) => {
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
        <input type="text" name="name" placeholder="name" onInput={e => name.current = e.target.value}/>
        <input type="text" name="role" placeholder="role" onInput={e => role.current = e.target.value}/>
        <p>id is required only when put or delete</p>
        <input type="number" step="1" name="id" placeholder="id" onInput={e => id.current = e.target.value}/> <br/>
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

