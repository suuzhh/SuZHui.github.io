import React, { useState, useImperativeHandle, forwardRef } from 'react';
import { CSSTransition } from "react-transition-group";
import Icon, { ICON_BACK_TOP } from '../icon';

const BackTopButton = forwardRef(({ onButtonClick }, ref) => {

  const [visible, handleVisible] = useState(false);

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
    <CSSTransition
      in={visible} timeout={400} classNames='fade'
      mountOnEnter
    >
      <div className='dn db-ns pa2 pb1 pointer br-100 fixed right-2 bottom-2 mb4 shadow-1 flex items-center justify-center'>
        <div className='animation-slide orange link'
          onClick={onButtonClick}
          onKeyDown={onButtonClick}
          tabindex="0"
          role="button"
        >
          <Icon size={26} name={`${ICON_BACK_TOP}`} />
        </div>
      </div>
    </CSSTransition>
  );
});

export default BackTopButton;