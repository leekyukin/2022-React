import logo from './logo.svg';
import './App.css';
import LifecycleEx from './component/R007_LifecycleEx';

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <LifecycleEx
      prop_value = 'FromApp.js'
      />
    </div>
  );
}

export default App;
