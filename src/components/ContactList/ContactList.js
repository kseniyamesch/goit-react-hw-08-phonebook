import React from 'react';
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
      <ul className={s.ul}>
        {renderContact().map(contact => {
          console.log(contact);
          return (
            <li key={contact.id} className={s.item}>
              <span>{contact.name}:</span>
              <span>{contact.number}</span>
              <Button variant="primary" type="button" disabled={isLoading} onClick={() => handleDelete(contact.id)}>
                {isLoading ? 'Deleting..' : 'Delete'}
              </Button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
