import About from './About.jsx'
import ArrayExample from './Array.jsx'
import ArrayofObj from './ArrayofObj.jsx'
import Condition from './Condition.jsx'
import Filter from './Filter.jsx'
import Home from './Home.jsx'
import ObjectExample from './Object.jsx'
import './App.css'

function App() {
  return (
    <main className="marks-sheet">
      <Home />
      <div className="section-heading">
        <span>Learning snapshot</span>
        <span className="section-line" />
        <small>6 quick examples</small>
      </div>
      <div className="examples">
        <ArrayExample />
        <ArrayofObj />
        <ObjectExample />
        <Condition passed />
        <Filter />
        <About />
      </div>
    </main>
  )
}

export default App
