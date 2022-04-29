import React from 'react'
import s from './Greeting.module.css'
import SuperInputText from '../h4/common/c1-SuperInputText/SuperInputText';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (value: string) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {

    // const inputContainer = error ? s.error + ' ' + s.container : s.container
    const fullInputContainer = `${s.container} ${error && s.error}` // need to fix with (?:)

    return (
        <div className={fullInputContainer}>
            <div className={s.inputContainer}>
                <label>Name *</label>
                <SuperInputText
                    value={name}
                    onChangeText={setNameCallback}
                    onEnter={addUser}
                    error={error}
                />
            </div>
            <div>
                <SuperButton onClick={addUser}>add</SuperButton>
                <span>{totalUsers}</span></div>
        </div>
    )
}

export default Greeting
