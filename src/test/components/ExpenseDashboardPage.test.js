// react-test-renderer
import React from 'react'
import { shallow } from 'enzyme'
import ExpenDashboardPage from '../../components/ExpenDashboardPage'

test('should render Expense Dashboard Board Page', () => {
    const wrapper = shallow(<ExpenDashboardPage />)
    expect(wrapper).toMatchSnapshot()
})
