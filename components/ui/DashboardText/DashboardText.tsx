import budgetsService from '@/services/budgetsService';
import categoriesService from '@/services/categoriesService';
import transactionService from '@/services/transactionService';

import css from './DashboardText.module.scss';

const DashboardText = async () => {
  const transactions = await transactionService.getTransactions();
  const budget = await budgetsService.getBudget();
  const categories = await categoriesService.getCategories();

  return (
    <>
      {transactions.length > 0 || budget.length > 0 || categories.length > 0 ? (
        <section className={css.section}>
          <div className={css.container}>
            <h1>Your Dashboard</h1>
          </div>
        </section>
      ) : (
        <section className={css.section}>
          <div className={css.container}>
            <h1>Welcome to your Finance Dashboard</h1>
          </div>
        </section>
      )}
    </>
  );
};

export default DashboardText;
