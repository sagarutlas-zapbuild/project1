import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'reactstrap';
const Leadform = (props) => {
  return (
    <Container>
      <form>
        <div id="margin">
          <b>
            <label>  <h2>New Lead</h2>
            </label>
            <br />
            <div>
              <Row>
                <Col>
                  <div className="form-group">
                    <label htmlFor="title">
                      Title*
            </label>
                    <textarea
                      className="form-control"
                      id="title"
                      rows="1" required
                    />
                  </div>
                </Col>
                <Col >
                  <div className="dropwn">
                    <label htmlFor="source">
                      Source*
            </label>
                    <br />
                    <button className="form-control" id="source">Dropdown</button>
                  </div>
                </Col>
              </Row>
            </div>
            <Row>
              <Col>
                <div className="form-group">
                  <label htmlFor="description">
                    Description
            </label>
                  <textarea
                    className="form-control"
                    id="description"
                    rows="8" required
                  />
                </div>
              </Col>
              <Col>
                <div className="form-group">
                  <label htmlFor="url">
                    URL
            </label>
                  <textarea
                    className="form-control"
                    id="url"
                    rows="1"
                  />
                  <div className="form-group">
                    <label htmlFor="domain">
                      Domain
            </label>
                    <textarea
                      className="form-control"
                      id="domain"
                      rows="1"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="keyword_tags">
                      Keyword Tags
            </label>
                    <textarea
                      className="form-control"
                      id="keyword_tags"
                      rows="1"
                    />
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="form-group">
                  <label  class="control-label col-sm-9"  htmlFor="attachment">
                    Attachment
            </label>
                  <input  class="control-input col-sm-3"  type="file" id="attachment"
                  />

                </div>
              </Col>
              <Col >
                <div className="form-group">
                  <label htmlFor="technology">
                    Technology*
            </label>
                  <br />
                  <button className="form-control">Dropdown</button>
                  <div className="dropdown-content" id="technology" >
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
              <div className="form-group">
                      <label class="control-label col-sm-5" htmlFor="estimated_budget">
                        Estimated Budget($)
            </label>
                      <input class="control-input col-sm-7" type="Text" id="estimated_budget" width="50px">
                      </input>
                    </div>
                <div className="form-group">
                  <label class="control-label col-sm-5" htmlFor="referred_by">
                    Referred By
            </label>
                  <input class="control-input col-sm-7" type="Text" id="referred_by" width="50px">
                  </input>
                </div>
              </Col>
              <Col >
                <div className="dropdown">
                  <label class="control-label col-sm-6" htmlFor="assignee">
                    Assignee*
            </label>
                  <button class="control-input col-sm-6" >Dropdown</button>
                  <div className="dropdown-content" id="assignee">
                  </div>
                </div>
              </Col>
            </Row>
            <row>
              <Col>
              <label class="control-label col-sm-4">
                Prospect Detail
              </label>
              <label>LINK</label>
              </Col>
            </row>
            <div id="border">
              <div id="margin">
              <form class="form-horizontal" action="/action_page.php">

                <Row>
                  <Col>

                    <div className="form-group">
                      <label class="control-label col-sm-5" htmlFor="full_name">
                        Full Name
            </label>
                      <input class="control-input col-sm-6" type="Text" id="full_name" width="50px">
                      </input>
                    </div>
                  </Col>
                  <Col >
                    <div className="dropdown">
                      <label class="control-label col-sm-5" htmlFor="street_address">
                        Street Address
            </label>
                      <input class="control-input col-sm-6" type="Text" id="street_address" width="50px">
                      </input>

                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>

                    <div className="form-group">
                      <label class="control-label col-sm-5" htmlFor="email">
                        Email
            </label>
                      <input class="control-input col-sm-6" type="Text" id="email" width="50px">
                      </input>
                    </div>
                  </Col>
                  <Col >
                    <div className="dropdown">
                      <label class="control-label col-sm-5" htmlFor="city">
                        City
            </label>
                      <input class="control-input col-sm-6" type="Text" id="city" width="50px">
                      </input>

                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>

                    <div className="form-group">
                      <label class="control-label col-sm-5" htmlFor="company">
                        Company
            </label>
                      <input class="control-input col-sm-6" type="Text" id="company" width="50px">
                      </input>
                    </div>
                  </Col>
                  <Col >
                    <div className="dropdown">
                      <label class="control-label col-sm-5" htmlFor="state">
                        State
            </label>
                      <input class="control-input col-sm-6" type="Text" id="state" width="50px">
                      </input>

                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>

                    <div className="form-group">
                      <label class="control-label col-sm-5" htmlFor="designation">
                        Designation
            </label>
                      <input class="control-input col-sm-6" type="Text" id="designation" width="50px">
                      </input>
                    </div>
                  </Col>
                  <Col >
                    <div className="dropdown">
                      <label class="control-label col-sm-5" htmlFor="country">
                        Country
            </label>
                      <input class="control-input col-sm-6" type="Text" id="country" width="50px">
                      </input>

                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>

                    <div className="form-group">
                      <label class="control-label col-sm-5" htmlFor="skype_id">
                        Skype Id
            </label>
                      <input class="control-input col-sm-6" type="Text" id="skype_id" width="50px">
                      </input>
                    </div>
                  </Col>
                  <Col >
                    <div className="dropdown">
                      <label class="control-label col-sm-5" htmlFor="phone">
                        Phone
            </label>
                      <input class="control-input col-sm-6" type="Text" id="phone" width="50px">
                      </input>

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

              <input type="Button" value="Submit And New" id="Submit_and_new">
              </input>
            </Col>
            <Col>

              <input type="Button" value="     Submit    " id="submit">
              </input>
            </Col>
            <Col>

              <input type="Button" value="     Cancel     " id="cancel">
              </input>
            </Col>

          </Row>
        </div>

      </form>
    </Container>
  );
}

export default Leadform;
