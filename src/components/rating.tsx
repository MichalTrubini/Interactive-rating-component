const Rating: React.FC<{ rate: number }> = (props) => {
  return (
    <div className="flex justify-center items-center rounded-full w-full aspect-square bg-rating text-medium-grey font-bold text-sm sm:text-base">
      <p className="pt-1">{props.rate}</p>
    </div>
  );
};

export default Rating;
