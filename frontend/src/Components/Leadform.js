import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Label } from 'reactstrap'

class Leadform extends React.Component {
  constructor(props){
    super(props);
    this.initialState=
    {lead_title: '',
      lead_source: '',
      lead_description: '',
      lead_url: '',
      lead_domain: '',
      lead_technology: '',
      lead_estimated_budget: '',
      lead_reffered_by: '',
      lead_assignee: '',
      lead_prospect:'',
      lead_keyword_tags:'',
    
    prospect_full_name:'' ,
      prospect_company: '',
      prospect_designation: '',
      prospect_skype_id: '',
      prospect_street_address: '',
      prospect_city: '',
      prospect_state: '',
      prospect_country: '',
    
    attachment: '',
      attachment_lead: '',
    
   email_id: '',
      email_prospect:'',
    phone_id: '',
      phone_prospect: '',
   comment: '',
      comment_lead: ''

      
    }
    this.state=this.initialState;
    this.handelChange = this.handelChange.bind(this);
    this.handelSubmit = this.handelSubmit.bind(this);
  }
  handelChange(event){
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    })

  }
  handelSubmit(event) {
    event.preventDefault();
    const data = {
      lead_title: this.state.lead_title,
      lead_source: this.state.lead_source,
      lead_description: this.state.lead_description,
      lead_url: this.state.lead_url,
      lead_domain: this.state.lead_domain,
      lead_technology: this.state.lead_technology,
      lead_estimated_budget: this.state.lead_estimated_budget,
      lead_reffered_by: this.state.lead_reffered_by,
      lead_assignee: this.state.lead_assignee,
      lead_prospect: {
          prospect_full_name: this.state.prospect_full_name,
          prospect_company: this.state.prospect_company,
          prospect_designation: this.state.prospect_designation,
          prospect_skype_id: this.state.prospect_skype_id,
          prospect_street_address: this.state.prospect_street_address,
          prospect_city: this.state.prospect_city,
          prospect_state: this.state.prospect_state,
          prospect_country: this.state.prospect_country
      },
      lead_keyword_tags: this.state.lead_keyword_tags
  }
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "Vary": "Accept"}
    };

   fetch("http://127.0.0.1:8000/leads/",
            options
        ).then(response =>{
          console.log(response)
          })
          .catch(error => {
          console.log(error)
          } );
          /*   const responsejson = JSON.response.stringify();
            console.log(responsejson);  */
    console.log(this.state)
    console.log(options)
  }
 
 render(){
  return (
    <Container>
      <form onSubmit={this.handelSubmit}>
        <div id="margin">
          <b>
            <label>  <h2>New Lead</h2>
            </label>
            <br />
            <div>
              <Row>
                <Col>
                  <div className="form-group">
                    <label >
                      Title*
            </label>
                    <input type="text"
                      className="form-control"
                      name="lead_title"
                      value={this.state.lead_title} onChange={this.handelChange}
                    />
                  </div>
                </Col>
                <Col >
                  <div className="form-group">
                    <label>Source*</label><br></br>
                    <select name="lead_source" value={this.state.lead_source} onChange={this.handelChange}  className="form-control">
                      <option>choose any one</option>
                      <option select>java</option>
                      <option select>php</option>
                    </select>
                  </div>
                </Col>
              </Row>
            </div>
            <Row>
              <Col>
                <div className="form-group">
                  <label >
                    Description
            </label>
                  <textarea
                    className="form-control"
                    rows="8" required
                    name="lead_description"
                    value={this.state.lead_description} onChange={this.handelChange}
                  />
                </div>
              </Col>
              <Col>
                <div className="form-group">
                  <label>
                    URL
            </label>
            <input type="url"
                      className="form-control"
                      name="lead_url"
                      value={this.state.lead_url} onChange={this.handelChange}
                    />
                  <div className="form-group">
                    <label>
                      Domain
            </label>
            <input type="text"
                      className="form-control"
                      name="lead_domain"
                      value={this.state.lead_domain} onChange={this.handelChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      Keyword Tags
            </label>
            <input type="text"
                      className="form-control"
                      name="lead_keyword_tags"
                      value={this.state.lead_keyword_tags} onChange={this.handelChange}
                    />
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="form-group">
                  <label className="control-label col-sm-9">
                    Attachment
            </label>
                  <input className="control-inputcol-sm-3" type="file" name="attachment"
                  value={this.state.attachment} onChange={this.handelChange}
                  />

                </div>
              </Col>
              <Col >
                <div className="form-group">
                  <label>Technology*</label><br></br>
                  <select name="lead_technology"   value={this.state.lead_technology} onChange={this.handelChange} className="form-control">
                    <option>choose any one</option>
                    <option select>django</option>
                    <option select>python</option>
                  </select>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="form-group">
                  <label className="control-label col-sm-5">
                    Estimated Budget($)
            </label>
                  <input className="control-input col-sm-7" name="lead_estimated_budget"  type="Text" 
                   value={this.state.lead_estimated_budget} onChange={this.handelChange} width="50px">
                  </input>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-5">
                    Referred By
            </label>
                  <input className="control-input col-sm-7"
                   type="Text"
                  name="lead_reffered_by"
                  value={this.state.lead_reffered_by} onChange={this.handelChange}
                   width="50px">
                  </input>
                </div>
              </Col>
              <Col >
                <div className="dropdown">
                  <label className="control-label col-sm-6">
                    Assignee*
            </label>
                  <br />
                  <label className="control-label col-sm-6">
                    <input type="radio" ></input>

                    Assignee To

            </label>
                  <select  name ="lead_assignee" value={this.state.lead_assignee} onChange={this.handelChange} className="control-label col-sm-6">
                    <option>choose any one</option>
                    <option select>Aman</option>
                    <option select>Sagar</option>

                  </select>
                </div>
              </Col>
            </Row>
            <row>
              <div className="form-group">
                <Col>
                  <Label value="Prospect Detail" className="text-center"></Label>
                  <label>Existing? </label>
                </Col>
              </div>
            </row>
            <div id="border">
              <div id="margin">
                <form className="form-horizontal" action="/action_page.php">

                  <Row>
                    <Col>

                      <div className="form-group">
                        <label className="control-label col-sm-5">
                          Full Name
            </label>
                        <input className="control-input col-sm-6"  name ="prospect_full_name" 
                         value={this.state.prospect_full_name} onChange={this.handelChange}  
                         type="Text"  width="50px">
                        </input>
                      </div>
                    </Col>
                    <Col >
                      <div className="dropdown">
                        <label className="control-label col-sm-5">
                          Street Address
            </label>
                        <input className="control-input col-sm-6" type="Text" name="prospect_street_address"
                        value={this.state.prospect_street_address} onChange={this.handelChange} width="50px">
                        </input>

                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>

                      <div className="form-group">
                        <label className="control-label col-sm-5">
                          Email
            </label>
                        <input className="control-input col-sm-6"
                        name="email_id" 
                         value={this.state.email_id} onChange={this.handelChange} width="50px">
                        </input>
                        <button type="button" className="add-icon">+</button>

                      </div>
                    </Col>
                    <Col >
                      <div className="dropdown">
                        <label className="control-label col-sm-5">
                          City
            </label>
                        <input className="control-input col-sm-6"  name="prospect_city"
                        value={this.state.prospect_city} onChange={this.handelChange}
                        type="Text"  width="50px">
                        </input>

                      </div>
                    </Col>
                  </Row>
                  
                  <Row>
                    <Col>

                      <div className="form-group">
                        <label className="control-label col-sm-5">
                          Company
            </label>    
            <input className="control-input col-sm-6" 
                  type="Text" name ="prospect_company"  cowidth="50px"
                  value={this.state.prospect_company} onChange={this.handelChange}  
                                     >
                        </input>
                      </div>
                    </Col>
                    <Col >
                      <div className="dropdown">
                        <label className="control-label col-sm-5">
                          State
            </label>
                        <input className="control-input col-sm-6" type="Text"
                        value={this.state.prospect_state} onChange={this.handelChange}
                          name ="prospect_state" width="50px">
                        </input>

                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>

                      <div className="form-group">
                        <label className="control-label col-sm-5">
                          Designation
            </label>
                        <input className="control-input col-sm-6" type="Text" name="prospect_designation"
                        value={this.state.prospect_designation} onChange={this.handelChange} width="50px">
                        </input>
                      </div>
                    </Col>
                    <Col >in
                      <div className="form-group">
                        <label className="control-label col-sm-5">
                          Country
            </label>
                        <input className="control-input col-sm-6" type="Text"
                        value={this.state.prospect_country} onChange={this.handelChange} 
                         name="prospect_country" width="50px">
                        </input>

                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div className="form-group">
                        <label className="control-label col-sm-5">
                          Skype Id
            </label>
                        <input className="control-input col-sm-6" type="Text"
                        value={this.state.prospect_skype_id} onChange={this.handelChange} 
                        name="prospect_skype_id" width="50px">
                        </input>
                      </div>
                    </Col>
                    <Col >
                      <div className="dropdown">
                        <label className="control-label col-sm-5">
                          Phone
            </label>
                        <input className="control-input col-sm-6" type="Text" width="50px">
                        </input>
                        <button type="button" name="phone_id" 
                        value={this.state.phone_id} onChange={this.handelChange}
                        className="add-icon">+</button>

                      </div>

                    </Col>
                  </Row>
                </form>
              </div>
            </div>
          </b>
          <br />
          <Row>
            <Col>

              <button className="text-center" type="submit" value="Submit And New" id="Submit_and_new">
                Submit And New
              </button>
            </Col>
            <Col>

              <input className="text-center" type="submit" value="Submit" id="submit">
              </input>
            </Col>
            <Col>

              <input className="text-center" type="Button" value="Cancel" id="cancel">
              </input>
            </Col>

          </Row>
        </div>

      </form>
    </Container>
  );
}
}

export default Leadform;
