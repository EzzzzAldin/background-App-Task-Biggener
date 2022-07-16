document.body.classList.add(localStorage.getItem("pageColor") || "orange");


var el = document.querySelectorAll('.colorSwitch li'),
    myColor = [];

for (var i = 0; i < el.length; i++) {

    myColor.push(el[i].getAttribute('data-color'));

    el[i].addEventListener ('click', function() {
        document.body.classList.remove(...myColor);
        document.body.classList.add(this.getAttribute('data-color'));
        localStorage.setItem("pageColor",this.getAttribute('data-color'))
    }, false);

};

console.log(localStorage.getItem("pageColor"));