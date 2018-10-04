import React from 'react';
import Person from './components/Person';
import AddPersonForm from './components/AddPersonForm';
import './index.css';
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      filter: ''
  }
}


  componentDidMount() {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        this.setState({ persons: response.data })
      })
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