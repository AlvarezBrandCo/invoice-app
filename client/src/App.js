import React, { useState } from 'react';
import logo from './logo.svg';
import './css/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import LeftBar from './components/LeftBar';
import EditForm from './components/EditForm';
import SingleInvoice from './components/SingleInvoice';
import classnames from 'classnames';
import NoInvoicePlaceholder from './components/NoInvoicePlaceholder';
import data from './data.json';

import InvoiceBar from './components/InvoiceBar.js';

function App() {
  const [filters, setFilters] = useState([]);
  const [lightMode, setColorMode] = useState(true);
  const [invoiceId, selectInvoiceId] = useState(null);
  const [rowsData, setRowsData] = useState(data);
  const [showEdit, toggleShowEdit] = useState(false);
  
  const handleFilters = (word) => {
    if (!filters.includes(word)) {
      setFilters([...filters, word])
    } else {
      setFilters(filters.filter(x => x !== word))
    }
  }

  let selectedInvoice;
  
  const deleteRow = (rowToDelete) => {
    const newRowData = rowsData.filter(row => {
      return row.id !== rowToDelete
    })
    selectInvoiceId(null)
    setRowsData(newRowData)
  }

  const onInvoiceClick = (id) => {
    setFilters([])
    selectInvoiceId(id)
    
  }
  const renderInvoiceBars = () => {
    if (invoiceId) {
      selectedInvoice = rowsData.filter(x => x.id === invoiceId)[0]
      return <InvoiceBar
               invoice={selectedInvoice}
               key={invoiceId}
               soloView
               handleDelete={deleteRow}
               showEditForm={() => toggleShowEdit(true)}
             />
    }

    const filtered = rowsData.filter(x => {
      return filters.includes(x.status)
    })

    const filteredBars = filtered.length > 0 ? filtered : rowsData;

    const rows = Object.values(filteredBars).map((x, i) => {
      return <InvoiceBar
               invoice={x}
               key={i}
               onInvoiceClick={() => onInvoiceClick(x.id)}
             />
    })
    return rows.length > 0 ? rows : <NoInvoicePlaceholder/>
  };
  
  return (
    <div className="container">
      <LeftBar
        lightMode={lightMode}
        toggleLightMode={() => setColorMode(!lightMode)}
      />
      {showEdit && (
        <EditForm
          invoice={rowsData.filter(x => x.id === invoiceId)[0]}
          hideEditForm={() => toggleShowEdit(false)}
        />
      )}
      <p
        onClick={() => selectInvoiceId(null)}
        className={classnames("go-back", {
        "hidden": !invoiceId
      })}>Go back</p>
      <Header
        hidden={Boolean(invoiceId)}
        num={rowsData.length}
        handleFilter={e => handleFilters(e.target.name)}
        forceClose={invoiceId}
      />

      {renderInvoiceBars()}
      {invoiceId && <SingleInvoice invoice={selectedInvoice}/>}
    </div>
  );
}

export default App;
