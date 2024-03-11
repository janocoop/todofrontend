import {useEffect, useState} from 'react'
import { Routes } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainPage from "./MainPage.tsx";
import {Route} from "react-router-dom";
import axios from "axios";
import TodosPage from "./TodosPage.tsx";
import newTodo from "./NewTodo.tsx";
import NewTodo from "./NewTodo.tsx";

function App() {

  const [todos, setTodos] = useState([])

    const refDatas = () => {
        axios.get('/api/todo').then((results) => {
            setTodos(results.data);
        });
    }


  useEffect(() => {
      refDatas()
  }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/todos" element={<TodosPage callback={() => {
            refDatas()
        }} Todos={todos}/>}/>
        <Route path="/todos/newtodo" element={<NewTodo callBack={(nachricht) =>{
axios.post("/api/todo", nachricht).then((e) => {
    refDatas()

})
        }}/>}/>
      </Routes>


    </>
  )
}

export default App
