import Navbar from "./Components/Navbar";
import Product from "./Components/Product";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Search from "./Components/Search";

function App()
{
    return(
        <div>
            <Navbar></Navbar>
            <Search></Search>
            <Product></Product>
            <About></About>
            <Footer></Footer>
        </div>
    );
}

export default App