import Home from "./components/Home";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans bg-white text-gray-800">
      <Header />
      <main className="container mx-auto px-6">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
