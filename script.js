// getting the toggleButton element inside my code; will return an array and I´m selecting the first element of the array (index zero), which is the toggle button
const toggleButton = document.getElementsByClassName('toggleButton')[0]

//getting the navBar ul
const navBarLinks = document.getElementsByClassName('navBarLinks')[0]

toggleButton.addEventListener('click', () => {
    navBarLinks.classList.toggle('active')
})
//getting the toggle button, adding an eventlistener that is going to be clicked, and then runing the function, which will take the navBarLInks, access all the different classes on it (.classList) and toggle the active class (toggle('active'). = if the active class doesn´t exist it will add it, and if the active class does exist it will remove it. 

