import logo from './logo.svg';
import './App.css';
import LifecycleEx from './component/R006_LifecycleEx';

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <LifecycleEx
      props_value = 'FromApp.js'
      />
    </div>
  );
}

export default App;
