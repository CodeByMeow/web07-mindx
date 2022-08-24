const Transaction = () => {
  return (
    <div className="container p-4 flex justify-between ">
      <div className="flex-shrink-0 pr-4">
        <img
          src="https://source.unsplash.com/random"
          alt=""
          className="object-cover w-12 h-12 rounded-full"
        />
      </div>
      <div className="flex-1 pb-4 border-b-2 border-solid">
        <h4>Pets</h4>
        <p className="text-5D text-sm">10:09AM</p>
      </div>
      <div className="text-right pb-4  border-b-2 border-solid">
        <p className="text-06">$3.35</p>
        <p className="text-5D text-sm">$383.00</p>
      </div>
    </div>
  );
};

export default Transaction;
