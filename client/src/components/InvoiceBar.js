import React from 'react';
import numeral from 'numeral';
import moment from 'moment';
import RightCarot from '../assets/icon-arrow-right.svg';

const InvoiceBar = ({invoice, onInvoiceClick, soloView, handleDelete, showEditForm}) => {
  
  const {id, clientName, paymentDue, total, status} = invoice;
  if (soloView) {
    return (
      <div className="invoice-bar--solo" onClick={onInvoiceClick}>
        <div className="left-side">
          <div>Status</div>
          <div className="status mx-4" status={status}>
            <span className="dot">•</span>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </div>
        </div>
        <div className="right-side">
          <button
            className="edit"
            onClick={() => showEditForm()}>Edit</button>
          <button className="delete" onClick={e => handleDelete(id)}>Delete</button>
          <button className="mark-paid">Mark as paid</button>
        </div>
      </div>
    )
  } else {
    return (
      <div className="invoice-bar" onClick={onInvoiceClick}>
        <div className="id">{id}</div>
        <div>Due {moment(paymentDue).format("DD MMM YYYY")}</div>
        <div>{clientName}</div>
        <div className="total">{numeral(total).format('$0,0.00')}</div>
        <div className="status" status={status}>
          <span className="dot">•</span>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </div>
        <img className="right-carot" src={RightCarot}/>
      </div>
    );
  }
}

export default InvoiceBar
