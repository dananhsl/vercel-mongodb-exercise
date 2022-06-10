import {Routes, Route} from 'react-router-dom';

import Exercise1 from './components/Exercise1';
import Exercise2 from './components/Exercise2';
import Footer from './components/Footer';
import {GlobalStyle} from './styles';

export default function App() {
	return (
		<>
			<GlobalStyle />
			<Routes>
				<Route path="/" element={<Exercise1 />} />
				<Route path="/archive" element={<Exercise2 />} />
			</Routes>
			<Footer />
		</>
	);
}
