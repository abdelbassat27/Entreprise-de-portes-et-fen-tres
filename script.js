document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة
    const product = document.getElementById('product').value;
    const address = document.getElementById('address').value;
    const payment = document.getElementById('payment').value;

    alert(`تم استلام طلبك! \nالمنتج: ${product} \nالعنوان: ${address} \nطريقة الدفع: ${payment}`);
});
function toggleMenu() {
        const nav = document.getElementById("main-nav");
        const hamburger = document.querySelector(".hamburger");
        nav.classList.toggle("active");
        hamburger.classList.toggle("active");
    }