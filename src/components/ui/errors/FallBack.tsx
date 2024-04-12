interface Props {
  error: string;
}

const FallBack = ({ error }: Props) => {
  return (
    <div className="p-10 drop-shadow rounded-md">
      <h1>
        <strong>{error}</strong>
      </h1>
      <div className="flex gap-8 justify-between py-5">
        <button className="bg-secondary text-white">
          <a href="">BACK</a>
        </button>
        <button className="bg-primary text-white">
          <a href="/">HOME</a>
        </button>
      </div>
    </div>
  );
};

export default FallBack;
