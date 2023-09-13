import NavigationBar from "./components/Navigation";
import Home from "./components/Home";
import Skills from "./components/Skills";
import './App.css';

function App() {
  return (
    <>

      <div>
        <NavigationBar></NavigationBar>
      </div>
      <div>
        <Home></Home>
      </div>
      <div>
        <Skills></Skills>
      </div>
      {/* // </div> */}
    </>

  );
}

export default App;
