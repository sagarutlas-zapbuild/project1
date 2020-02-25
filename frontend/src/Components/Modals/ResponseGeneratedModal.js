import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label } from 'reactstrap';

const ReasponseGeneratedModal = (props) => {
  const {
    labelText
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      
      <Label className="Radio-label">{labelText}</Label>
      <input type="radio" name="new" onClick={toggle}></input>
    
      <Modal  className="modal-dailog modal-lg" isOpen={modal} toggle={toggle}>
  <ModalHeader toggle={toggle}>{labelText}</ModalHeader>
        <ModalBody>
        <div class="container">
            <div class="row">

              <div class="col-sm-8">

                <textarea
                  id="description_new"
                  rows="5" cols="51" required
                /*  let value = this.state.data.map(e=>JSON.stringify(e).replace(/{|}/g,'')).join(',\n');

<textarea value={value}  defaultValue="val" /> */
                />
                <div id="margin1" class="float-left w3-border w3-padding">
                  <label className="text-center"><b>Prospect Detail</b></label>
                  
                </div>
                <textarea
                  id="description_new"
                  rows="5" cols="51" required
                /*  let value = this.state.data.map(e=>JSON.stringify(e).replace(/{|}/g,'')).join(',\n');

<textarea value={value}  defaultValue="val" /> */

                />
                <div class="row">
        <div class="col-lg-12">
        <button class="btn btn-secondary float-right">Edit</button>
       </div>
       </div>
                <br/>
                <br/>
                
                <div id="margin1" class="float-left w3-border w3-padding">
                  <label className="text-center"><b>Comments</b></label>
                  
                </div>
                <textarea
                  id="description_new"
                  rows="5" cols="51" required
                /*  let value = this.state.data.map(e=>JSON.stringify(e).replace(/{|}/g,'')).join(',\n');

<textarea value={value}  defaultValue="val" /> */
                />
                <br/>
              </div>



              <div class="col-sm-4">
                <div id="margin1">
                  <div className="sidenav">
<div id="margin1">
  <b>
                      <label  style={{textAlign: "center"}}><font size="3" >Accepted</font> </label>
                      </b>
                      </div>

                    <br />
                    <label >TAGS</label>
                    <br />

                    <textarea
                      id="description_new"
                      rows="3" cols="20" required
                    /*  let value = this.state.data.map(e=>JSON.stringify(e).replace(/{|}/g,'')).join(',\n');
   
    <textarea value={value}  defaultValue="val" /> */
                    
                    />
        <div class="row">
        <div class="col-lg-12">
        <button class="btn btn-secondary float-right">Edit</button>
       </div>
       </div>
   
                    <label >DOMAIN</label>
                    <br />

                    <textarea
                      id="description_new"
                      rows="3" cols="20" required
                    /*  let value = this.state.data.map(e=>JSON.stringify(e).replace(/{|}/g,'')).join(',\n');
   
    <textarea value={value}  defaultValue="val" /> */
                    />
                    <label >TECHNOLOGY</label>
                    <br />

                    <textarea
                      id="description_new"
                      rows="3" cols="20" required
                    /*  let value = this.state.data.map(e=>JSON.stringify(e).replace(/{|}/g,'')).join(',\n');
   
    <textarea value={value}  defaultValue="val" /> */
                    />
                    <div class="row">
        <div class="col-lg-12">
        <button class="btn btn-secondary float-right">Edit</button>
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

export default ReasponseGeneratedModal;