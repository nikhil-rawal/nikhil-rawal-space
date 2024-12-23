import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

const Body = () => {
  return (
    <div className="mx-2 px-4 my-4 py-4 w-full flex flex-col items-center">
      <div className="header fixed rounded-2xl content-center py-3 px-4 items-center shadow-sm isolate bg-background/10 saturate-100 backdrop-blur-[10px] transition-shadow z-20 w-full md:w-10/12 lg:w-9/12">
        <div className="bg-gradient-to-r from-pink-500 to-violet-500 dark:from-blue-500 dark:to-green-500 h-2 w-9/12 blur-2xl"></div>
        <Header />
      </div>
      <div className="flex flex-col items-center w-full">
        <Main />
        {/* <div className="flex flex-col items-center mx-auto py-8 footer rounded-2xl shadow-2xl isolate bg-background/10 saturate-100 backdrop-blur-[10px] transition-shadow z-10 w-full md:w-10/12 lg:w-9/12"> */}
        {/* <Footer /> */}
        {/* <div className="bg-gradient-to-l from-pink-500 to-violet-500 dark:from-blue-500 dark:to-green-500 h-2 w-9/12 blur-2xl"></div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Body;
