import React from 'react';
import Typography from '@material-ui/core/Typography';
//Listas

//Grid
import Grid from '@material-ui/core/Grid';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      value:"",
      todos:[]
    };
  }

  updateValue=event=>{
    this.setState({value:event.target.value})

  }

  saveTodo=()=>{
    if (this.state.value){
      this.setState({
        todos:[
        ...this.state.todos,
        {value:this.state.value,completed:false}
        ],
        value:""
      })
    }
  }

  // toggleCompleted=index=>{
  //   const todos=this.state.todos
  //   todos[index].completed
  // }


  deleteTodo=index=>{
    this.setState({todos:this.state.todos.filter((_,i)=>i!==index)})
  }

  render(){
    console.log(this.state)
    return (
      <React.Fragment>
        <Typography align="center" variant="h2" gutterBottom>To do app</Typography>
  
      <Grid container justify="center">
        <Grid item>
           <TodoForm
           value={this.state.value}
           updateValue={this.updatevalue}
           saveTodo={this.saveTodo}
           />
        </Grid>
      </Grid>
  
      <Grid container justify="center">
        <Grid item md={8}>
          <TodoList
          todos={this.state.todos}
          toggleCompleted={this.toggleCompleted}
          deleteTodo={this.deleteTodo}
          />
        </Grid>
      </Grid>
      </React.Fragment>
    )
  
}

export default App;
