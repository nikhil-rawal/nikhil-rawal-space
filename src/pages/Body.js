import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

// const Body = () => {
//   return (
//     <div className="mx-2 px-4 my-4 py-4 w-full flex flex-col items-center">
//       <div className="bg-gradient-to-r from-pink-500 to-violet-500 dark:from-blue-500 dark:to-green-500 h-2 w-9/12 blur-2xl"></div>
//       <Header />
//       <Main />
//       <Footer />
//       <div className="bg-gradient-to-l from-pink-500 to-violet-500 dark:from-blue-500 dark:to-green-500 h-2 w-9/12 blur-2xl"></div>
//     </div>
//   );
// };

// export default Body;

const Body = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Top Gradient Bar */}
      <div className="bg-gradient-to-r from-pink-500 to-violet-500 dark:from-blue-500 dark:to-green-500 h-2 w-9/12 blur-2xl mx-auto"></div>

      {/* Header Component */}
      <Header />

      {/* Main Content (takes up the remaining height using flex-grow) */}
      <main className="flex-grow z-10 w-full flex justify-center">
        <Main />
      </main>

      {/* Footer Component at the bottom */}
      <footer className="w-full z-20 relative">
        <Footer />
      </footer>

      {/* Bottom Gradient Bar */}
      <div className="bg-gradient-to-l from-pink-500 to-violet-500 dark:from-blue-500 dark:to-green-500 h-2 w-9/12 blur-2xl mx-auto"></div>
    </div>
  );
};

export default Body;
