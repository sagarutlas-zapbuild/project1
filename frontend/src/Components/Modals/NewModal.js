import React, { useState } from 'react';
import { Button, Modal, ModalHeader,Container, Col, ModalBody, ModalFooter, Label } from 'reactstrap';

const NewModal = (props) => {
const {
labelText
} = props;

const [modal, setModal] = useState(false);
  const [nestedModal, setNestedModal] = useState(false);
  const [closeAll, setCloseAll] = useState(false);

  const toggle = () => setModal(!modal);
  const toggleNested = () => {
    setNestedModal(!nestedModal);
    setCloseAll(false);
  }
  const toggleAll = () => {
    setNestedModal(!nestedModal);
    setCloseAll(true);
  }

  return (
 
<div>
  <Label className="Radio-label">{labelText}</Label>
<input type="radio" name="new" onClick={toggle}></input>
  <Modal className="modal-dailog modal-lg" isOpen={modal} toggle={toggle}>
<ModalHeader toggle={toggle}>{labelText}</ModalHeader>
<ModalBody>
<div class="container">
            <div class="row">

              <div class="col-sm-8">

                <textarea
                  id="description_new"
                  rows="3" cols="30" required
                 /*  let value = this.state.data.map(e=>JSON.stringify(e).replace(/{|}/g,'')).join(',\n');

 <textarea value={value}  defaultValue="val" /> */
                />
<div id="margin1">
                <label className="text-center">Prospect Detail</label>

                </div>
                <div id="margin1" wrap-content>
                  <labelText id="margin1" > </labelText>
                </div>
                <label className="text-center">Attachement</label>

              </div>



              <div class="col-sm-4">
                <div id="margin1">
                  <div className="sidenav">
                      
                        <label ><font size="2">  Prospect Detail</font> </label>
                        <br />
                        <label >TAGS</label>
                        <br/>

                        <a href="#">Services</a>
                        <br />
                        <a href="#">Clients</a>
                        <br />
                        <a href="#">Contact</a>
                        <br/>

                        <a href="#">Services</a>
                        <br />
                        <a href="#">Clients</a>
                        <br />
                        <a href="#">Contact</a>
                                                <br/>

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
</ModalBody>
<ModalFooter>
<Button color="primary" onClick={toggle}>Accept</Button>{' '}
<Button color="primary" onClick={toggleNested}>Reject</Button>
{/*props still need to be made.
Hence, complete functionality is still not achieved for second level modal*/}
<Modal isOpen={nestedModal} toggle={toggleNested} onClosed={closeAll ? toggle : undefined}>
            <ModalHeader>Reason For rejection</ModalHeader>
            <ModalBody>
            <form>
<div id="margin">
<div className="form-group">
<textarea
className="form-control"
id="description_new"
rows="5" required
/>
<Button color="primary" onClick={toggle}>Submit</Button>
</div>
</div>
</form>
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={toggle}>Something</Button>
            </ModalFooter>
          </Modal>
</ModalFooter>
</Modal>
</div>
  );
}
export default NewModal;