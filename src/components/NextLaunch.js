import Counter from "./Counter";

const NextLaunch = ({ nextLaunch }) => {
  return (
    <div>
      Next Launch : <span>{nextLaunch.name}</span>
      <Counter launch={nextLaunch.date_unix} />
    </div>
  );
};

export default NextLaunch;
