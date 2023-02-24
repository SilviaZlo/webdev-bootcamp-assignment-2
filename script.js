// getting the toggleButton element that is inside my code. This will return an array and I want the first element of the array (index zero), which is the toggle button
const toggleButton = document.getElementsByClassName('toggleButton')[0]

//getting the navBar ul
const navBarLinks = document.getElementsByClassName('navBarLinks')[0]

toggleButton.addEventListener('click', () => {
    navBarLinks.classList.toggle('active')
})
//we´re goona get the toggle button, add an eventlistener that is going to be clicked, and then we´re gonna run a certain function. This function will take the navBarLInks, access all the different classes on it (.classList) and toggle the active class (toggle('active'). This means that if the active class doesn´t exist it will add it, and if the active class does exist it will remove it. 