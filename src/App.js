import React, {useState, useEffect } from "react"
import {AiFillApple} from "react-icons/ai"
import Todo from "./Todo"
import { db } from "./firebase"
import { query, collection,onSnapshot } from "firebase/firestore"


const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]`,
  container: `bg-slate-100 max-w-[500x] w-full m-auto rounded-md shadow-xl p-4`,
  heading: `text 3-l font-bold text-center text-gray-800 p-2`,
  form: `flex justify-between`,
  input: `border p-2 w-full text-wl`,
  button: `border p-4 ml-2 bg-cyan-500 text-slate-100`,
  count: `text-center p-2`
};


function App() {
  const [todos, setTodos] =  useState([])


//create Todo

//read Todo in firebase
useEffect(()=>{
const q = query(collection(db, "todos"))
const unsubscribe = onSnapshot(q, (querySnapshot)=>{
  let todosArr = []
  querySnapshot.forEach((doc) => {
    todosArr.push({...doc.data(), id: doc.id})
  });
  setTodos(todosArr)
})
return () => unsubscribe()
},[])

//update Todo in firebase



// delete Todo

  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}> Todo App </h3>
          <form className={style.form}>
            <input className={style.input} type="text" placeholder="Addd Todo" ></input>
            <button className={style.button}><AiFillApple size={30} /></button>
          </form>
          <ul>
            {todos.map((todo, index) => (
              <Todo key={index} todo={todo}/>
            ))}
          </ul>
          <p className={style.count}> You have 2 todos</p>
      </div>
    </div>
  );
}

export default App;
