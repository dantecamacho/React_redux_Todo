import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


const TodoList=props=>{
    const {todos, todoCompleted, deleteTodo}=props
    return(
        <List>
        {this.state.todos.map((todo,index)=>(

          <ListItem 
          dense 
          button 
          key={index}
          onClick={()=>this.toggleCompleted(index)}
          >
          <Checkbox checked={todo.completed} />
          <ListItemText primary={todo.value}/>
            <ListItemSecondaryAction>
              <IconButton onClick={()=>this.deleteTodo(index)}>
              <DeleteIcon/>
              </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
        ))}
      </List> 

    )
}

export default TodoList