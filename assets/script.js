console.log(dayjs())
// added styling to improve user experience
$('body').attr('style', 'background: lightslategrey;')
$('header').attr('style', 'background-color: hsla(50, 33%, 25%, .75);')
$('.hour').attr('style', 'background-color: orange; border-radius: 15px 0 0 15px;')
// main function
$(() => {
    // get previously saved content from local storage
    $('.time-block').each(function() {
        const key = $(this).attr('id')
        const value = localStorage.getItem(key)
        $(this).children('.description').val(value)
    })
    // get current hour from  the Day.js API
    const currentHour = dayjs().format('H')
    // save content/text to the localStorage
    saveContent = () => {
        $('.saveBtn').on('click', function() {
            const key = $(this).parent().attr('id')
            const value = $(this).siblings('.description').val()
            localStorage.setItem(key, value)
        })}
    // add color coding in regards to the three different time phases
    colorCode = () => {
        $('.time-block').each(function() {
            const blockHour = parseInt(this.id)
            if (blockHour == currentHour) {
                $(this).addClass('present')
            } else if (blockHour < currentHour) {
                $(this).addClass('past')
            } else {
                $(this).addClass('future')
            }
        })}
    // using Day.js the time is formatted and attached to DOM element
    // interval set to 1 second to update the date .... tried per hour and basically shows date once per hour
    time = () => {
        const dateElement = $('#currentDay')
        const currentDate = dayjs().format('dddd, MMMM D')
        dateElement.text(currentDate)
        }
        setInterval(time, 60000)
        // call the main functions for text and color and time
        time()
        saveContent()
        colorCode()
})