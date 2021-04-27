import React  from 'react';

const person = (props) =>{
    return(
      <div className= "Person">
         <p onClick={props.click}>My Name is {props.name} and I am {props.age} years old </p>
        <p> my nicname is {props.nicname} </p>
         <p>{props.children}</p>
        <input type = "text" onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default person;
