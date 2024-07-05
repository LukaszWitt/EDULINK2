import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Grid,
  Paper
} from '@mui/material';
import { styled } from '@mui/system';

// Styled Components
const StyledContainer = styled(Box)({
  height: '100vh',
  width: '100wh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
});

const StyledPaper = styled(Paper)({
  padding: 20,
  width: '500px',
  backgroundColor: '#fff',
  // boxShadow: '0 0 10px 50px rgba(147, 66, 160)', // Zmieniony kolor cienia

});

const StyledButton = styled(Button)({
  backgroundColor: '#A758B5',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#9342a0'
  }
});

// Component
const RegistrationFormStudent: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    phone: '',
    email: '',
    birthDate: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Tutaj można dodać logikę do wysyłania danych do bazy danych
    console.log(formData);
  };

  return (
    <StyledContainer>
      <StyledPaper>
        <Typography variant="h4" color="#A758B5" align="center" gutterBottom fontWeight={'bold'}>
          REJESTRACJA
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <TextField
            fullWidth
            margin="normal"
            id="name"
            name="name"
            label="Imię"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            id="surname"
            name="surname"
            label="Nazwisko"
            value={formData.surname}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            id="phone"
            name="phone"
            label="Nr telefonu"
            value={formData.phone}
            onChange={handleChange}
            required
          />
           <TextField
            fullWidth
            margin="normal"
            id="email"
            name="email"
            label="Adres E-mail"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            id="birthDate"
            name="birthDate"
            label="Data urodzenia"
            value={formData.birthDate}
            onChange={handleChange}
            required
          />
         
          <Grid container justifyContent="center" marginTop={2}>
            <StyledButton type="submit" variant="contained">
              Zarejestruj się
            </StyledButton>
          </Grid>
        </Box>
      </StyledPaper>
    </StyledContainer>
  );
};

export default RegistrationFormStudent;
