import React, { useState, useEffect} from 'react';
import {bindActionCreators} from 'redux';
import { Creators as ModulosCreators } from './store/posts.ducks';
import {connect} from 'react-redux';
import Table from '../../components/table/table.component'

function Posts(props){
	const columns = [
		{ id: 'id', title: 'Título', property: 'title' },
		{ id: 'id', title: 'Descrição', property: 'body'}
	];

	const [array, setArray] = useState([])

	useEffect( () => {
		props.getPosts()
	}, []);

	useEffect( () => {
		setArray(props.posts);
	}, [props]);
	

	return (
		<div className="container card">
            <div className="row">
				<h5 className="card-title">Lista de Posts</h5>
				<div className="col-md-12 card-body" >
					<Table
						align='left'
						columns={columns}
						data={array.length > 0 ? array : []}
						emptyMessage="Nenhum item encontrado."
						emptyColSpan={columns ? columns.length + 1 : 1}
						onClickRow={id => props.history.replace({ pathname: `/posts/${id}` })}
					/>
				</div>
			</div>
        </div>
        
	)
}

const mapStateToProps = state =>{
	return ({
		posts: state.posts.data
	});
}

const mapDispatchToProps = dispatch => bindActionCreators(ModulosCreators, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Posts)