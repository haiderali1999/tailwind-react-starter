const Grid = () => {
  return (
    <div className="grid xsm:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 mt-2">
      {[1, 2, 3, 4, 5].map((no) => (
        <div className="text-secondary bg-primary dark:bg-white p-2 rounded-s-full">{no}</div>
      ))}
    </div>
  );
};

export default Grid;
