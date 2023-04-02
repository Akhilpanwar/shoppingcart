import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { auth } from "../firebase/firebase";

import { Link } from "react-router-dom";

function ColorSchemesExample() {
  return (
    <>
      <div>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Nav className="me-auto" style={{ justifyContent: "space-around" }}>
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  marginLeft: "12rem",
                }}
                to={"/"}
              >
                Home
              </Link>
              {auth?.currentUser?.email ? (
                <Link
                  style={{
                    textDecoration: "none",
                    color: "white",
                    marginLeft: "12rem",
                  }}
                  to="/signout"
                >
                  Sign Out
                </Link>
              ) : (
                <>
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "white",
                      marginLeft: "12rem",
                    }}
                    to={"/signup"}
                  >
                    Signup
                  </Link>
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "white",
                      marginLeft: "12rem",
                    }}
                    to={"/login"}
                  >
                    Login
                  </Link>
                </>
              )}
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  marginLeft: "12rem",
                }}
                to={"/cart"}
              >
                {<AiOutlineShoppingCart />}
              </Link>

            </Nav>
          </Container>
        </Navbar>

     
      </div>
    </>
  );
}

export default ColorSchemesExample;
