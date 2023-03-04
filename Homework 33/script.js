const time= {
    hours : Number(prompt('Enter the number of hours')),
    min : Number(prompt('Enter the number of minutes')),
    sec : Number(prompt('Enter the number of seconds')),
};

function ShowTime(time) {
     let str=time.hours + 'h ' + time.min + 'min ' + time.sec + 'sec'
     alert(str)
    /*Функція, що виводить час*/
}

function Time_to_sec(time) {
     return time.hours*3600+time.min*60+time.sec
/*Допоміжна функція, що переводить час у секунди*/
}

function SecIncr(time, incr) {
    let new_time = Time_to_sec(time)+incr
    time.hours=(Math.floor(new_time/3600))%24
    time.min=Math.floor((new_time%3600)/60)
    time.sec=(new_time%3600)%60
    return time
    /*Функція, що змінює час на задану кількість секунд */
}

function MinIncr(time, incr) {
    let new_time = Time_to_sec(time)+incr*60
    time.hours=(Math.floor(new_time/3600))%24
    time.min=Math.floor((new_time%3600)/60)
    time.sec=(new_time%3600)%60
    return time
    /*Функція, що змінює час на задану кількість хвилин*/
}

function HoursIncr(time, incr) {
    let new_time = Time_to_sec(time)+incr*3600
    time.hours=(Math.floor(new_time/3600))%24
    time.min=Math.floor((new_time%3600)/60)
    time.sec=(new_time%3600)%60
    return time
    /*Функція, що змінює час на задану кількість годин*/
}

ShowTime(time)   /*Виводить початковий час до довання інкременту*/

/*alert(Time_to_sec(time))  використовувалося для перевірки коректності роботи функції*/

const incr={
    h: Number(prompt("Enter how much hours in increment")),
    m: Number(prompt("How much minutes in increment")),
    s: Number(prompt("How much seconds in increment")),
}

HoursIncr(time, incr.h)
MinIncr(time, incr.m)
SecIncr(time, incr.s)
ShowTime(time)  /*Виводить час після додавання інкременту*/


















