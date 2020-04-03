import React, { useState, useEffect} from 'react';
import {bindActionCreators} from 'redux';
import { Creators as ModulosCreators } from './store/posts.ducks';
import {connect} from 'react-redux';
import Table from '../../components/table/table.component'

function PostsDetails(props){
    const [user, setUser] = useState([])

	const columns = [
		{ id: 'id', title: 'Título', property: 'title' },
		{ id: 'id', title: 'Descricao', property: 'body'}
    ];

    const { match: { params } } = props;

	useEffect( () => {
		props.getPostsDetails(params.id)
    }, []);
    
    useEffect( () => {
        if(props.posts.user)
            setUser(props.posts.user)
    }, [props.posts]);
	        

    const {title, body} = props.posts

	return (
        <>
		<div className="container card">
            <div className="row">
                <h5 className="card-title">Detalhes do Post</h5>
				<div className="col-md-12 card-body" >
                    <label>Nome do Autor</label>
                    <input 
                        className="form-control" 
                        type="text"
                        disabled value={`${user.name}`}
                    />
                    <br/>
                    <label>Email</label>
                    <input 
                        className="form-control" 
                        type="text"
                        disabled value={`${user.email}`}
                    />
                    <br/>
                    <label> Título</label>
                    <input 
                        className="form-control" 
                        type="text"
                        disabled value={title}
                    />
                    <br/>
                    <label> Descrição</label>
                    <textarea 
                        className="form-control" 
                        type="text"
                        disabled 
                        value={body}
                        rows="4" cols="50"
                    />
				</div>
            <button className="btn btn-light" onClick={()=> props.history.replace({pathname: "/posts"})}>
                <i className="fas fa-angle-left"> </i> Voltar
            </button>
			</div>
        </div>
</>
	)
}

const mapStateToProps = state =>{
	return ({
		posts: state.posts.data
	});
}

const mapDispatchToProps = dispatch => bindActionCreators(ModulosCreators, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PostsDetails)