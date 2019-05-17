import { addExpense, editExpense, removeExpense } from '../../actions/expenses'


test('Should setup remove expense action object', () => {
    const action = removeExpense({ id: '1234' })
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '1234'
    })
})

test('should edit expense action object', () => {
    const action = editExpense('2345', { note: 'new note value' })
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '2345',
        updates: {
            note: 'new note value'
        }
    })
})

test('Should add Expense action object', () => {
    const expenseData = {
        description: 'new item', 
        note: 'new value', 
        amount: 15, 
        createdAt: 100 
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test('Should add Expense action object', () => {
    const action = addExpense()
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '', 
            note: '', 
            amount: 0, 
            createdAt: 0 
        }
    })
})
