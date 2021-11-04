import './App.css';
import SideBar from './components/SideBar';
import PortfolioContainer from './components/PortfolioContainer';

function App() {
	return (
		<div className="App">
			<div className="background"></div>
			<SideBar />
			<PortfolioContainer />
		</div>
	);
}

export default App;
