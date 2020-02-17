import React from 'react'

import NewModal from '../Modals/NewModal'

const ModalConductor = props => {
  switch (props.buttonlabel) {
    case 'NEW':
      return <NewModal {...props}/>;

    default:
      return null;
  }
};

export default ModalConductor;