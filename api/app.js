// set initial count
let count = 0;

// select value and buttons

const value = document.querySelector('#value');
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        // The classList property returns the CSS classnames of an element.
        // The classList property returns a DOMTokenList object.
        const styles = e.currentTarget.classList;
        console.log(e.currentTarget.classList);
        console.log(e.currentTarget);
        // The contains() method returns a Boolean value indicating whether a node is a descendant of a specified node.
        if(styles.contains("decrease")){
            count--;
        }
        else if(styles.contains('increase')){
            count++; 
        }
        else{
            count = 0;
        }

        if(count > 0){
            value.style.color = 'green';
        }else if(count < 0){
            value.style.color = 'red';
        }else{
            value.style.color = 'black';
        }
        value.textContent = count;
    });
});