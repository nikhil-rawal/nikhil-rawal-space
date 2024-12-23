import Body from "./pages/Body";

function App() {
  return (
    <div className="flex w-full h-full min-h-screen bg-white dark:bg-black text-black dark:text-white overflow-x-hidden">
      <div className="flex items-center mx-auto w-full md:w-10/12 lg:w-9/12">
        <Body />
      </div>
    </div>
  );
}

export default App;
