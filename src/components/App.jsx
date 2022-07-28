import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Container from './Container';
import HomeView from 'Views/HomeView';
import ContactForm from './ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter';
import AppBar from './UserMenu/AppBar/AppBar';
import RegisterView from '../Views/RegisterView/RegisterView';
import LoginView from 'Views/LoginView';
import  PrivateRoute  from './PrivateRoute';
import  PublicRoute  from './PublicRoute';
import { authOperations } from 'redux/auth';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
dispatch(authOperations.fetchCurrentUser())
  },[dispatch]);

  return (
    <Container>
      <AppBar />

      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route 
        path="register" 
        element={
          <PublicRoute>
            <RegisterView />
          </PublicRoute>
        } />
        <Route path="login" 
        element={
        <PublicRoute>
        <LoginView />
        </PublicRoute>
        } />
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
