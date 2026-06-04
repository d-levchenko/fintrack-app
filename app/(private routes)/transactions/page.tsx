import transactionsService from '@/services/transactionService';

import css from './Transaction.module.scss';

const TransactionPage = async () => {
  const transactions = await transactionsService.getTransactions();

  return (
    <section className={css.section}>
      <div className={css.container}>
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
    </section>
  );
};

export default TransactionPage;
