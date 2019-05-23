import React from 'react'
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'
import ExpensesSummary from './ExpensesSummary'
const ExpenDashboardPage = () => (
    <div>
        <ExpensesSummary />
        <ExpenseListFilters />
        <ExpenseList />
    </div>
)

export { ExpenDashboardPage as default }