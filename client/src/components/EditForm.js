import React, { useState } from 'react';
import { DropdownList, DatePicker } from 'react-widgets';
import Button from './Button';
import { updateInvoice } from '../latestIdSlice'

const ItemList = ({items}) => {
  const [addingItem, setAddingItem] = useState(false)
  return (
    <div className="d-flex flex-column">
      {items.map(x => {
        return (
          <>
            <div className="d-flex">
              <label className="p-1">Item Name
                <input className="plain-input" defaultValue={x.name} type="input" name="item-name"/>
              </label>
              <label className="p-1">Price
                <input className="plain-input" defaultValue={x.price} type="input" name="item-name"/>
              </label>
              <label className="p-1">Quantity
                <input className="plain-input" defaultValue={x.quantity} type="input" name="item-name"/>
              </label>
              <label className="p-1">Total
                <input className="plain-input" defaultValue={x.total} type="input" name="item-name"/>
              </label>
            </div>
            {addingItem &&
             <div className="d-flex">
               <label className="p-1">Item Name
                 <input className="plain-input" defaultValue={x.name} type="input" name="item-name"/>
               </label>
               <label className="p-1">Price
                 <input className="plain-input" defaultValue={x.price} type="input" name="item-name"/>
               </label>
               <label className="p-1">Quantity
                 <input className="plain-input" defaultValue={x.quantity} type="input" name="item-name"/>
               </label>
               <label className="p-1">Total
                 <input className="plain-input" defaultValue={x.total} type="input" name="item-name"/>
               </label>
             </div>
            }
          </>
        )
      })}
      <Button onClick={() => setAddingItem(true)} className="my-2">+ Add New Item</Button>
    </div>
  )
}

                     
const EditForm = ({invoice, hideEditForm}) => {
  const {
    id,
    clientAddress: {
      street,
      city,
      postCode,
      country
    },
    clientEmail,
    clientName,
    createdAt,
    description,
    items,
    paymentDue,
    paymentTerms,
    senderAddress,
    status,
    total
  } = invoice;

  return (
    <div className="edit-invoice-wrap">
      <div className="edit-form-wrap">
        <div>
          <div className="fw-bold">Edit <span className="id">{invoice.id}</span></div>
          <div className="bill-from">
            <h4 className="heading p-1">Bill From</h4>
            <label className="p-1">Street Address
              <input className="plain-input" defaultValue={street} type="input" name="street-address"/>
            </label>
            <div className="d-flex">
              <label className="p-1">City
                <input className="plain-input" defaultValue={city} type="input" name="city"/>
              </label>
              <label className="p-1">Post Code
                <input className="plain-input" defaultValue={postCode} type="input" name="post-code"/>
              </label>
              <label className="p-1">Country
                <input className="plain-input" defaultValue={country} type="input" name="country"/>
              </label>
            </div>
          </div>
          <div className="bill-to">
            <h4 className="heading p-1">Bill To</h4>
            <label className="p-1">Client's Name
              <input className="plain-input" defaultValue={clientName} type="input" name="client-name"/>
            </label>
            <label className="p-1">Client's Email
              <input className="plain-input" defaultValue={clientEmail} type="input" name="client-email"/>
            </label>
            <label className="p-1">Street Address
              <input className="plain-input" defaultValue={street} type="input" name="street-address"/>
            </label>
            <div className="d-flex">
              <label className="p-1">City
                <input className="plain-input" defaultValue={city} type="input" name="city"/>
              </label>
              <label className="p-1">Post Code
                <input className="plain-input" defaultValue={postCode} type="input" name="post-code"/>
              </label>
              <label className="p-1">Country
                <input className="plain-input" defaultValue={country} type="input" name="country"/>
              </label>
            </div>
              <div className="d-flex">
                <label className="p-1">Invoice Date
                  <input className="plain-input" defaultValue={createdAt} type="input" name="invoice-date"/>
                </label>
                <label className="p-1">Client's Name
                  <input className="plain-input" defaultValue={clientName} type="input" name="client-name"/>
                </label>
              </div>
            <div className="my-4">
              <div className="d-flex">
                <label className="p-1">Invoice Date
                  <DatePicker
                    defaultValue={new Date()}
                    valueFormat={{ dateStyle: "medium" }}
                  />
                </label>
                <label className="p-1">Payment Terms
                  <DropdownList
                    label="asdf"
                    defaultValue="Yellow"
                    data={["Red", "Yellow", "Blue", "Orange"]}
                  />
                </label>
              </div>
              <label className="p-1">Project Description
                <input className="plain-input" defaultValue={description} type="input" name="project-description"/>
              </label>
            </div>
            <div>
              <h3>Item List</h3>
              <ItemList items={items}/>
            </div>
          </div>
        </div>
      </div>
      <div className="edit-form-footer">
        <button className="cancel-button" onClick={() => hideEditForm()}>cancel</button>
        <button className="save-button" onClick={() => updateInvoice(id, invoice )}>save</button>
      </div>
    </div>
  )
}


export default EditForm;
