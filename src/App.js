
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AppHeader from './AppHeader';
import MicroFrontend from './MicroFrontend';
import About from './About';

const microAppOne = 'http://localhost:3001';
const microAppTwo = 'http://localhost:3002';


const microAppOneUI = ({ history }) => (
    <MicroFrontend history={history} host={microAppOne} name="micro app one" />
);
const microAppTwoUI = ({ history }) => (
    <MicroFrontend history={history} host={microAppTwo} name="micro app two" />
);

const App = () => (
    <BrowserRouter>
        <React.Fragment>
            <AppHeader />
            <Switch>
                <Route exact path="/one" component={microAppOneUI} />
                <Route exact path="/two" component={microAppTwoUI} />
                <Route exact path="/about" render={About} />
            </Switch>
        </React.Fragment>
    </BrowserRouter>
);

// function App() {
//     return (
//         <div className="App">
//             <header className="App-header">
//                 <img src={logo} className="App-logo" alt="logo" />
//                 <p>
//                     Edit <code>src/App.js</code> and save to reload.
//                 </p>
//                 <a
//                     className="App-link"
//                     href="https://reactjs.org"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                 >
//                     Learn React
//                 </a>
//             </header>
//         </div>
//     );
// }

export default App;