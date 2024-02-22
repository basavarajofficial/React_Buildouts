/* eslint-disable react/prop-types */

function FlagsCard({flag}) {

  return (
    <div className="card">
        <img src={flag?.flags?.svg} alt={flag.name.common}/>
        <h4 className="title"> {flag.name.common} </h4>
    </div>
  )
}

export default FlagsCard