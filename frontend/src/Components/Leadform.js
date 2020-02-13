import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'reactstrap';
const Leadform = (props) => {
  return (
    <Container>
      <form>
        <b>
        <label>  New Lead
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
              <div className="dropdown">
                <label htmlFor="source">
                  Source*
            </label>
                <br />
                <button className="dropbtn">Dropdown</button>
                <div id="source" >
                </div>
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
                rows="1" required
              />
              <div className="form-group">
                <label htmlFor="domain">
                  Domain
            </label>
                <textarea
                  className="form-control"
                  id="domain"
                  rows="1" required
                />
              </div>
              <div className="form-group">
                <label htmlFor="keyword_tags">
                  Keyword Tags
            </label>
                <textarea
                  className="form-control"
                  id="keyword_tags"
                  rows="1" required
                />
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="form-group">
              <label htmlFor="attachment">
                Attachment
            </label>
              <input type="file" id="attachment" name="myfile"
              />

            </div>
          </Col>
          <Col >
            <div className="form-group">
              <label htmlFor="technology">
                Technology*
            </label>
              <br />
              <button className="dropbtn">Dropdown</button>
              <div className="dropdown-content" id="technology" >
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="form-group">
              <div className="col-xm-1">
                <label className="Label-control" htmlFor="estimated_budget">
                  Estimated budget($)
            </label>
                <input className="form-control" type={Number} id="estimated_ budget" width="50px">
                </input>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="referred_by">
                Referred By
            </label>
              <input class="form-control" type={Text} id="referred_by" width="50px">
              </input>
            </div>
          </Col>
          <Col >
            <div className="dropdown">
              <label htmlFor="assignee">
                Assignee*
            </label>
              <button className="dropbtn">Dropdown</button>
              <div className="dropdown-content" id="assignee">
              </div>
            </div>
          </Col>
        </Row>
        <div id="border">
          <Row>
            <Col>

              <div className="form-group">
                <label htmlFor="full_name">
                  Full Name
            </label>
                <input class="form-control" type={Text} id="full_name" width="50px">
                </input>
              </div>
            </Col>
            <Col >
              <div className="dropdown">
                <label htmlFor="street_address">
                  Street Address
            </label>
                <input class="form-control" type={Text} id="street_address" width="50px">
                </input>

              </div>
            </Col>
          </Row>
          <Row>
            <Col>

              <div className="form-group">
                <label htmlFor="email">
                  Email
            </label>
                <input class="form-control" type={Text} id="email" width="50px">
                </input>
              </div>
            </Col>
            <Col >
              <div className="dropdown">
                <label htmlFor="city">
                  City
            </label>
                <input class="form-control" type={Text} id="city" width="50px">
                </input>

              </div>
            </Col>
          </Row>
          <Row>
            <Col>

              <div className="form-group">
                <label htmlFor="company">
                  Company
            </label>
                <input class="form-control" type={Text} id="company" width="50px">
                </input>
              </div>
            </Col>
            <Col >
              <div className="dropdown">
                <label htmlFor="state">
                  State
            </label>
                <input class="form-control" type={Text} id="state" width="50px">
                </input>

              </div>
            </Col>
          </Row>

        </div>
        </b>
        <Row>
<Col>
<label>Submit And New </label>
<input type="Button">
  
</input>
</Col>
<Col>
</Col>
<Col>
</Col>

        </Row>
      </form>
    </Container>
  );
}

export default Leadform;
