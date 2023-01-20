import React, {useState} from "react"
import {AiFillApple} from "react-icons/ai"
import Todo from "./Todo"

const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]`,
  container: `bg-slate-100 max-w-[500x] w-full m-auto rounded-md shadow-xl p-4`,
  heading: `text 3-l font-bold text-center text-gray-800 p-2`,
  form: `flex justify-between`,
  input: `border p-2 w-full text-wl`,
  button: `border p-4 ml-2 bg-purple-500`

}


function App() {
  const [todos, setTodos] =  useState(["Lean React", "Grind Leetcode" ])

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
