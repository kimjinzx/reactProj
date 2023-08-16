import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';


// function App() {

//   let num = 1;
//   function numUp(){
//     num += 1;
//     console.log(num);
//   }
//   return (
//     <div className="App">
//       <header className="App-header">
//         <div>{num}</div>
//         <button onClick={() => {numUp()}}>버튼</button>
//       </header>
//     </div>
//   );
// }

// export default App;

// function App() {
//   let [num, setNum] = useState(1);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <div>{num}</div>
//         <button onClick={() => {setNum(num + 1)}}>버튼</button>
//       </header>
//     </div>
//   );
// }

// export default App;

function App() {
  let [num, setNum] = useState(1);

  setTimeout(() => {setNum(num += 1)},1000);
    

  return (
    <div className="App">
      <header className="App-header">
        <div>{num}</div>
      </header>
    </div>
  );
}

export default App;

