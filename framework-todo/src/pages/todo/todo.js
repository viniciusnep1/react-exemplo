import React, { useState, useEffect} from 'react';
import {bindActionCreators} from 'redux';
import { Creators as ModulosCreators } from './store/todo.ducks';
import {connect} from 'react-redux';
import Table from '../../components/table/table.component'

function ToDo(props){
	const columns = [
		{ id: 'id', title: 'Título', property: 'title' },
		{ id: 'id', title: 'Status', property: 'completed', icon: true}
    ];
	useEffect( () => {
		props.getTodos()
	}, []);
	
	return (
		<div className="container">
            <div className="row">
			<div className="col-md-3"></div>
			<div className="col-md-6">
				<Table
                    align='left'
                    columns={columns}
                    data={props.todos}
                    emptyMessage="Nenhum item encontrado."
                    emptyColSpan={columns ? columns.length + 1 : 1}
                />

			</div>
			<div className="col-md-3"></div>
			</div>
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