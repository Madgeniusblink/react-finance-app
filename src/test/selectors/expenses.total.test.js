import getExpensesTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'




test('should return 0 if no expenses', () => {
    const result = getExpensesTotal([])
    expect(result).toBe(0)
})

test('should correctly add up a single expense', () => {
    const result = getExpensesTotal([expenses[1]])
    expect(result).toBe(400)
})

test('should correctly add up a multiple expense', () => {
    const result = getExpensesTotal(expenses)
    expect(result).toBe(634.98)
})