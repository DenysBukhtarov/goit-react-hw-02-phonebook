import React, { Component } from "react";
import { nanoid } from "nanoid";

import ContactForm from "../components/ContactForm";
import Filter from "./Filter/index.js";
import ContactsList from "./ContactList";
import Container from "../components/Container";

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: "",
  };

  addContact = (name, number) => { 
    this.state.contacts.every((contact) => contact.name !== name)
      ? this.setState((ps) => ({
        contacts: [...ps.contacts, {
          name,
          number,
          id: nanoid(),
        },
        ],
      }))
      : alert(`${name} is already in contacts`);
  };

  deleteContact = (id) => {
    this.setState((ps) => ({
contacts: ps.contacts.filter((contact) => contact.id !== id),
    }));
  };

  handleFilterChange = (e) => { 
    this.setState({ filter: e.currentTarget.value });
  };

  getFindContact = () => { 
    const { contacts, filter } = this.state;
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toUpperCase().includes(normalizeFilter));
  };
 

  render() {
    const { filter } = this.state;
    const { addContact, deleteContact, handleFilterChange, getFindContact } = this;
    
    return (<Container>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onFilterChange={handleFilterChange} />
      <ContactsList list={getFindContact()} onClick={ deleteContact} />
    </Container>);
  }
}

export default App;