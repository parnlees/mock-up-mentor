import React from "react";
import "./Home.css";
import { Card, CardTitle } from "reactstrap";
import { Form, FormText, FormGroup } from "reactstrap";
import { Input } from "reactstrap";
import { Label } from "reactstrap";
import music from "../images/spotify.png";

function Home() {
  return (
    <div className="body">
      <Card
        className="d-flex p-4 w-50 m-auto h-auto"
        body
        inverse
        style={{
          backgroundColor: "#333",
          borderColor: "#333",
        }}
      >
        <div className="d-flex justify-content-between row">
          <div style={{ flex: "1", margin: 50 }} className="col-7">
            <CardTitle tag="h5">Welcome back</CardTitle>
            <CardTitle tag="h6">We’re so excited to sleep again 😴</CardTitle>

            <Form>
              <FormGroup>
                <Label for="exampleEmail">EMAIL OR PHONE NUMBER</Label>
                <Input id="exampleEmail" name="email" type="email" />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">PASSWORD</Label>
                <Input id="examplePassword" name="password" type="password" />
                <FormText>
                  <a href="#">Forget your password?</a>
                </FormText>
                <div class="d-grid gap-2">
                  <button class="btn btn-primary" type="button">
                    Login
                  </button>
                </div>
              </FormGroup>
            </Form>
          </div>

          <div
            style={{ flex: "1", margin: 50 }}
            className="align-self-center col-3"
          >
            <img className="w-100" src={music} alt="music" />
            <h5 className="m-20">
              <b>Unable to Login?</b>
            </h5>
            <h6>
              Listen to some music, relax yourself, and take a deep breath until
              you can remember your password.
            </h6>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Home;
