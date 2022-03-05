import React, {useState} from 'react';

import {Alert, ButtonGroup, IconButton, Snackbar, Tooltip} from "@mui/material";
import {EmailOutlined, Instagram, WhatsApp} from "@mui/icons-material";
import copy from 'copy-to-clipboard';

import logo from './logo_zeh.jpeg';
import './App.scss';

const App = () => {

  const [copyEmailAlert, setCopyEmailAlert] = useState(false);

  const copyEmail = () => {
    copy('zehenriquefreitas@gmail.com');
    setCopyEmailAlert(true);
  }

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setCopyEmailAlert(false);
  };

  const sendWhatsappMessage = () => {
    window.open('https://api.whatsapp.com/send?phone=5561999653127', '_blank');
  }

  const openInstagram = () => {
    window.open('https://www.instagram.com/zehenriquefreitas/', '_blank');
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p className="App-title">Site em Construção</p>

        <ButtonGroup>
          <Tooltip title="Copiar email">
            <IconButton onClick={copyEmail}>
              <EmailOutlined className="App-contact-icons" fontSize="large"/>
            </IconButton>
          </Tooltip>
          <Tooltip title="Whatsapp">
            <IconButton onClick={sendWhatsappMessage}>
              <WhatsApp className="App-contact-icons" fontSize="large"/>
            </IconButton>
          </Tooltip>
          <Tooltip title="Instagram">
            <IconButton onClick={openInstagram}>
              <Instagram className="App-contact-icons" fontSize="large"/>
            </IconButton>
          </Tooltip>
        </ButtonGroup>

        <Snackbar open={copyEmailAlert} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">Email copiado para a Área de Transferência</Alert>
        </Snackbar>
      </header>
    </div>
  );
}

export default App;
