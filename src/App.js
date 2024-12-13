import Body from "./pages/Body";

function App() {
  return (
    <div className="flex flex-col w-full h-full text-black dark:text-white bg-white dark:bg-black">
      <div className="flex flex-col items-center mx-auto w-full md:w-10/12 lg:w-8/12">
        <Body />
      </div>
    </div>
  );
}

export default App;
