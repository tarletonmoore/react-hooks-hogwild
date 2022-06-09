import React from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import PorkersTile from "./PorkersTile";

function App() {
	return (
		<div className="App">
			<Nav />
			<div className="ui grid container">
				<PorkersTile hogs={hogs} />
			</div>
		</div>
	);
}

export default App;
