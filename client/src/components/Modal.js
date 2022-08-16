import React from 'react';
import { connect, useSelector, useDispatch } from 'react-redux'

const Modal = ({component: Component, name, shouldShowModal}) => {
  if (!shouldShowModal) {
    return null
  }
  else {
    return (
      <div className="modal-wrap">
        <div className="modal-container" id={name}>
          <Component/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const shouldShowModal = state.modals.show
  return {
    shouldShowModal
  }
}

export default connect(mapStateToProps)(Modal);
