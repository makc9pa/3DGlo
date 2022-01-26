import { animate } from './helpers'

const modal = () => {
    const modal = document.querySelector('.popup')
    const buttons = document.querySelectorAll('.popup-btn')

    const animateModal = () => {
        if (screen.width > 768) {
            animate({
                duration: 500,
                timing(timeFraction) {
                    return 1 - Math.sin(Math.acos(timeFraction));
                },
                draw(progress) {
                    modal.style.opacity = progress
                    modal.style.display = 'block' 
                } 
            });
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
        }
    })
}

export default modal