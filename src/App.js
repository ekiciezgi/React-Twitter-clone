import React from 'react'
import Container from './layout/Container';
import Sidebar from './layout/Sidebar';
import Content from './layout/Content';
import Widget from './layout/Widget';

function App() {
  return (
    <Container>
  
     <Sidebar/>
      <Content></Content>
      <Widget></Widget>

     </Container>
  );
}

export default App;
