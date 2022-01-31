const inputCheck = () => {
    const calcInputs = document.querySelectorAll('.calc-item')
    const nameInput = document.querySelectorAll('.form-name')
    const textInput = document.querySelector('.mess')
    const emailInputs = document.querySelectorAll('.form-email')
    const phoneInputs = document.querySelectorAll('.form-phone')

    calcInputs.forEach(input => {
        input.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^\d.]/g, '')
        })
    })

    nameInput.forEach(input => {
        input.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^а-яА-Я-\s]/g, '')
        })
    })

    textInput.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^а-яА-Я-\s\d().,!?:";'_-]/g, '')
    })

    emailInputs.forEach(input => {
        input.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^\w-@_.!~*']/g, '')
        })
    })

    phoneInputs.forEach(input => {
        input.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^\d()+-]/g, '')
        })
    })
}

export default inputCheck