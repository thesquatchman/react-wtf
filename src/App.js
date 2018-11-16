import React from 'react';
import { Provider } from 'store/Provider';
import { BrowserRouter } from 'react-router-dom';
import AppContainer from 'containers/AppContainer';

const App = () => {
	return (
		<Provider>
			<BrowserRouter>
				<AppContainer />
			</BrowserRouter>
		</Provider>
	);
};

export default App;
