import React from 'react'
import Menu from '../menu/menu'

export default function LayoutContainer(props){
    return (
        <>
            <Menu history={props.history}></Menu>
            <div className="container-fluid">
                {props.children}
            </div>
        </>
    )
}