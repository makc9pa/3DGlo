const timer = (deadline) => {
    const timerDays = document.getElementById('timer-days');
    const timerHours = document.getElementById('timer-hours');
    const timerMinutes = document.getElementById('timer-minutes');
    const timerSeconds = document.getElementById('timer-seconds');

    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime()
        let dateNow = new Date().getTime()
        let timeRemaining = Math.floor((dateStop - dateNow) / 1000)
        let days = Math.floor(timeRemaining / 60 / 60 / 24)
        let hours = Math.floor((timeRemaining / 60 / 60) % 24)
        let minutes = Math.floor((timeRemaining / 60) % 60)
        let seconds = Math.floor(timeRemaining % 60)

        return { timeRemaining, days, hours, minutes, seconds }
    }

    const updateClock = () => {
        let getTime =  getTimeRemaining()
        if (getTime.timeRemaining >= 0) {

        if (getTime.days <= 9) {
            timerDays.textContent = '0' + getTime.days
        } else {
            timerDays.textContent = getTime.days 
        }

        if (getTime.hours <= 9) {
            timerHours.textContent = '0' + getTime.hours
        } else {
            timerHours.textContent = getTime.hours 
        }
        
        if (getTime.minutes <= 9) {
            timerMinutes.textContent = '0' + getTime.minutes
        } else {
            timerMinutes.textContent = getTime.minutes 
        }

        if (getTime.seconds <= 9) {
            timerSeconds.textContent = '0' + getTime.seconds
        } else {
            timerSeconds.textContent = getTime.seconds 
        }
        // console.log(getTime.timeRemaining)
        if (getTime.timeRemaining <= 0) {
            clearInterval(idInterval)
        }
        }
    }

    const idInterval = setInterval(() => {
        updateClock()
    }, 1000)
}

export default timer;