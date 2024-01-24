console.log(dayjs())

$(() => {

const currentHour = dayjs().format('H')

hourlyColor = () => {
    $('.time-block').each(function() {
        const blockHour = parseInt(this.id)
        $(this).toggleClass('past', blockHour < currentHour)
        $(this).toggleClass('present', blockHour === currentHour)
        $(this).toggleClass('future', blockHour > currentHour)
    })}

textEntry = () => {
    $('.saveBtn').on('click', function() {
        const key = $(this).parent().attr('id')
        const value = $(this).siblings('.description').val()
        localStorage.setItem(key, value)
    })}

refreshColor = () => {
    $('.time-block').each(function() {
        const blockHour = parseInt(this.id)
        if (blockHour == currentHour) {
            $(this).removeClass('past future').addClass('present')
        } else if (blockHour < currentHour) {
            $(this).removeClass('future present').addClass('past')
        } else {
            $(this).removeClass('past present').addClass('future')
        }
    })}
    $('.time-block').each(function() {
        const key = $(this).attr('id')
        const value = localStorage.getItem(key)
        $(this).children('.description').val(value)
    })

updateTime = () => {
    const dateElement = $('#currentDay')
    const currentDate = dayjs().format('dddd, MMMM D')
    dateElement.text(currentDate)
    };setInterval(updateTime, 1000)

    hourlyColor();textEntry();refreshColor()
})