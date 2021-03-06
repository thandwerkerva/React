import React, {Component} from 'react';
import './Person/Person.css'
import './App.css'
import Person from './Person/Person';

class App extends Component{
    
    state={
        
     persons: [
         {id: 'abcd1',name: 'Tom',age: 28, nicname: 'TJ'},
         {id: 'abcd2',nicname: 'Bobby' ,name: 'Bob',age: 50},
         {id:'abcd3', nicname: 'Steph' ,name: 'Stephane',age: 18}
          
     ],
        otherState:'some other value',
        showPersons: false
         
    }



nameChangedHandler = (event,id)=>{
    const personIndex = this.state.persons.findIndex(p=>{
    return p.id ===id;
    });
    
     const person={
        ...this.state.persons[personIndex]
     };
    person.name = event.target.value;
    
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    
    this.setState({persons: persons});   
}
deletePersonHandler = (personIndex)=>{
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons});
}


togglePersonsHandler=()=>{
    const doesShow=this.state.showPersons;
    this.setState({showPersons: !doesShow});
    
    
}
  render(){
      const myButtonStyle ={
        
          font:'SansSerif',
          border: '3px solid Blue',
          borderRadius: '12px',
          padding: '6px',
          fontSize: '18px',
          cursor: 'pointer'
         
      };
      
      let persons = null;
      
      if (this.state.showPersons) {
          persons = (
          <div>
              {this.state.persons.map((person, index) =>{
               return <Person
               click={()=>this.deletePersonHandler(index)}
               name={person.name}
               age= {person.age}
               nicname= {person.nicname}
               key={person.id}
               changed={(event)=>this.nameChangedHandler(event,person.id)} />
              })}   
           
           </div>
          );
      }
      
      return (
      <div className="App">
          <h1>Hi, this is React App</h1>
          <p>This is working quite nice!</p>
          <button 
          style= {myButtonStyle}
          onClick={this.togglePersonsHandler}>Switch Name</button>
          
          
           {persons}
          </div>
      );
  }
}

  
export default App;



 
