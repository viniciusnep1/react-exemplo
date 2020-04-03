import React, { useState, useEffect} from 'react';
import {bindActionCreators} from 'redux';
import { Creators as ModulosCreators } from './store/todo.ducks';
import {connect} from 'react-redux';
import IconButton from '../../components/iconButton/iconButton'
import { Button, Modal, ModalHeader, ModalFooter } from 'reactstrap';

function ToDo(props){
	const [array, setArray] = useState([])
	const [description, setDescription] = useState([])
	const [modalDescription, setModalDescription] = useState([])
	
	
	useEffect( () => {
		setArray(props.todos);
	}, [props]);

	useEffect( () => {
		props.getTodos()
	}, []);

	const keyHandler = (e) => {
        if (e.key === 'Enter') {
            handleAdd()
        } else if (e.key === 'Escape') {
            handleClear()
        }
	}
	
	const handleClear = () => {
		setDescription("")
	}
	
	const handleChange = (e) => {
		setDescription(e.target.value)
	}

	const handleAdd = async () => {
		let object = {
			title: description,
  			completed: false
		}
		await props.createTodos(object)
	}
	
	const [modal, setModal] = useState(false);

	const toggle = (item) => {
		setModal(!modal);
		let todoStatus = ""
		if(!item.completed) todoStatus = "está completada!"
		if(item.completed) todoStatus = "não está completada!"
		setModalDescription(`A tarefa "${item.title}" ${todoStatus}`)
	}

	const renderRows = () => {
        return array.map(todo => (
            <tr key={todo.id}>
                <td className={todo.completed ? 'markedAsDone' : ''}>{todo.title}</td>
                <td>
					<IconButton 
						style='success'
						icon='check'
						hide={todo.completed}
						tooltip="Completada"
						id={todo.id}
						onClick={() => toggle(todo)}
					/>
					<IconButton 
						style='danger' 
						icon='times' 
						hide={!todo.completed} 
						tooltip="Não Completada"
						id={todo.id}
						onClick={() => toggle(todo)}
					/>
                </td>
            </tr>
        ))
	}
	
	

	return (
		<div className="container card">
				<h5 className="card-title">Adicionar Tarefa</h5>
				<div className="row col-md-12">
					<div className="col-md-10"> 
						<input id='description' className='form-control'
							placeholder='Adicione uma tarefa'
							onChange={handleChange}
							onKeyUp={keyHandler}
							value={description}>
						</input>
					</div>

					
					<div className="col-md-2">
						<IconButton 
							style='primary' 
							icon='plus'
							onClick={handleAdd}>
						</IconButton>
					</div>

				</div>
			<hr></hr>
			<div className="row">
				<h5 className="card-title">Lista de Tarefas</h5>
				<div className="col-md-12 card-body" >
					<table className='table table-bordered'>
						<thead className="thead-light">
							<tr>
								<th>Descrição</th>
								<th className='tableActions'>Status</th>
							</tr>
						</thead>
						<tbody>
							{renderRows()}
						</tbody>
					</table>
				</div>
			</div>
			<Modal isOpen={modal} toggle={toggle} className="modal-dialog">
				<ModalHeader style={{textAlign: "center", borderBottom: "none"}}>
					{modalDescription}
				</ModalHeader >
				<ModalFooter>
				<Button color="secondary" style={{borderBottom: "none", borderTop: "none"}} onClick={toggle}>Fechar</Button>
				</ModalFooter>
			</Modal>
		</div>
	)
}

const mapStateToProps = state =>{
	return ({
		todos: state.todos.data
	});
}

const mapDispatchToProps = dispatch => bindActionCreators(ModulosCreators, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ToDo)