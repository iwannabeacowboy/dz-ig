import {UserType} from '../HW8';

type ActionType = {
    type: string
    payload: string | number
}

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            // need to fix
            return [...state].sort((a, b) => {
                return action.payload === 'up' ? a.age - b.age : b.age - a.age
            })
        }
        case 'check': {
            // need to fix
            return state.filter(el => el.age > action.payload)
        }
        default:
            return state
    }
}