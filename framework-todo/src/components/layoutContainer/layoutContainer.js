import React, { useEffect} from 'react';
import Menu from '../menu/menu'
import { LoadingStyle } from "./layout.style";
import { connect } from "react-redux";
import ToastHelper from '../../utils/toastHelper'

const mapStateToProps = state => ({
	loading: state.loading
});

function LayoutContainer(props){
    useEffect( () => {
        ToastHelper.create();
	}, []);

    return (
        <>
            <Menu history={props.history}></Menu>
            <div className="container-fluid">
                {props.children}
            </div>
            {props.loading.loading && (
					<LoadingStyle className="loading">
						<div className="text-center">
							<div className="spinner-border" role="status">
								<span className="sr-only">Loading...</span>
							</div>
						</div>
					</LoadingStyle>
				)}
        </>
    )
}


export default connect(
	mapStateToProps,
	null
)(LayoutContainer);