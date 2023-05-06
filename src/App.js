
import Navbar from "./partials/Navbar";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../node_modules/flowbite/dist/flowbite";
import Subheader from "./partials/Subheader";
import Herobanner from "./components/Herobanner";

function App() {
  return (
    <>
    <div>
    <Navbar/>
    <Subheader/>
    <Herobanner/>
      {/* <Routes>
        <Route exact path='/' element={<Index />} />


      </Routes> */}
      
    
      </div>
    </>

  );
}

export default App;
