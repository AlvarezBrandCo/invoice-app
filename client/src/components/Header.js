import React, { useState, useEffect } from 'react';
import ArrowDown from "../assets/icon-arrow-down.svg";
import IconPlus from "../assets/icon-plus.svg";
import classnames from 'classnames';
import { useSelector, useDispatch } from 'react-redux'

const Header = ({num, handleFilter, hidden, forceClose, clearFilter}) => {
  const [filterOpen, filterToggle] = useState(false)
  useEffect(() => {
    if (forceClose) filterToggle(false)
  });

  return (
    <header className={hidden ? "hidden" : null}>
      <div className="header">
        <div className="flex-grow-1">
          <h2>Invoices</h2>
          <h4 className="my-0">{`There are ${num} total invoices`}</h4>
        </div>
        <div className="filter-text mx-5">
          <div className="d-flex align-items-center" onClick={() => filterToggle(!filterOpen)}><span>filter by status</span>
            <img className={classnames("arrow", {"flipped" : filterOpen})} src={ArrowDown}/>
          </div>
          <div className={classnames("filter-dropdown", {"open": filterOpen})}>
            <label className="d-flex align-items-center filter-option">
              Paid
              <input type="checkbox" name="paid" onClick={handleFilter}/>
              <span className="checkmark"></span>
            </label>
            <label className="d-flex align-items-center filter-option">Draft
              <input type="checkbox" name="draft" onClick={handleFilter}/>
              <span className="checkmark"></span>
            </label>
            <label className="d-flex align-items-center filter-option my-0">Pending
              <input type="checkbox" name="pending" onClick={handleFilter}/>
              <span className="checkmark"></span>
            </label>
          </div>
        </div>
        <div className="new-invoice-button">
          <div className="circle-plus">
            <img src={IconPlus}/>
          </div>
          <span className="icon-text">New Invoice</span>
        </div>
      </div>
    </header>
  )
}

export default Header
