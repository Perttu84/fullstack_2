import React from 'react';
import Person from './components/Person'
import AddPersonForm from './components/AddPersonForm'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Martti Tienari', number: '040-123456' },
        { name: 'Arto Järvinen', number: '040-123456' },
        { name: 'Lea Kutvonen', number: '040-123456' }
      ],
      newName: '',
      newNumber: '',
      filter: ''
  }
}

  addPerson = (personObject) => {

    if (this.state.persons.map(person => person.name).indexOf(personObject.name) === -1) {
      const persons = this.state.persons.concat(personObject)
      this.setState({
      persons
      })
    } else {
      alert('Nimi on jo luettelossa!')
    }
  }


  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <AddPersonForm addPerson={this.addPerson}/>
        <h2>Numerot</h2>
        {this.state.persons.map(person => <Person key={person.name} person={person} />)}
      </div>
    )
  }
}

export default App;