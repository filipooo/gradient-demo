import logo from './logo.svg';
import './App.css';
import GradientCircularProgress from './components/GradientCircularProgress';

function App() {
	return (
		<div className="App">
			<GradientCircularProgress
				id="bottom"
				startColor="white"
				middleColor="grey"
				endColor="white"
				progress={100}
				strokeWidth={1}
				size={295}
			/>
			<GradientCircularProgress
				id="top"
				startColor="green"
				middleColor="orange"
				endColor="red"
				emptyColor="transparent"
				progress={80}
				strokeWidth={2}
				size={300}
			/>
		</div>
	);
}

export default App;
