let thankyou = document.querySelector(".thankyou");
const cart = document.querySelector("#cart");
console.log(cart, "test");
cart.addEventListener("submit", onSubmit);
function onSubmit(e) {
  e.preventDefault();

  const data = new FormData(cart);
  const dataObject = Object.fromEntries(data.entries());

  console.log("our data:", dataObject);
  cart.reset();

  let name = dataObject.name;
  let email = dataObject.email;
  let password = dataObject.password;

  let welcome = `Welcome, ${name}! You are logged in!”`;
  let welcomeMess = document.createElement("p");
  welcomeMess.textContent = welcome;
  thankyou.appendChild(welcomeMess);
}
