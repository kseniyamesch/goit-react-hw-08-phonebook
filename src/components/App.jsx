import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Container from './Container';
import HomeView from 'Views/HomeView';
import ContactForm from './ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter';
import AppBar from './UserMenu/AppBar/AppBar';
import RegisterView from '../Views/RegisterView/RegisterView';
import LoginView from 'Views/LoginView';
import { PrivateRoute } from './PrivateRoute';

export function App() {
  return (
    <Container>
      <AppBar />

      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route 
        path="register" 
        element={<RegisterView />} />
        <Route path="login" element={<LoginView />} />
        <Route
          path="contacts"
          element={
            <PrivateRoute>
              <ContactForm />
              <h2>Contacts</h2>
              <Filter></Filter>
              <ContactList />
            </PrivateRoute>
          }
        />
      </Routes>
    </Container>
  );
}
