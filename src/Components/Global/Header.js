import React, { Component } from "react";
import Container from "./Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import { getPathName } from "../../utils";
import { A } from "../../Styles";

class Header extends Component {
  isProperty = () => {
    return window.location.pathname.includes("properties");
  };
  render() {
    const { title } = this.props;
    return (
      <Container>
        <header
          style={{
            padding: `2rem 0 1rem`,
            fontSize: `1.25rem`,
            flex: `100%`
          }}
        >
          <A href="/">
            {this.isProperty() && (
              <FontAwesomeIcon
                icon={faLongArrowAltLeft}
                style={{ marginRight: `0.5rem`, opacity: `0.65` }}
              />
            )}
            {title ? title : "Page Title"}
          </A>
        </header>
      </Container>
    );
  }
}

export default Header;
