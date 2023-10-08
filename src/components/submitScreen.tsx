import payment from "../assets/payment.png";

const SubmitScreen:React.FC<{rating:number}> = (props) => {
  return (
    <>
      <img src={payment} alt="payment" className="w-36 m-auto sm:w-40" />
      <div className="mt-6 mb-7 flex justify-center sm:mt-8 sm:mb-9">
        <p className="bg-rating inline-block rounded-3xl text-orange text-sm px-5 pt-1 pb-0.5 ">
          You selected {props.rating} out of 5
        </p>
      </div>
      <h2 className="text-center text-white text-2xl font-bold mb-2.5 sm:mb-1">Thank you!</h2>
      <p className="text-center text-light-grey text-sm/6 sm:text-medium">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </>
  );
};

export default SubmitScreen;
