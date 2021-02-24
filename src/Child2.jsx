import React, { useContext } from "react";
import { NameContext } from "./App";

const Child2 = () => {
	const name = useContext(NameContext);
	return (
		<div>
			<h1>{name} from child two</h1>
		</div>
	);
};

export default Child2;
