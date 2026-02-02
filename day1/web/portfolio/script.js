
function teststrings() {
    let string = "Hello, World!";
    string = string.replace("World", "JavaScript");
    console.log(string);
}
teststrings();
function testnumbers() {
    let num = 10;
    num += 5;
    strnum = num.toLocaleString();
    primnum = num.valueOf();
    console.log(primnum);
    console.log(typeof primnum);
    console.log(typeof strnum);
    console.log(typeof num);
    console.log(strnum);
    console.log(num);
}
testnumbers();


const single_link = document.querySelector('.contact-link');
single_link.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Single Contact link clicked!');
});

const contact_link = document.querySelectorAll('.contact-link');
contact_link.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        alert('All Contact link clicked!');
    });
});