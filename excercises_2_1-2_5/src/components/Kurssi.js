import React from 'react'

const Otsikko = ({ name }) => {
  return (
      <h1>{name}</h1>
    )
}
const Osa = ({ part, exercises }) => {
  return (
      <p>{part} {exercises}</p>
    )
}

const Sisalto = ({ osat }) => {
  return (
  	<div>
  	 {osat.map((osa,i)=><Osa key={i} part={osa.nimi} exercises={osa.tehtavia}/>)}
    </div>
    )
}

const Kurssi = ({ kurssi }) => {
	return (
	 <div>
	 	<Otsikko name={kurssi.nimi} />
	 	<Sisalto osat={kurssi.osat} />
	 </div>
	)
}

export default Kurssi;