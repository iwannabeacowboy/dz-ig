import React from 'react'
import {AffairType} from './HW2';
import s from './Affair.module.css';

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: AffairType['_id']) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div className={s.affairRow}>
            {/*// show some text*/}
            <div className={s.affairName}>
                {props.affair.name}
            </div>

            <div className={[s.affairPriority,
                props.affair.priority === 'high' ? s.high :
                    props.affair.priority === 'middle' ? s.middle :
                        s.low].join(' ')}>

                [{props.affair.priority}]

            </div>

            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
