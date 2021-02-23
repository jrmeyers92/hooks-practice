import React, { useContext } from "react";
import "./App.css";

const themes = {
	light: {
		foreground: "#000000",
		background: "#eeeeee",
	},
	dark: {
		foreground: "#ffffff",
		background: "#222222",
	},
};

const ThemeContext = React.createContext(themes.light);

function App() {
	return (
		<div className='App'>
			<ThemeContext.Provider value={themes.dark}>
				<h1>hello world</h1>
				<h2>the world is beautiful</h2>
			</ThemeContext.Provider>
		</div>
	);
}

export default App;
