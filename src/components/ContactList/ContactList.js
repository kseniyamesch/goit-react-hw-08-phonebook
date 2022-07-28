import React from 'react';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { useDeleteContactMutation } from '../../services/contactsAPI';
import s from './ContactList.module.css';
import { useGetContactsQuery } from '../../services/contactsAPI';

export default function ContactList() {

  const filter = useSelector(state => state.filter.value);

  const { data = [], isError, error, isFetching, isLoading } = useGetContactsQuery();

  const [handleDelete] = useDeleteContactMutation();

  const renderContact = () => {
    return data.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <>
      {isFetching && <p style={{ textAlign: 'center' }}>Загружаем...</p>}
      {isError && <p>Something went wrone. {error}</p>}
      <Table striped bordered hover size="sm" className={s.table}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Number</th>
          <th>Delete Contact</th>
        </tr>
      </thead>
      <tbody>
      {renderContact().map(contact => {
          return (
            <tr key={contact.id}>
            <td>{contact.name}</td>
            <td>{contact.number}</td>
            <td><Button variant="primary" type="button" disabled={isLoading} onClick={() => handleDelete(contact.id)}>
                {isLoading ? 'Deleting..' : 'Delete'}
              </Button></td>
          </tr>
            /* <li key={contact.id} className={s.item}>
              <span>{contact.name}:</span>
              <span>{contact.number}</span>
              <Button variant="primary" type="button" disabled={isLoading} onClick={() => handleDelete(contact.id)}>
                {isLoading ? 'Deleting..' : 'Delete'}
              </Button>
            </li> */
          );
        })}
      </tbody>
      </Table>
      {/* <ul className={s.ul}>
        {renderContact().map(contact => {
          return (
            <li key={contact.id} className={s.item}>
              <span>{contact.name}:</span>
              <span>{contact.phone}</span>
              <Button variant="primary" type="button" disabled={isLoading} onClick={() => handleDelete(contact.id)}>
                {isLoading ? 'Deleting..' : 'Delete'}
              </Button>
            </li>
          );
        })}
      </ul> */}
    </>
  );
}
