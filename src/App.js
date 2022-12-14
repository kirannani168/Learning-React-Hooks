import './App.css';
import Counter from './Components/Counter';
import HookCounter from './Components/HookCounter';
import HookCounterThree from './Components/HookCounterThree';
import HookCounterTwo from './Components/HookCounterTwo';
function App() {
  return (
    <div className="App">
      <h1>Learning React Hooks</h1>
      <Counter/>
      <hr/>
      <HookCounter/>
      <hr/>
      <HookCounterTwo/>
      <hr/>
      <HookCounterThree/>
      <hr/>
    </div>
  );
}

export default App;
