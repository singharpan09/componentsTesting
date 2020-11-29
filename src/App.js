
import { useRef } from 'react';
import './App.css';
import RefsComponent from './components/Refs/RefsComponent'
import NestedArraypagination from './components/pagination/nestedArraypagination'

function App() {
 
  return (
    <div className="App">
  <RefsComponent/>
  <NestedArraypagination/>
    </div>
  );
}

export default App;
