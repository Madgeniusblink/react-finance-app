import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../actions/filters'
import moment from 'moment'

test('Should generate set start date action object', () => {
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})

test('Should generate set end date action object', () => {
    const action = setEndDate(moment(7))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(7)
    })
})


test('Set text Filter', () => {
    const filter = setTextFilter('new')
    expect(filter).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'new'
    })
})

test('Set text Filter', () => {
    const filter = setTextFilter()
    expect(filter).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})

test('Sort By Date', () => {
    const filter = sortByDate()
    expect(filter).toEqual({
        type: 'SORT_BY_DATE'
    })
})

test('Sort By Amount', () => {
    expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT' })
})