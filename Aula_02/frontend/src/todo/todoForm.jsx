import React from 'react';
import Grid from '../template/grid';
<<<<<<< HEAD
import Button from '../template/iconButton';
export default props => (
    <div role="form" className="todoForm">
        <Grid cols='12 9 10'>
            <input 
            id='description' 
            className='form-control' 
            placeholder='Adicionar tarefa' 
            value={props.description}
            onChange={props.handleChange} ></input>
        </Grid> 
        
        <Grid cols='12 3 2'>   
            <Button style="primary" icon='plus' onClick={props.handleAdd}></Button>
            <Button style="info" icon='search' onClick={props.handleSearch}></Button>
            <Button style="default" icon='close' onClick={props.handleClear}></Button>
        </Grid>
    </div>
);
=======
import IconButton from '../template/iconButton';

export default props => (
    <div role='form' className='todoForm'>
        <Grid cols='12 9 10'>
            <input id='description' className='form-control' placeholder='Adicione a tarefa' 
            value={props.description} onChange={props.handleChange}></input>
        </Grid>

        <Grid cols='12 3 2'>
            <IconButton style='primary' icon='plus' onClick={props.handleAdd}></IconButton>
        </Grid>       
    </div>

)
>>>>>>> 4fa8b6bc6b6f650a174d24c65c184f22a40cf231
