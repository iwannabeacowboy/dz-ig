import React, {useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'
import s from './HW6.module.css'

function HW6() {
    const [value, setValue] = useState<string>('')

    const save = () => {
        saveState<string>('editable-span-value', value)
    }
    const restore = () => {
        setValue(restoreState<string>('editable-span-value', ''))
    }

    return (
        <div>
            <hr/>
            homeworks 6

            {/*should work (должно работать)*/}
            <div className={s.editableSpan}>
                <SuperEditableSpan
                    value={value}
                    onChangeText={setValue}
                    spanProps={{children: value ? undefined : 'enter text...', className: s.bold}}
                />
            </div>
            <div className={s.buttonsBlock}>
                <SuperButton onClick={save} className={s.marginRight}>save</SuperButton>
                <SuperButton onClick={restore}>restore</SuperButton>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperEditableSpan/>*/}
            <hr/>
        </div>
    )
}

export default HW6
