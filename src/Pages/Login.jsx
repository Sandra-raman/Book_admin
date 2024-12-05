import React, { useState } from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    // Add your authentication logic here
  };

  return (
    <MDBContainer className="d-flex justify-content-center align-items-center vh-100">
      <MDBCard style={{ maxWidth: "400px" }}>
        <MDBCardBody>
          <h3 className="text-center mb-4">Login</h3>
          <form onSubmit={handleSubmit}>
            <MDBInput
              wrapperClass="mb-3"
              label="Email"
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Link to={'/home'}>
            <MDBBtn type="submit" color="primary" className="w-100">
              Login
            </MDBBtn>
            </Link>
          </form>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};

export default LoginPage;
