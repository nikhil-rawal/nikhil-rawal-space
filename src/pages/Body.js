import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

const Body = () => {
  return (
    <div className="mx-2 px-4 my-4 py-4 w-full flex flex-col items-center">
      <div className="bg-gradient-to-r from-pink-500 to-violet-500 dark:from-blue-500 dark:to-green-500 h-2 w-9/12 blur-2xl"></div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Body;
