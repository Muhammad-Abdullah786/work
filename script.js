// insertion meethods 

let a = document.getElementsByTagName("div")[0]

a.innerHTML = a.innerHTML + "<h1>ok this is h1 in a.innerHTML let's see where it will go <h1>"


// now i want to make a div inside the div 

let b = document.createElement("div");

b.innerHTML = "<h1>ok this is h1 in b.innerHTML let's see where it will go <h1>";

a.appendChild(b);// it was at the end of the div class "container"
// what if we use prepend instead

a.prepend(b)// now its is at the top of the div class "container"s

// a.before(b);// now it's out of the div class "container"
// a.after(b);// now it's out of the div class "container" but it's at the bottom of the div


// first let's target the div class "container"

let c = document.getElementsByClassName("container")[0]
// create the span element
let span = document.createElement("span");
span.innerHTML = "hello world"; // inside the span element write some text
a.appendChild(span); // put the span into a which is div class "container"
b.replaceWith(span); //  as you can see span is replaced with a div b which we make above

// insertion method || insert adjecent html || insert adjecent text
let divContainer = document.getElementsByClassName('container')[0]
console.log("container" , divContainer);
// divContainer.insertAdjacentHTML('beforebegin', '<div>this is beforebegin</div>')
// divContainer.insertAdjacentHTML('beforeend', '<div>this is beforeend</div>')
// divContainer.insertAdjacentHTML('afterbegin', '<div>this is afterbegin</div>')
// divContainer.insertAdjacentHTML('afterend', '<div>this is afterend</div>')

