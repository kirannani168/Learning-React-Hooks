import './App.css';
import Counter from './Components/Counter';
import HookCounter from './Components/HookCounter';
function App() {
  return (
    <div className="App">
      <h1>Learning React Hooks</h1>
      <Counter/>
      <hr/>
      <HookCounter/>
      <hr/>
    </div>
  );
}

export default App;
