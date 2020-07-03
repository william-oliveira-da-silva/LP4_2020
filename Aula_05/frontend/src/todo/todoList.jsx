<<<<<<< HEAD
import React  from 'react';
import IconButton from '../template/iconButton';

export default  props => { 

  const renderRows = () =>{
    const list = props.list || []
    return list.map( todo => (
      <tr key={todo.id}>
        <td className={todo.done ? 'markedAsDone' : ''} >{todo.description}</td>
        <td>
          {/* tarefa concluida */}
          <IconButton style='success' icon='check' hide={todo.done}
          onClick={() => props.handleMarkAsDone(todo)}></IconButton>

          <IconButton style='warning' icon='undo' hide={!todo.done}
          onClick={() => props.handleMarkAsPending(todo)}></IconButton>
          {/* Botao de remover */}
          <IconButton style='danger' icon='trash-o' hide={!todo.done}
          onClick={() => props.handleRemove(todo)}></IconButton>
        </td>
      </tr>
    ))
  }
  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Descrição</th>
          <th className='tableActions' >Ações</th>
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>   
    </table>
  )
    
}
=======
import React from 'react';

export default props => (
    <div>
        <h1>Todo List</h1>
    </div>
);
>>>>>>> 4fa8b6bc6b6f650a174d24c65c184f22a40cf231
