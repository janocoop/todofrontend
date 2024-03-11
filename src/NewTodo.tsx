import react from "@vitejs/plugin-react";

import React, { useState } from 'react';
import {Form, Link} from "react-router-dom";
import {TodosType} from "./TodosPage.tsx";


type NewTodoFormProps = {
    callBack: (nachricht: TodosType) => void;
}



function NewTodoForm(props: NewTodoFormProps) {


    const [form, setForm] = useState<TodosType>({
        id: 1,
        description: " ",
        status: " ",

    })

    const onChangeValues = (name: string, value: string | number) => {
        const newValues: TodosType = {
            ...form,
            [name]: value,
        };
        setForm(newValues);

    }

    return <><form onSubmit={(ev) => {
        ev.preventDefault();
        console.log(form);
        props.callBack(form)
    }} >
    <label>Status:
    <input name="status" type="text" onChange={(e) => {
        onChangeValues(e.target.name, e.target.value);
    }} placeholder="OPEN oder CLOSE"/>
        </label>

        <label> Beschreibung:
    <input type="text" name="description" onChange={(e) => {
        onChangeValues(e.target.name, e.target.value);
    }} placeholder="Beschreibung"/>
        </label>

        <label> ID:
    <input type="number" name="id" onChange={(e) => {
        onChangeValues(e.target.name, e.target.value);
    }} placeholder="wird automatisch Erstellt" readOnly={true} />
        </label>



        <button type="submit">Erstellen</button>
        </form>

        <div><Link to={"/todos"}>alle Todos</Link></div>



</>
}
export default NewTodoForm;
