import * as Loader from "react-loader-spinner";

const Spinner = ({ message }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <Loader.CirclesWithBar
        type="Circles"
        color="#00bfff"
        height={50}
        width={200}
        className="m-5"
      />

      <div className="text-lg text-center px-2">{message}</div>
    </div>
  );
};

export default Spinner;
