import transactionsService from '@/services/transactionService';

const TransactionPage = async () => {
  const transactions = await transactionsService.getTransactions();

  return (
    <div>
      <h1>Transactions</h1>

      <ul>
        {transactions.map(transaction => (
          <>
            <li key={transaction.id}>
              <p>{transaction.type === 'income' ? 'Income' : 'Expense'}</p>
              <p>{transaction.amount}</p>
              <p>{transaction.description}</p>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default TransactionPage;
