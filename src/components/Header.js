import React, {Fragment} from "react";

import styled from "styled-components";

const Header = () => {
  return (
    <Fragment>
      <Container>
        <Logo />
      </Container>
    </Fragment>
  );
};

const Logo = styled.img``;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-image: url("/images/bg.png");
`;

export default Header;
