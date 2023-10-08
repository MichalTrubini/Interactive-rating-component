import starIcon from "./assets/star.svg";
import Rating from "./components/rating";

function App() {
  const rates = [1, 2, 3, 4, 5];

  return (
    <div className="w-full h-screen flex justify-center items-center p-6">
      <div className="radial-one w-full max-w-lg px-6 pt-6 pb-8 rounded-2xl sm:p-8">
        <img className="sm:w-12" src={starIcon} alt="star" />
        <h1 className="mt-4 mb-2.5 text-2xl text-left text-white sm:mt-8 sm:text-3xl">
          How did we do?
        </h1>
        <p className="text-par text-sm/5 mb-6 sm:text-base/6">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div className="flex justify-between gap-4 mb-8 sm:gap-5 sm:mb-6">
          {rates.map((rate) => (
            <Rating rate={rate} />
          ))}
        </div>
        <button className="button bg-orange text-white text-center w-full py-3 uppercase font-bold tracking-widest">Submit</button>
      </div>
    </div>
  );
}

export default App;
