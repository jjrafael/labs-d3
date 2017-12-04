import React, { Component } from 'react'
import BarChart from './BarChart'
class App extends Component {
   render() {
      return (
         <div className="App">
            <div className="App-header">
               <h2>d3ia dashboard</h2>
            </div>
            <div>
               <BarChart data={[5, 10, 1, 3, 6, 19, 12, 2, 5, 5, 10, 17, 20]} size={[500, 500]} />
            </div>
         </div>
      )
   }
}
export default App
