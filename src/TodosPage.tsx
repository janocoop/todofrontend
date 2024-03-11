import {Link} from "react-router-dom";
import React from "react";
import axios from "axios";

export type TodosType = {
     id: number;
     description: string;
     status: string;
}

type TodosPageProps = {
    Todos: TodosType[];
    callback:() => void
}


function TodosPage(props: TodosPageProps) {
    return <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    }}>
        {props.Todos.map((a) => {
            return <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                gap: '10px',
            }} key={a.id}>
                <span>{a.id}</span>
                <span>{a.description}</span>
                <span>{a.status}</span>
                <button onClick={() => {
                    axios.delete("/api/todo/" + a.id).then(() => {
                        props.callback()

                    })
                 }}>Löschen</button>

        </div>


        })}
        <Link to={"/todos/newtodo"}>neues Todo</Link>
    </div>}



export default TodosPage;