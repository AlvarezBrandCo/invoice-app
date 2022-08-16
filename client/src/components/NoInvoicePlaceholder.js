import React, { useState } from 'react';
import Empty from '../assets/illustration-empty.svg';

const NoInvoicePlaceholder = () => {
  const [selected, setSelected] = useState("")
  return (
    <div className="placeholder-wrap">
      <img src={Empty}/>
      <h3>There is nothing here</h3>
      <p>
        Create an invoice by clicking the <br/>
        <span>New Invoice </span>
        button and get started
      </p>
    </div>
  )
}

export default NoInvoicePlaceholder
