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
import { showModal } from './modalReducer'

function MainPage({children}) {
  const [lightMode, setColorMode] = useState(true);

    return (
      <div className="container">
        <LeftBar
          lightMode={lightMode}
          toggleLightMode={() => setColorMode(!lightMode)}
        />
        {children}
      </div>
    );
  }
export default withRouter(MainPage);
