import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (event: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {

    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') addUser()
    }

    // const inputContainer = error ? s.error + ' ' + s.container : s.container
    const inputContainer = `${s.container} ${error && s.error}` // need to fix with (?:)

    return (
        <div className={inputContainer}>
            <label>Name *</label>
            <input
                value={name}
                onChange={setNameCallback}
                onKeyPress={onKeyPressHandler}
            />
            <button onClick={addUser}>add</button>
            <span>{totalUsers}</span>
            <div className={s.errorMessage}>{error}</div>
        </div>
    )
}

export default Greeting
