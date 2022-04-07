import React from 'react';

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
              <input defaultValue={street} type="input" name="street-address"/>
            </label>
            <div className="d-flex">
              <label className="p-1">City
                <input defaultValue={city} type="input" name="city"/>
              </label>
              <label className="p-1">Post Code
                <input defaultValue={postCode} type="input" name="post-code"/>
              </label>
              <label className="p-1">Country
                <input defaultValue={country} type="input" name="country"/>
              </label>
            </div>
          </div>
          <div className="bill-to">
            <h4 className="heading p-1">Bill To</h4>
            <label className="p-1">Street Address
              <input defaultValue={street} type="input" name="street-address"/>
            </label>
            <div className="d-flex">
              <label className="p-1">City
                <input defaultValue={city} type="input" name="city"/>
              </label>
              <label className="p-1">Post Code
                <input defaultValue={postCode} type="input" name="post-code"/>
              </label>
              <label className="p-1">Country
                <input defaultValue={country} type="input" name="country"/>
              </label>
            </div>
          </div>
        </div>
          <div className="edit-form-footer">
            <button className="cancel-button" onClick={() => hideEditForm()}>cancel</button>
            <button className="save-button" onClick={() => hideEditForm()}>cancel</button>
          </div>
      </div>
    </div>
  )
}


export default EditForm;
