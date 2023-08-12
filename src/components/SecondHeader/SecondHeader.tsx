

import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { createTheme } from '@mui/material';
import React, {  } from 'react';
import { Link } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

const arrowButtonStyles = {

};

function SecondHeader() {



  return (
    <ThemeProvider theme={createTheme({ palette: { mode: 'dark' } })}>
      <header className="top-bar flexRowSpaceBetween animate__animated animate__fadeIn" dir="ltr">
        <aside>
          <Link to="/" className="back-arrow">
            <span id='arrowButtonStyles' style={arrowButtonStyles}><KeyboardBackspaceIcon/></span>
          </Link>
        </aside>
        <aside
          id="lang"
          style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}
        >
        </aside>
      </header>
    </ThemeProvider>
  );
}

export default SecondHeader;
