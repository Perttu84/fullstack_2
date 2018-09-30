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
      <Osa part={osat[0].nimi} exercises={osat[0].tehtavia}/>
      <Osa part={osat[1].nimi} exercises={osat[1].tehtavia}/>
      <Osa part={osat[2].nimi} exercises={osat[2].tehtavia}/>
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