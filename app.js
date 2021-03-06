const buttonEl= document.querySelector('button');
const inputEl= document.querySelector('input');
const listEl= document.querySelector('ul');

buttonEl.addEventListener('click',function () {
    const enteredVal= inputEl.value;
    const listItemEl= document.createElement('li');
    listItemEl.textContent= enteredVal;
    listEl.appendChild(listItemEl);
    inputEl.value="Enter Your Next Goal"
})