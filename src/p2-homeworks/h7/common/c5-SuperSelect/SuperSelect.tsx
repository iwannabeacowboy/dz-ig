import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import s from './SuperSelect.module.css'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        className,
        ...restProps
    }
) => {
    const mappedOptions: any[] = options ? options.map((el, i) => (
        <option
            key={el + '-' + i}
            value={el}
            className={s.option}
        >
            {el}
        </option>
    )) : []; // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        // onChange, onChangeOption
        onChange && onChange(e)

        onChangeOption && onChangeOption(e.currentTarget.value)
    }

    const finalClassName = className ? `${className} ${s.select}` : s.select

    return (
        <select
            onChange={onChangeCallback}
            className={finalClassName}
            {...restProps}
        >
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
