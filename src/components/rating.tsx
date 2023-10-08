const Rating: React.FC<{ rate: number; onRate: (rate: number) => void, rating:number | null }> = (
  props
) => {
  return (
    <div
    style={props.rating ===props.rate ? {backgroundColor: "#7C8798", color: "white"} : undefined}
      className="flex justify-center items-center rounded-full w-full aspect-square bg-rating text-medium-grey font-bold text-sm sm:text-base hover:text-white hover:cursor-pointer hover:bg-orange"
      onClick={() => {
        props.onRate(props.rate);
      }}
    >
      <p className="pt-1">{props.rate}</p>
    </div>
  );
};

export default Rating;
