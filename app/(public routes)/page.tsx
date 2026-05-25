'use client';

import getTransactions from '@/services/transactionService';

const Home = () => {
  const handleClick = async () => {
    const res = await getTransactions();

    console.log(res);
  };

  return (
    <div>
      <h1>Home</h1>

      <button type="button" onClick={handleClick}>
        get transactions
      </button>
    </div>
  );
};

export default Home;
