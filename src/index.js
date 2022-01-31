import timer from "./modules/timer"
import menu from "./modules/menu"
import modal from "./modules/modal"
import inputCheck from "./modules/inputCheck"
import tabs from "./modules/tabs"
import slider from "./modules/slider"
import calc from "./modules/calc"
import sendForm from "./modules/sendForm"

timer('29 january 2022')
menu()
modal()
inputCheck()
tabs()
slider()
calc(100)
sendForm({ 
    formId: 'form1', 
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ] 
}) 
sendForm({ 
    formId: 'form2', 
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ] 
})
sendForm({ 
    formId: 'form3', 
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ] 
}) 