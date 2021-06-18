import React from 'react';
import Actions from "./containers/actions";
import { BrowserRouter as Router} from "react-router-dom";

const App = () => {
	return (
		<Router>
			<Actions />
		</Router>
	);
}

export default App;