import React from 'react';
import './BackDrop.css'
const BackDrop = ({show,click}) => {
    return (
        show && <div onClick={click} className='back_drop'>

            
        </div>
    );
};

export default BackDrop;