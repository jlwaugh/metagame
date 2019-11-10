import React from "react";
import { Container, Box } from '@material-ui/core';
import Signup from "../Signup";

function Home(props) {
  return (
    <Container>
      <Box my={5}>
        <Signup />
      </Box>
    </Container>
  );
}

export default Home;