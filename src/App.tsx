import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Header from './components/Header/Header';
import Content from './components/Title/Content';
import './App.css'; 

function App() {
  return (
    <Container maxWidth="sm">
      <CssBaseline />
      <Header />
      <Content />
    </Container>
  );
}

export default App;
