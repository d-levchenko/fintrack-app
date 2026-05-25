'use client';

import transactionService from '@/services/transactionService';
import type { CreateTransactionInput } from '@/types/transaction';

const Home = () => {
  const handleTransactionsList = async () => {
    const res = await transactionService.getTransactions();

    console.log(res);
  };

  const handleTransactionCreate = async () => {
    const transaction: CreateTransactionInput = {
      amount: 100,
      type: 'income',
      description: 'test',
    };

    await transactionService.createTransaction(transaction);

    console.log(transaction);
  };

  const handleTransactionDelete = async () => {
    await transactionService.deleteTransaction(
      '8a296d3c-91bd-4f48-a6ae-26fe000e571d',
    );
  };

  return (
    <div>
      <h1>Home</h1>

      <button type="button" onClick={handleTransactionsList}>
        get transactions
      </button>

      <button type="button" onClick={handleTransactionCreate}>
        create transaction
      </button>

      <button type="button" onClick={handleTransactionDelete}>
        delete transaction
      </button>

      <button type="button">update transaction</button>
    </div>
  );
};

export default Home;
