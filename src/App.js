import React from "react"

const style = {
  bg: `h-screen w-sscreen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]`
}


function App() {
  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}> Todo App
          <form className={style.form}>
            <input className={style.input} type="text" placeholder="Addd Todo" ></input>
            <button className={style.button}></button>
          </form>
        </h3>
      </div>
    </div>
  );
}

export default App;
