const convertTo24Hour=(timeStr)=> {
    const [time, modifier] = timeStr.split(' ');
    let [hours, minutes] = time.split(':');

    if (modifier === 'PM' && hours !== '12') {
        hours = parseInt(hours, 10) + 12;
    }
    if (modifier === 'AM' && hours === '12') {
        hours = '00';
    }

    return `${hours}:${minutes}`;
}


const time12 = "02:30 PM";
const time24 = convertTo24Hour(time12);
console.log(time24); 
