import budgetsService from '@/services/budgetsService';
import categoriesService from '@/services/categoriesService';
import transactionService from '@/services/transactionService';

const DashboardText = async () => {
  const transactions = await transactionService.getTransactions();
  const budget = await budgetsService.getBudget();
  const categories = await categoriesService.getCategories();

  return (
    <>
      {transactions.length > 0 || budget.length > 0 || categories.length > 0 ? (
        <h1>Your Dashboard</h1>
      ) : (
        <h1>Welcome to your Finance Dashboard</h1>
      )}
    </>
  );
};

export default DashboardText;
