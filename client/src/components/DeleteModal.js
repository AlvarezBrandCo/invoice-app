import Modal from "./Modal";
import Button from "./Button";
import { connect } from 'react-redux';
import { withRouter} from "react-router-dom";
import { showModal, hideModal } from '../modalReducer'
import { loading, deleteId } from '../latestIdSlice';


const DeleteModal = ({isLoading, deleteInvoice, history, hideModal, match: { params: {invoiceId}}}) => {
  const deleteRow = (rowToDelete) => {
    hideModal("asdf")
    history.push("/");
    deleteInvoice(rowToDelete)
    console.log(isLoading)
  }
  return (
    <div>
      <h3>Confirm Deletion</h3>
      <p>Are you sure you want to delete invoice ? This action cannot be undone.</p>
      <div className="d-flex justify-content-end">
        <Button className="mx-3">Cancel</Button>
        <Button onClick={() => deleteRow(invoiceId)}>Delete</Button>
      </div>
    </div>
  )
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
    hideModal: () => {
      return dispatch(hideModal())
    },
    setLoading: action => dispatch(loading(action)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DeleteModal));
