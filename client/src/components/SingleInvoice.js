import React from 'react';
import moment from 'moment';
import numeral from 'numeral';

const SingleInvoice = ({invoice}) => {
  if (invoice) {
    const {id, clientAddress: {street, city, postCode, country}, clientEmail, clientName, createdAt, description, items, paymentDue, paymentTerms, senderAddress, status, total} = invoice;
    return (
      <div className="single-invoice">
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-column">
            <div className="inv-id">
              {invoice.id}
            </div>
            <div className="inv-desc">{description}</div>
          </div>
          <div className="inv-address">
            <div>{senderAddress.street}</div>
            <div>{senderAddress.city}</div>
            <div>{senderAddress.postCode}</div>
            <div>{senderAddress.country}</div>
          </div>
        </div>
        <div className="invoice-body">
          <div className="date">
            <div>
              <span className="inv-body-item">Invoice Date</span>
              <div className="fw-bold content">{moment(createdAt).format("D MMM, YYYY")}</div>
            </div>
            <div>
              <span className="inv-body-item">Payment Due</span>
              <div className="fw-bold content">{moment(paymentDue).format("D MMM, YYYY")}</div>
            </div>
          </div>
          <div className="bill-to">
            <span className="inv-body-item">Bill To</span>
            <div className="content">
              <div className="fw-bold">{clientName}</div>
              <div>{street}</div>
              <div>{city}</div>
              <div>{postCode}</div>
              <div>{country}</div>
            </div>
          </div>
          <div className="sent-to">
            <span className="inv-body-item">Sent To</span>
            <div className="fw-bold content">{clientEmail}</div>
          </div>
        </div>
        <div className="invoice-items">
          <div className="name">
            <div className="item-title">Item Name</div>
            {items.map(x => <div className="fw-bold">{x.name}</div>)}
          </div>
          <div className="qty">
            <div className="item-title">QTY.</div>
            {items.map(x => <div>{x.quantity}</div>)}
          </div>
          <div className="price">
            <div className="item-title">Price</div>
            {items.map(x => <div>{numeral(x.price).format('$0,0.00')}</div>)}
          </div>

          <div className="total">
            <div className="item-title">Total</div>
            {items.map(x => {
              const total = x.price * x.quantity
              return <div>{numeral(total).format('$0,0.00')}</div>
            })}
          </div>

        </div>
        <div className="invoice-items-footer">
          <div className="amount-due">Amount due</div>
          <div className="total">{numeral(total).format('$0,0.00')}</div>
        </div>
      </div>
    )
  }  else {
    return "asdf"
  }
}

export default SingleInvoice;
