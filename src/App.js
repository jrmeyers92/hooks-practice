import React, { createContext } from "react";
import Child1 from "./Child1";

export const NameContext = createContext();

const App = ({ name }) => {
	return (
		<div>
			<NameContext.Provider value={name}>
				<Child1 />
			</NameContext.Provider>
		</div>
	);
};

App.defaultProps = {
	name: "Jake",
};

export default App;
