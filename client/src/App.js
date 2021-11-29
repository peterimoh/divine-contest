import BeforeFooter from "./components/layout/footer/BeforeFooter";
import Footer from "./components/layout/footer/Footer";
import Navbar from "./components/layout/nav/Navbar";
import TopNav from "./components/layout/nav/TopNav";



function App() {
  return (
    <div className="App">
      <TopNav />
      <Navbar />
      <BeforeFooter/>
      <Footer/>
    </div>
  );
}

export default App;
