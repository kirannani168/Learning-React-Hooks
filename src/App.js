import './App.css';
import Counter from './Components/Counter';
import FormTest from './Components/FormTest';
import HookCounter from './Components/HookCounter';
import HookCounterFour from './Components/HookCounterFour';
import HookCounterThree from './Components/HookCounterThree';
import HookCounterTwo from './Components/HookCounterTwo';
import LifeCycleTest from './Components/LifeCycleTest';
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
      <HookCounterFour/>
      <hr/>
      <FormTest/>
      <hr></hr>
      <LifeCycleTest/>
    </div>
  );
}

export default App;
