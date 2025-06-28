import Workspace from './components/workspace/Workspace';
import Filters from './components/filters/Filters';
import ControlButtons from './components/controlButtons/ControlButtons';
import './App.scss';
import AppLayout from './components/layout/AppLayout';

function App() {
  

  return (
    <div className="App" >
      <header className='header'>
        <h1>Image Editor</h1>
      </header>
      <AppLayout>
        <Filters />
        <Workspace />
        <ControlButtons />
      </AppLayout>
    </div>
  );
}

export default App;
