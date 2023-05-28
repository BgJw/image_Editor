import Workspace from './components/workspace/Workspace';
import Filters from './components/filters/Filters';
import ControlButtons from './components/controlButtons/ControlButtons';
import './App.css';

function App() {


  return (
    <div className="App">
      <header className='header'>
        <h1>Image Editor</h1>
      </header>
      <Filters />
      <Workspace />
      <ControlButtons />
    </div>
  );
}

export default App;
