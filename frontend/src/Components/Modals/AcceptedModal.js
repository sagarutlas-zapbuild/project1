import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label } from 'reactstrap';

const AcceptedModal = (props) => {
  const {
    labelText
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>

      <Label className="Radio-label">{labelText}</Label>
      <input type="radio" name="new" onClick={toggle}></input>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>

          <div class="container">
            <div class="row">

              <div class="col-sm-6">

                <input type="text">

                </input>
                <label className="text-center">Prospect Detail</label>
                <textarea
                  id="description_new"
                  rows="3" required
                />
              </div>



              <div class="col-sm-6">
                <div id="margin"   padding="0px">
                  <div className="sidenav">
                    <div className="right">
                      <div className="form-group">
                        <label className="text-center">Prospect Detail</label>
                        <br />
                        <a href="#">Services</a>
                        <br />
                        <a href="#">Clients</a>
                        <br />
                        <a href="#">Contact</a>
                      </div>
                    </div>
                  </div>
                </div>


              </div>

            </div>
          </div>

        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default AcceptedModal;