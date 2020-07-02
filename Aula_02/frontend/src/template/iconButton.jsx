<<<<<<< HEAD

import React from 'react';
import IF from './if';

export default props => (
    <IF test={!props.hide}> 
    <button className={'btn btn-'+ props.style} onClick={props.onClick}> 
        <i className={'fa fa-'+ props.icon}></i>
    </button>
    </IF>  
)
=======
import React from 'react';
import If from './if';

export default props => ( 
     <If test={!props.hide}>
        <button className={'btn btn-' + props.style}
            onClick={props.onClick}>
            <i className={'fa fa-' + props.icon}></i>
        </button>
     </If>   
);
>>>>>>> 4fa8b6bc6b6f650a174d24c65c184f22a40cf231
