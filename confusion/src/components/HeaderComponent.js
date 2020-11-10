import React, { Component } from "react";
import { Navbar, NavbarBrand, Jumbotron } from "reactstrap";

class Header extends Component {
  render() {
    return (
     //<React.Fragment>
     <>
        <Navbar dark>
          <div className="container">
            <NavbarBrand href="/">Confusion</NavbarBrand>
          </div>
        </Navbar>
        <Jumbotron>
            <div className="container">
                <div className="row row-header">
                    <div className="col-12 col-sm-6">
                        <h1>Restaurante Confusion</h1>
                        <p>Ven y disfruta de nuestros almuerzos</p>
                    </div>
                </div>
            </div>
        </Jumbotron>
      </>
      //</React.Fragment>
    );
  }
}

export default Header;