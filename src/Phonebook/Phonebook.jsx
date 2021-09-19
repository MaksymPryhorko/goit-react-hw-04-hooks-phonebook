import { useState, useEffect } from "react";
import Form from "./Form";
import ContactList from "./ContactList";
import Filter from "./Filter";
import style from "./Phonebook.module.css";

export default function Phonebook() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem("contacts")) ?? [];
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const deleteContact = (name) => {
    const newContacts = contacts.filter((contact) => contact.name !== name);
    setContacts(newContacts);
  };

  const checkedDuplicate = (newNameContact) => {
    return contacts.find(
      (contact) => contact.name.toLowerCase() === newNameContact.toLowerCase()
    );
  };

  const formSubmitHandler = (data) => {
    if (checkedDuplicate(data.name) !== undefined) {
      alert(`${data.name} is alreade in contacts.`);
      return;
    }
    setContacts((prevState) => [...prevState, data]);
  };

  const changeFilter = (e) => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <section className={style.mainSection}>
      <h1>Phonebook</h1>
      <Form onSubmit={formSubmitHandler} />

      <div className={style.containerContacts}>
        <h2>Contacts:</h2>
        <Filter filter={filter} onChange={changeFilter} />
        <ContactList contacts={getVisibleContacts()} onDelete={deleteContact} />
      </div>
    </section>
  );
}
