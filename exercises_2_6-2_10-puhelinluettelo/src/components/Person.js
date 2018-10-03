import React from 'react'

const Person = ({ person }) => {
  return (
    <tr>
    	<th>{person.name}</th>
    	<th>{person.number}</th>
    </tr>
  )
}

export default Person;