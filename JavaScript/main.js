var cars_images,
  purchase_quantity,
  cars_names,
  cars_prices,
  items_in_cart,
  cars_desc,
  total_purchases;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value;
  } else {
    return number_value;
  }
}

const button = document.querySelector(".navbar__ham");
const menu = document.querySelector(".navbar__links");
const overlay = document.querySelector("#overlay");

button.addEventListener("click", () => {
  button.classList.toggle("open");
  menu.classList.toggle("navbar__open");
  overlay.classList.toggle("show");
});

overlay.addEventListener("click", () => {
  overlay.classList.toggle("show");
  button.classList.toggle("open");
  menu.classList.toggle("navbar__open");
});

cars_images = [
  "https://cdn.pixabay.com/photo/2017/04/06/22/11/car-2209439_960_720.png",
  "https://www.topgear.com/sites/default/files/cars-car/image/2019/04/toyota-camry-hybrid-exterior-dynamic-not-uk-spec-26.jpg",
  "https://cdn.motor1.com/images/mgl/3WW1j1/s3/2022-bmw-i7.jpg",
];
cars_names = ["Bogati", "Camry", "BMW"];
cars_prices = [100000, 20000, 50000];
cars_desc = [
  "This is the fastest car in the world, you would be lucky if you buy it",
  "This is a budget car with exceptional performance",
  "This is the best of the German cars",
];
purchase_quantity = 0;
items_in_cart = [];
total_purchases = [];

document.getElementById("pre-img").addEventListener("click", (event) => {
  let element_comments = document.getElementById("comments");
  element_comments.replaceChildren();
  let element_car_image = document.getElementById("car-image");
  element_car_image.replaceChildren();
  cars_images.unshift(cars_images.pop());
  element_car_image.setAttribute("src", cars_images[0]);
  let element_car_desc = document.getElementById("car-desc");
  element_car_desc.replaceChildren();
  cars_names.unshift(cars_names.pop());
  element_car_desc.innerText = cars_names[0];
  let element_car_price = document.getElementById("car-price");
  element_car_price.replaceChildren();
  cars_prices.unshift(cars_prices.pop());
  element_car_price.innerText = cars_prices[0];
  let element_car_info = document.getElementById("car-info");
  element_car_info.replaceChildren();
  cars_desc.unshift(cars_desc.pop());
  element_car_info.innerText = cars_desc[0];
});

document.getElementById("next-img").addEventListener("click", (event) => {
  let element_comments2 = document.getElementById("comments");
  element_comments2.replaceChildren();
  let element_car_image2 = document.getElementById("car-image");
  element_car_image2.replaceChildren();
  cars_images.push(cars_images.shift());
  element_car_image2.setAttribute("src", cars_images[0]);
  let element_car_desc2 = document.getElementById("car-desc");
  element_car_desc2.replaceChildren();
  cars_names.push(cars_names.shift());
  element_car_desc2.innerText = cars_names[0];
  let element_car_price2 = document.getElementById("car-price");
  element_car_price2.replaceChildren();
  cars_prices.push(cars_prices.shift());
  element_car_price2.innerText = cars_prices[0];
  let element_car_info2 = document.getElementById("car-info");
  element_car_info2.replaceChildren();
  cars_desc.push(cars_desc.shift());
  element_car_info2.innerText = cars_desc[0];
});

document.getElementById("purchase-order").addEventListener("click", (event) => {
  purchase_quantity =
    (typeof purchase_quantity === "number" ? purchase_quantity : 0) + 1;
  items_in_cart.push(cars_names[0]);
  total_purchases.push(cars_prices[0]);
  let element_cart_total = document.getElementById("cart-total");
  element_cart_total.innerText = purchase_quantity;
});

document.getElementById("cart-img").addEventListener("click", (event) => {
  let element_comments3 = document.getElementById("comments");
  element_comments3.replaceChildren();
  let element_cars_types = document.getElementById("cars-types");
  element_cars_types.replaceChildren();
  let new_div = document.createElement("div");
  new_div.innerText = "this is the car you bought:";
  while (!!items_in_cart.length) {
    if (--window.LoopTrap <= 0) throw "Infinite loop.";
    let new_li = document.createElement("li");
    new_li.innerText = items_in_cart.shift();

    new_div.appendChild(new_li);
  }
  let new_div2 = document.createElement("div");
  new_div2.innerText = "ammount for your purchae today: £";
  let new_span = document.createElement("span");
  new_span.innerText = total_purchases.reduce((a, b) => a + b, 0);

  new_div2.appendChild(new_span);

  new_div.appendChild(new_div2);

  element_cars_types.appendChild(new_div);
});

document.getElementById("post-comment").addEventListener("click", (event) => {
  let element_comments4 = document.getElementById("comments");
  let new_div3 = document.createElement("div");
  let new_span2 = document.createElement("span");
  new_span2.innerText = getNumberOrString(
    document.getElementById("user-comment").value
  );

  new_div3.appendChild(new_span2);

  element_comments4.appendChild(new_div3);
});
