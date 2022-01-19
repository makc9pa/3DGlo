const modal = () => {
    const modal = document.querySelector('.popup')
    const buttons = document.querySelectorAll('.popup-btn')
    const closeBtn = modal.querySelector('.popup-close')

    let count = 0
    let idInterval

    const animateModal = () => {
        if (screen.width > 768) {
            count++
            idInterval = requestAnimationFrame(animateModal)
            if (count <= 20) {
                modal.style.opacity = count * 0.05
                modal.style.display = 'block' 
            } else {
                cancelAnimationFrame(idInterval)
            } 
        } else {
            modal.style.display = 'block' 
        }
    }

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            animateModal()
        })
    })

    closeBtn.addEventListener('click', () => {
            modal.style.display = 'none'
            modal.style.opacity = ''
            count = 0
        })
}

export default modal