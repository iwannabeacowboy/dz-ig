import React from 'react'
import Message from "./Message";
import AlternativeMessage from "./AlternativeMessage";

const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Some Name',
    message: 'some text',
    time: '22:00',
}

const messageDataAlt = {
    avatar: 'https://hiphop4real.com/wp-content/uploads/2018/03/h2CyMlWg94E.jpg',
    name: 'Кровосток',
    message: 'Я родился в Москве, в семидесятом.\n' +
        'На краю города, моча рано ударила в голову:\n' +
        'В четыре активно ругался матом.\n' +
        'В детском саду девочки впервые показали мне п*зду.\n' +
        'Потом школа, вонючая форма.\n' +
        'Драки, клей - так я становился сильней.\n' +
        'Воровал деньги в раздевалке, в восемь начал курить.\n' +
        'В одиннадцать кинул первую палку, забил на родителей.\n' +
        'Стал пропадать с друзьями на свалке.\n' +
        'Кирзачи и телага.\n' +
        'Брежнев сдох, стал заходить в качалку.\n' +
        'Купил боксёрские перчатки, сп*здили в школе.\n' +
        'Нашёл, п*здец был Витьку и Коле.\n' +
        'Линолеум, пятна крови, поставили на учёт.\n' +
        'Ночью взломал бытовку.\n' +
        'От пацанов почёт, время течёт.',
    time: '04:20',
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            <AlternativeMessage
                avatar={messageDataAlt.avatar}
                name={messageDataAlt.name}
                message={messageDataAlt.message}
                time={messageDataAlt.time}/>
            <hr/>
        </div>
    )
}

export default HW1
