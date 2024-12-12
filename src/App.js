import Header from "./pages/Header";
import Main from "./pages/Main";
import Footer from "./pages/Footer";

function App() {
  return (
    <div className="mx-2 px-4 my-4 py-2 w-full flex flex-col items-center">
      <div className="bg-gradient-to-r from-pink-500 to-violet-500 h-2 w-9/12 shadow-2xl shadow-violet-500 blur-2xl"></div>
      <Header />
      <Main />
      <Footer />
      <div className="bg-gradient-to-r from-pink-500 to-violet-500 h-2 w-9/12 shadow-2xl shadow-violet-500 blur-2xl"></div>
      {/* <img
        alt=""
        role="presentation"
        width={1512}
        height={550}
        decoding="async"
        data-nimg={1}
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2"
        style={{ color: "transparent" }}
        // srcSet="/_next/image?url=%2Fimages%2Fgradient-background-top.png&w=1920&q=75 1x, /_next/image?url=%2Fimages%2Fgradient-background-top.png&w=3840&q=75 2x"
        src="https://img.freepik.com/free-photo/vivid-blurred-colorful-background_58702-2644.jpg?uid=R178106193&ga=GA1.1.796460803.1733607525&semt=ais_hybrid"
      />
      <img
        alt=""
        role="presentation"
        width={1512}
        height={447}
        decoding="async"
        data-nimg={1}
        className="absolute -bottom-6 left-1/2 -z-10 -translate-x-1/2"
        style={{ color: "transparent" }}
        // srcSet="/_next/image?url=%2Fimages%2Fgradient-background-bottom.png&w=1920&q=75 1x, /_next/image?url=%2Fimages%2Fgradient-background-bottom.png&w=3840&q=75 2x"
        // src="/_next/image?url=%2Fimages%2Fgradient-background-bottom.png&w=3840&q=75"
        src="https://img.freepik.com/free-photo/vivid-blurred-colorful-background_58702-2644.jpg?uid=R178106193&ga=GA1.1.796460803.1733607525&semt=ais_hybrid"
      /> */}
    </div>
  );
}

export default App;
