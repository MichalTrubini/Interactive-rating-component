import Rating from "./rating";
import starIcon from "../assets/star.svg";

const RateScreen: React.FC<{ rating:number | null, show:boolean, onSubmit: () => void, onRate: (rate: number) => void }> = (props) => {
  const rates = [1, 2, 3, 4, 5];

  return (
    <>
      <img className="sm:w-12" src={starIcon} alt="star" />
      <h2 className="mt-4 mb-2.5 text-2xl text-left text-white sm:mt-8 sm:text-3xl">
        How did we do?
      </h2>
      <p className="text-light-grey text-sm/5 mb-6 sm:text-medium/6">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="flex justify-between gap-4 mb-8 sm:gap-5 sm:mb-6">
        {rates.map((rate, index) => (
          <Rating rating={props.rating} rate={rate} onRate={props.onRate} key={index}/>
        ))}
      </div>
      {props.show && !props.rating && <p className="text-red-600 mb-2 text-sm">Please select rating</p>}
      <button
        className="button bg-orange text-white text-center w-full pt-3 pb-2.5 uppercase font-bold tracking-widest hover:bg-white hover:text-orange"
        onClick={props.onSubmit}
      >
        Submit
      </button>
    </>
  );
};

export default RateScreen;
