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

const Yhteensa = ({ osat }) => {
  return (
      <p>yhteensä {osat.reduce((sum,osa) => sum+osa.tehtavia,0)} tehtävää</p>
    )
}

const Kurssi = ({ kurssi }) => {
	return (
	 <div>
	 	<Otsikko name={kurssi.nimi} />
	 	<Sisalto osat={kurssi.osat} />
	 	<Yhteensa osat={kurssi.osat} />
	 </div>
	)
}

export default Kurssi;