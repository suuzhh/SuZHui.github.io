import React, { useState, useImperativeHandle, forwardRef } from 'react';
import Icon, { ICON_BACK_TOP } from '../icon';

const BackTopButton = forwardRef(({ onButtonClick }, ref) => {

    const [ visible, handleVisible ] = useState(false);

    useImperativeHandle(ref, () => ({
        show() {
            if (visible === false) {
                handleVisible(true);
            }
        },
        hide() {
            if (visible === true) {
                handleVisible(false);
            }
        }
    }))

    return (
        visible ?   
            <div className='animation-slide dn db-ns pointer br-100 fixed right-2 bottom-2 link orange mb4'
                onClick={onButtonClick}
            >
                <Icon size={26} name={`${ICON_BACK_TOP}`}/>
            </div>
            : null
    );
});

export default BackTopButton;