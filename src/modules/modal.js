const modal = () => {
    const modal = document.querySelector('.popup')
    const buttons = document.querySelectorAll('.popup-btn')

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

    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            modal.style.display = 'none'
            modal.style.opacity = ''
            count = 0
        }
    })
}

export default modal