import React from 'react';
import styled from 'styled-components';

function Home() {
  return (
    <Container>
      <ViewContent></ViewContent>
    </Container>
  );
}

const Container = styled.div`
  padding: 110px 0 0 0;
`;

const ViewContent = styled.div`
  width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding: 40px 0;
`;

export default Home;
