const Rating: React.FC<{ rate: number }> = (props) => {
  return (
    <div className="flex justify-center items-center rounded-full w-full aspect-square bg-rating text-medium-grey font-bold">
      {props.rate}
    </div>
  );
};

export default Rating;
