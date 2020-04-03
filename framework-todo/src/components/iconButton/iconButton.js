import React from 'react'
import If from './if'

function IconButton (props) {
   return ( <If test={!props.hide}>
        <button 
            id={props.id}
            className={'btn btn-'+ props.style} 
            onClick={props.onClick} 
            style={{marginRight: 5}}>
            <i className={'fa fa-'+ props.icon}> </i> 
        </button>
        
    </If>
)
}

export default IconButton