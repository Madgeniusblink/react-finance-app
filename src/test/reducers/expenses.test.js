import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('default get set', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual([])
})

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
})

test('Should not remove expenses if id not found',  () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

// should add an expense

test('should add an expense', () => {
    const expense = {
        id: '89',
        description: 'Credit Card 2',
        note: '',
        amount: 30.98,
        createdAt: 2000
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses, expense])
})


// Should edit an expense
test('Should edit an expense',  () => {
        const amount = 1245
        const action = {
            type: 'EDIT_EXPENSE',
            id: expenses[1].id,
            updates: {
                amount
            }
            
            
            
        }
        const state = expensesReducer(expenses, action)
        expect(state[1].amount).toBe(amount)
})

// should not edit an expense if expense not found
test('should not edit an expense if expense not found',  () => {
    const amount = 1245
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-9',
        updates: {
            amount
        }
        
        
        
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})