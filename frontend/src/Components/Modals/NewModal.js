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

<Modal isOpen={modal} toggle={toggle}>
<ModalHeader toggle={toggle}>{labelText}</ModalHeader>
<ModalBody>
{/* <Container fluid={true} className="Full-screen">
*/}
<form>
<div id="margin">
{/* <div id="form-control">
*/} <row>
<Col>
<div className="sidenav">
<div className="right">
<div className="form-group">
<a href="#">About</a>
<br />
<a href="#">Services</a>
<br />
<a href="#">Clients</a>
<br />
<a href="#">Contact</a>
</div>
</div>
</div>
</Col>
<Col>
<textarea
className="form-control"
id="description_new"
rows="3 " required
/>
<br/>

<div className="form-group">
<Col>
<label className="text-center">Prospect Detail</label>
</Col>
<textarea
className="form-control"
id="description_new"
rows="3 " required
/>

</div>
</Col>

</row>

</div>
{/* </div>
*/} </form>
{/* </Container>
*/} </ModalBody>
<ModalFooter>
<Button color="primary" onClick={toggle}>Accept</Button>{' '}
<Button color="primary" onClick={toggleNested}>Reject</Button>
{/*props still need to be made.
Hence, complete functionality is still not achieved for second level modal*/}
<Modal isOpen={nestedModal} toggle={toggleNested} onClosed={closeAll ? toggle : undefined}>
            <ModalHeader>Nested Modal title</ModalHeader>
            <ModalBody>
            <form>
<div id="margin">
<div className="form-group">
<textarea
className="form-control"
id="description_new"
rows="3" required
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