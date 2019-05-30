import { login, logout } from '../../actions/auth'

test('should generate action object login', () => {
    const uid = 'abc123'
    const action = login(uid)
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    })
})

test('should generate action object logout', () => {
    const action = logout()
    expect(action).toEqual({
        type: 'LOGOUT'
    })
})