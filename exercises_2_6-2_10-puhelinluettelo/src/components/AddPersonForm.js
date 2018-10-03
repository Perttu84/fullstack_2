import React from 'react'

class AddPersonForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newName: '',
      newNumber: ''
  }
}
    handleNameChange = (event) => {
    console.log(event.target.value)
    this.setState({ newName: event.target.value })
  }

  handleNumberChange = (event) => {
    console.log(event.target.value)
    this.setState({ newNumber: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const personObject = {
      name: this.state.newName,
      number: this.state.newNumber
    }
    this.props.addPerson(personObject)
  }

  render() {return (
         <form onSubmit={this.handleSubmit}>
          <div>
            nimi: <input  value={this.newName}
            onChange={this.handleNameChange}/>
          </div>
          <div>
            numero: <input value={this.newNumber}
            onChange={this.handleNumberChange}/>
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form> 
  )}
}

export default AddPersonForm;