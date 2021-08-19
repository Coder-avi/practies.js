// Events
const btn = document.getElementById('myBtn');

btn.addEventListener('mouseover', function(e){
    btn.style.background = 'blue'
    console.log(e);

});

// BY arow functions
btn.addEventListener('click', (e) => {
    console.log(e);

});