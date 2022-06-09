import React, { useState } from "react"

function PorkersTile({ hogs }) {

    const information = hogs.map((hog) => <li key={hog.name}>Specialty: {hog.specialty} {hog.greased} Weight: {hog.weight}</li>)
    const [display, setDisplay] = useState(false)

    function handleClick() {
        setDisplay(display = !display)
    }

    const filterTile = hogs.map((hog) => <div><h1 key={hog.name}> {hog.name}</h1>
        <img src={hog.image} key={hog.name} />
        <button onClick={handleClick}>{display ? "Show Information" : "Hide Information"}</button>
    </div>
    )

    const style = { "display": "none" }

    return (
        <div className="ui eight wide column">
            {filterTile}
            <div >

                {/* <button onClick={handleClick}>{display ? "Show Information" : "Hide Information"}</button> */}


                <div style={display ? style : null}>
                    {information}
                </div>
            </div>
        </div >
    )

}

export default PorkersTile