import Header from "./pages/Header";
import Main from "./pages/Main";
import Footer from "./pages/Footer";

function App() {
  return (
    <div className="mx-2 px-4 my-4 py-4 w-full flex flex-col items-center">
      <div className="bg-gradient-to-r from-pink-500 to-violet-500 h-2 w-9/12 shadow-2xl shadow-violet-500 blur-xl"></div>
      <Header />
      <Main />
      <Footer />
      <div className="bg-gradient-to-l from-pink-500 to-violet-500 h-2 w-9/12 shadow-2xl shadow-violet-500 blur-xl"></div>
    </div>
  );
}

export default App;
