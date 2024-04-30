import React, { useState } from 'react';
import UiComponent from './uicomponent'; 
import Card from "./Card/Card";
import "Card.css"

const UserComponent = () => {
   const [enteredName, setEnteredName] = useState("");
   const [enteredAge, setEnteredAge] = useState("");
   const [list, setList] = useState([])

   const formSubmitHandler = (e) => {
        e.preventDefault();
        if (enteredName === "" || enteredAge === "") {
            alert("Please enter all the fields.");
            return;
        }
        if (+enteredAge < 0) {
            alert("Please enter a valid age.");
            return;
        }

        const formData={
            name:  enteredName,
            age: enteredAge
        }

        setList([...list,formData])
  
        setEnteredName("");
        setEnteredAge("");
   };

   return (
    <Card cssClassName={formcontainer}>
            <form onSubmit={formSubmitHandler}>
                <label htmlFor="name">UserName</label>
                <input type="text" value={enteredName} onChange={(e) => setEnteredName(e.target.value)} id="name"/>
                <label htmlFor="age">Age(in years)</label>
                <input type="number" value={enteredAge} onChange={(e) => setEnteredAge(e.target.value)} id="age"/> 
                <button type="submit">Add User</button> 
            </form>
            <UiComponent list={list}/>
    </Card>
   );
};

export default UserComponent;
