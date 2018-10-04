import React from 'react'

const Person = ({ person }) => {
  return (
  <table>
  <tbody>
    <tr>
    	<th>{person.name}</th>
    	<th>{person.number}</th>
    </tr>
  </tbody>
  </table>
  )
}

export default Person;