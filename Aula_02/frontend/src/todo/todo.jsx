import React, { Component } from 'react';
import axios from 'axios';

<<<<<<< HEAD
import PageHeader from '../template/pageHearder';
import TodoForm from './todoForm';
import TodoList from './todoList';

const URL = 'http://localhost:3001/api/todos'

export default class Todo extends Component {
    constructor(props){
        super(props)

        this.state = {description: '', list:[]} 

        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleClear = this.handleClear.bind(this);
        

        this.refrech();
    }

    handleChange(e){
        this.setState({...this.state, description: e.target.value})
    }

    
    refrech(description = ''){ 
        const search = description ? `&description__regex=/${description}/` : ''
        axios.get(`${URL}?sort=-createdAt${search}`)//ordenacao oferecida pela api
        .then(resp => this.setState({ ...this.state, description: description, list: resp.data}));
    }
    handleSearch(){
        this.refrech(this.state.description)
    }

    
    handleAdd(){
        const description = this.state.description;
        axios.post(URL, {description})
        .then( resp => this.refrech());
    }

    handleRemove(todo){
        axios.delete(`${URL}/${todo._id}`)
        .then( resp => this.refrech());
    }

    handleClear(){
        this.refrech()
    }

    handleMarkAsDone(todo){
        axios.put(`${URL}/${todo._id}`, {...todo, done: true})
        .then( resp => this.refrech(this.state.description));
    }

    handleMarkAsPending(todo){
        axios.put(`${URL}/${todo._id}`, {...todo, done: false})
        .then( resp => this.refrech(this.state.description));
    }

    render() {
        return(
            <div>
                <PageHeader name="Tarefas" small="Cadastro"></PageHeader>
                <TodoForm description={this.state.description}
                handleAdd={this.handleAdd}
                handleChange={this.handleChange}
                handleSearch={this.handleSearch}
                handleClear={this.handleClear}
                />
                <TodoList list={this.state.list} handleRemove={this.handleRemove}
                handleMarkAsDone={this.handleMarkAsDone}
                handleMarkAsPending={this.handleMarkAsPending}
                />
=======
import PageHeader from '../template/pageHeader';
import TodoForm from './todoForm';
import TodoList from './todoList';

const URL = 'http://localhost:3001/api/todos';

export default class Todo extends Component {

      constructor(props) {
        super(props)

        this.state = { description: '', list:[] };

        this.handleAdd = this.handleAdd.bind(this);

        this.handleChange = this.handleChange.bind(this);
    };

    handleChange(e) {
        this.setState({...this.state, description: e.target.value })
    };

    handleAdd() {
        const description = this.state.description
        axios.post(URL, { description })
            .then(resp => console.log('Funcionou!'))
    };
    render() {
        return(
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
                <TodoForm description={this.state.description} 
                    handleAdd={this.handleAdd}
                    handleChange={this.handleChange} />
                <TodoList />
>>>>>>> 4fa8b6bc6b6f650a174d24c65c184f22a40cf231
            </div>
        );
    }
} 