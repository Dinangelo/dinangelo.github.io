const menu = document.querySelector(".menu-humburger");
const nav = document.querySelector(".nav-links");

menu.addEventListener('click',()=>{
    nav.classList.toggle('menu-respons')
})

// document.addEventListener('DOMContentLoaded', () => {
//     const textElement = document.getElementById('animatedText');
//     const text = textElement.textContent;
//     textElement.textContent = '';

//     for (let char of text) {
//         const span = document.createElement('span');
//         span.textContent = char;
//         textElement.appendChild(span);
//     }

//     let index = 0;
//     const spans = textElement.querySelectorAll('span');

//     function animate() {
//         if (index > 0) {
//             spans[index - 1].classList.remove('active');
//         }
//         if (index < spans.length) {
//             spans[index].classList.add('active');
//             index++;
//         } else {
//             index = 0;
//         }
//     }

//     setInterval(animate, 500);
// });
