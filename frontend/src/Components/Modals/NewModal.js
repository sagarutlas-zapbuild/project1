import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label } from 'reactstrap';

const NewModal = (props) => {
  const {
    labelText
  } = props;

  const [modal, setModal] = useState(false);

  const reject = (modal) => {
    return(
      <div>
      <Button color="secondary" onClick={toggle}>Reject</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          Reject Modal
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Something</Button>
        </ModalFooter>
      </Modal>
      </div>);    
  }

  const toggle = () => setModal(!modal);

  return (
    <div>
      
      <Label className="Radio-label">{labelText}</Label>
      <input type="radio" name="new" onClick={toggle}></input>
    
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Accept</Button>{' '}
            {/*props still need to be made. 
            Hence, complete functionality is still not achieved for second level modal*/}
          <reject />
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default NewModal;