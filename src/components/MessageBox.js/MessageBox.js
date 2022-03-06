import React from 'react';
import './styles.css'
export default function MessageBox(props) {
  return (
      <div className='box'>
      <div className={`alert alert-${props.variant || 'info'}` }>
      {props.children}
    </div>
      </div>
  );
}