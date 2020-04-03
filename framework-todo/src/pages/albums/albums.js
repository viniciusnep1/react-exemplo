import React, { useState, useEffect} from 'react';
import {bindActionCreators} from 'redux';
import { Creators as ModulosCreators } from './store/albums.ducks';
import {connect} from 'react-redux';
import Table from '../../components/table/table.component'

function Albums(props){
	const columns = [
		{ id: 'id', title: 'Título', property: 'title' },
	];

	const [array, setArray] = useState([])

	useEffect( () => {
		props.getAlbums()
	}, []);

	useEffect( () => {
		setArray(props.albums);
	}, [props]);
	
	return (
		<div className="container card">
            <div className="row">
				<h5 className="card-title">Lista de Albuns</h5>
				<div className="col-md-12 card-body" >
					<Table
						align='left'
						columns={columns}
						data={array.length > 0 ? array : []}
						emptyMessage="Nenhum item encontrado."
						emptyColSpan={columns ? columns.length + 1 : 1}
					/>
				</div>
			</div>
        </div>
	)
}

const mapStateToProps = state =>{
	
	return ({
		albums: state.albums.data
	});
}

const mapDispatchToProps = dispatch => bindActionCreators(ModulosCreators, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Albums)