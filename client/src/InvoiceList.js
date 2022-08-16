import React, { useState, useEffect } from 'react';
import {withRouter} from 'react-router';
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
import DeleteModal from "./components/DeleteModal";
import Modal from "./components/Modal";
import { connect, useSelector, useDispatch } from 'react-redux'
import { loading, deleteId } from './latestIdSlice'
import { showModal, hideModal } from './modalReducer'

function InvoiceList({
  invoices,
  isLoading,
  deleteInvoice,
  update,
  setLoading,
  test,
  showModal,
  hideModal,
  history,
  match: {
    params
    }
}) {
  const dispatch = useDispatch()
  const [filters, setFilters] = useState([]);
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
    selectInvoiceId(null)
    deleteInvoice(invoiceId)
    hideModal("asdf")
    history.push("/");
  }

  const onInvoiceClick = (id) => {
    setFilters([])
    selectInvoiceId(id)
    history.push(`invoice/${id}`)    
  }
  const validInvoiceId = data.some(inv => inv.id === params.invoiceId);

  const renderInvoiceBars = () => {
    if (validInvoiceId) {
      selectedInvoice = Object.values(invoices).filter(x => x.id === params.invoiceId)[0]
      return <InvoiceBar
               invoice={selectedInvoice}
               key={invoiceId}
               soloView
               handleDelete={() => {
                 showModal("asdf")
                 //(id) => deleteRow(invoiceId)
               }}
               showEditForm={() => toggleShowEdit(true)}
               close={() => selectInvoiceId(null)}
             />
    }
    
    const filtered = Object.values(invoices).filter(x => {
      return filters.includes(x.status)
    })
    const filteredBars = (filtered.length > 0 || filters.length > 0) ? filtered : invoices;
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
    <>
      {showEdit && ( 
        <EditForm 
          invoice={rowsData.filter(x => x.id === invoiceId)[0]} 
          hideEditForm={() => toggleShowEdit(false)} 
        /> 
      )} 
      
      <p 
        onClick={() => history.push("/")} 
        className={classnames("go-back", { 
          "hidden": !params.invoiceId 
        })}>Go back</p> 
      <Header 
        hidden={Boolean(params.invoiceId)} 
        num={rowsData.length} 
        handleFilter={e => handleFilters(e.target.name)} 
        forceClose={invoiceId} 
        clearFilter={() => setFilters([])} 
      /> 
      {isLoading ? "asdf": renderInvoiceBars()} 
      <Modal component={DeleteModal}/> 
      {validInvoiceId && <SingleInvoice invoice={selectedInvoice}/>} 
    </>
    );
  }

const mapStateToProps = (state, ownProps) => {
  const isLoading = state.invoices.loading
  const invoices = state.invoices.value
  return {
    isLoading,
    invoices,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    deleteInvoice: (id) => {
      return dispatch(deleteId(id))
    },
    setLoading: action => dispatch(loading(action)),
    showModal: modalName => dispatch(showModal(modalName)),
    hideModal: modalName => dispatch(hideModal(modalName))
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(InvoiceList));
