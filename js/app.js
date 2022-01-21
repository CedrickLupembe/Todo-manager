// Add form and list
const addForm = document.querySelector('.Add-form')
const listTasks = document.querySelector('.List-tasks')
const inpValue = document.querySelector('.inpValue')

// search 
const searchbar = document.querySelector('.search-bar form input')


// Icon theme
let Icon = document.querySelector('.BtnTheme i')


// get string day in js (simple way)
const dateSection = document.querySelector('.date-section')

let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
const day = days[new Date().getDay()]

// month name
let today = new Date()
let months = today.getMonth()
let mNames = [
    "January", 
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
]
months = mNames[months]

// get day as a number
let dayNumber = String(today.getDate()).padStart(2, '0');
let year = today.getFullYear();


// date
currentDate = ` ${day}, ${dayNumber} ${months} ${year} `
dateSection.innerHTML += currentDate




addForm.addEventListener('submit', e => {

    e.preventDefault()
    let todo = inpValue.value.trim()

    const html = `
        <li class="element">
            <div class="check-todo">
                <span class="complete">${todo}</span>
            </div>

            <span>
                <button class="delete"><i class="far fa-trash-alt"></i></button>
            </span>
        </li>
    `
    if(todo === ""){
        return 
    }

    // append todo
    listTasks.innerHTML += html
    addForm.reset()
    
})

// delete task
listTasks.addEventListener('click', e => {

    if (e.target.classList.contains('delete')) {
        e.target.parentElement.parentElement.remove();
    }
    // mark done
    if (e.target.classList.contains('complete')) {
        e.target.classList.toggle('active')

    }
})


// Filtering

searchbar.addEventListener('keyup', e=>{

    e.preventDefault()
    letter = searchbar.value;
    Filtering(letter)
})


let Filtering = (item) =>{

    Array.from(listTasks.children)
    .filter(todo =>{
        return !todo.textContent.includes(item);
    })
    .forEach(todo =>{
        return todo.classList.add('Filtered')
    })




    Array.from(listTasks.children)
    .filter(todo =>{
        return todo.textContent.includes(item);
    })
    .forEach(todo =>{
        return todo.classList.remove('Filtered')
    })
}



// fonction toogle theme

function changeThemeToDark(){
    document.documentElement.setAttribute("data-theme", "dark")
    localStorage.setItem("data-theme", "dark")
}

function changeThemeToLight(){
    document.documentElement.setAttribute("data-theme", "light")
    localStorage.setItem("data-theme", 'light')
}

// Theme btn
let btnTheme = document.querySelector('.BtnTheme')

btnTheme.addEventListener('click', e => {
    let theme = localStorage.getItem('data-theme');

    if(theme === 'dark'){
        changeThemeToLight()
        Icon.setAttribute('class', 'fas fa-moon')
    }
    else{
        changeThemeToDark()
        Icon.setAttribute('class', 'fas fa-sun')
    }
})








