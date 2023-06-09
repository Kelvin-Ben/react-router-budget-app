import React from "react";
import { useLoaderData } from "react-router-dom";
import { deleteItem, fetchData } from "../helpers";
import Table from "../components/Table";
import { toast } from "react-toastify";

export async function expensesLoader() {
  const expenses = fetchData("expenses");
  return { expenses };
}
export async function expensesAction({ request }) {
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);
  if (_action === "deleteExpense") {
    try {
      // create an expense
      deleteItem({
        key: "expenses",
        id: values.expenseId,
      });
      return toast.success('Expense deleted!');
    } catch (e) {
      throw new Error("There was a problem deleting your expense");
    }
  }
}
const ExpensesPage = () => {
  const { expenses } = useLoaderData();

  return (
    <div className="grid-lg">
      <h2>All Expenses</h2>
      {expenses && expenses.length > 0 ? (
        <div className="grid-md">
          <h2>
            Recent Expenses <small>({expenses.length} total)</small>
          </h2>
          <Table expenses={expenses} />
        </div>
      ) : (
        <p>No expenses to show</p>
      )}
    </div>
  );
};

export default ExpensesPage;
