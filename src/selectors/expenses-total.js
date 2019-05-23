const getExpensesTotal =  (expenses) => {
    return expenses
        .map((expenses) => expenses.amount)
        .reduce((sum, value) => {
            return sum + value
        }, 0)
}

export default getExpensesTotal