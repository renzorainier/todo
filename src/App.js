import React, { useState, useEffect } from "react"
import { AiFillApple } from "react-icons/ai"
import Todo from "./Todo"
import { db } from "./firebase"
import { query, collection, onSnapshot, updateDoc , doc, addDoc} from "firebase/firestore"


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
  const [todos, setTodos] =  useState([]);
  const [input, setInput] = useState("");


//create Todo
const createTodo = async (e) => {
  e.preventDefault(e);
  if(input === ""){
    alert("Please enter a valid todo")
    return
  }
  await addDoc(collection(db, "todos"), {
    text: input,
    completed: false,
  })
  setInput("")
};


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

const toggleComplete = async (todo) => {
  await updateDoc(doc(db, "todos", todo.id), {
    completed: !todo.completed
  })

}


// delete Todo

  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}> Todo App </h3>
          <form onSubmit={createTodo} className={style.form}>
            <input value={input}
            onChange={(e) => setInput(e.target.value)}
            className={style.input}
            type="text"
            placeholder="Addd Todo"
            />
            <button className={style.button}><AiFillApple size={30} /></button>
          </form>
          <ul>
            {todos.map((todo, index) => (
              <Todo key={index} todo={todo} toggleComplete={toggleComplete}/>
            ))}
          </ul>
          <p className={style.count}> You have 2 todos</p>
      </div>
    </div>
  );
}

export default App;
