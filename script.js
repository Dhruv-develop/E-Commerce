var CountDownDate = new Date("augest 4,2024 15:37:25").getTime();

var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = CountDownDate - now;
    var days = Math.floor(distance / (1000*60*60*24));
    var hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
    var minutes = Math.floor((distance % (1000*60*60))/ (1000*60));
    var second = Math.floor((distance % (1000*60)) / 1000);

    document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + second + "s";
     if(distance<0){
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
     }
},1000);

var swiper = new Swiper(".mySwiper",{
    slidesPerView:2,
    spaceBetween:10,
    pagination:{
        el:".swiper-pagination",
        clickable:true,
    },
    breakpoints: {
    640 : {
        slidesPerView:2,
        spaceBetween:10,
    },
    768: {
        slidesPerView:3,
        spaceBetween:10,
    },
    1024:{
        slidesPerView:4,
        spaceBetween: 10,
    },
},
});

// Animations

ScrollReveal().reveal(".top_nav",{
    origin:'bottom',
    distance: '20px',
    opacity: 0,
});

ScrollReveal().reveal(".nav",{
    origin:'bottom',
    distance: '20px',
    opacity: 0,
    delay:100,
});

ScrollReveal().reveal(".header",{
    origin:'bottom',
    distance: '20px',
    opacity: 0,
    delay: 200,
});

ScrollReveal().reveal(".section",{
    origin:'bottom',
    distance: '20px',
    opacity: 0,
    duration: 1000,
    delay: 100,
});

ScrollReveal().reveal(".footer",{
    origin:'bottom',
    distance: '20px',
    opacity: 0,
    duration: 1000,
    delay: 100,
});


// mobile nav

const hamburger = document.querySelector(".hamburger");
const mobile_nav = document.querySelector(".mobile_nav");

hamburger.addEventListener("click", () => {
    mobile_nav.classList.toggle("mobile_nav_hide");
})


// Add to cart
const AddToCart = document.querySelectorAll(".add_to_cart");
// let total=0;
AddToCart.forEach((button) => {
    button.addEventListener('click',() => {
        const id = button.getAttribute('data-id');
        const title = button.getAttribute('data-title');
        const image = button.getAttribute('data-image');
        const price = button.getAttribute('data-price');
        const cartItem = { id, title, image, price };
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(cartItem);
        localStorage.setItem("cart",JSON.stringify(cart));
        // price = parseInt(price)
        // console.log(price);
        // total = total+price;
        // console.log(total);
    });
});




const cart = document.querySelector(".cart_items")
// const cart_total = document.querySelector(".cart_total")
function displayCart() {
    const items = JSON.parse(localStorage.getItem('cart'));
    items.forEach((item) => {
        const cartItem = document.createElement("div")
        cartItem.className = "cart_item";
        cartItem.innerHTML = `<p class="cart_item_ID">${item.id}</p>
        <p class="cart_item_title">${item.title}</p>
        <img src="${item.image}" alt="" class="cart_img">
        <p class="cart_item_price">${item.price}</p>
        <p class="cart_item_delete">Delete</p>`;
        cart.appendChild(cartItem)
        // const cart_total = document.createElement("div")
        // cart_total.className = "total";
        // cart_total.innerHTML = `<p class="cart_total_p">${total}</p>`
        // console.log(total);
        // cart.appendChild(total)
    }) 
}
displayCart();

