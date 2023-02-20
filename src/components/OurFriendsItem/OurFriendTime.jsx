import { TimeItem, TimeSpan } from "./OurFriendItem.styled"

export const OurFriendTime = ({ days }) => {
    const { day, isOpen, from, to } = days

    return <>
        { isOpen && <TimeItem><TimeSpan>{day}</TimeSpan>{from}-{to}</TimeItem>} 
        {!isOpen && day && <TimeItem><TimeSpan>{day}</TimeSpan> closed</TimeItem>} 
        { !isOpen && !day && <TimeItem>Find us online</TimeItem>} 
        
    </>
}