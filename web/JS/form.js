document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Данные записаны");
});

if (window.innerWidth <= 600) {  
    document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=600, user-scalable=no');
}