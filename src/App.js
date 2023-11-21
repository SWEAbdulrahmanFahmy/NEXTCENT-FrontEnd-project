import Feature2 from "./component/Feature2";
import Feature4 from "./component/Feature4/Feature4";
import Feature5 from "./component/Feature5";
import Features1 from "./component/Features1";
import Features3 from "./component/Features3";
import Header from "./component/Header";
import Client from "./component/client/Client";
import Landing from "./component/landing/Landing";
import Footer from "./component/Footer";
function App() {



  return (
    
    <div className="App">
      <Header/>
      <Landing/>
      <Client/>
      <Features1/>
      <Feature2/>
         <Feature4/>
      <Features3/>
      <Feature5/>
      <Footer/>
    </div>
  );
}

export default App;
