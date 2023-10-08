import { useState } from "react";
import RateScreen from "./components/rateScreen";
import SubmitScreen from "./components/submitScreen";

function App() {
  const [show, setShow] = useState(false);
  const [rating, setRating] = useState<number | null>(null);

  const rateHandler = (rate: number) => {
    setRating(rate);
    setShow(false);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center p-6">
      <div className="radial-one w-full max-w-md px-6 pt-6 pb-8 rounded-2xl sm:p-8">
        {show && rating? (
          <SubmitScreen rating={rating}/>
        ) : (
          <RateScreen rating={rating} show={show} onSubmit={() => setShow(true)} onRate={rateHandler} />
        )}
      </div>
    </div>
  );
}

export default App;
