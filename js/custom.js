/* JavaScript coming soon! */
let thankyou = document.querySelector(".thankyou");
const coffeeForm = document.querySelector("#coffeeForm");
//console.log(coffeeForm, "test");
coffeeForm.addEventListener("submit", onSubmit);
function onSubmit(e) {
  e.preventDefault();

  const data = new FormData(coffeeForm);
  const dataObject = Object.fromEntries(data.entries());

  console.log("our data:", dataObject);
  coffeeForm.reset();

  let name = dataObject.name;
  let email = dataObject.email;
  let phone = dataObject.phone;
  let comments = dataObject.comments;
  let flavor = dataObject.flavor;
  let interest = dataObject.interest;

  //   let myName = document.createElement("p");
  //   myName.textContent = name;
  //   thankyou.appendChild(myName);
  //   //   console.log(myName);

  //   let myEmail = document.createElement("p");
  //   myEmail.textContent = email;
  //   thankyou.appendChild(myName);

  //   let myTel = document.createElement("p");
  //   myTel.textContent = phone;
  //   thankyou.appendChild(myName);

  //   let myComments = document.createElement("p");
  //   myComments.textContent = comments;
  //   thankyou.appendChild(myName);

  //   let myFlavor = document.createElement("p");
  //   myFlavor.textContent = flavor;
  //   thankyou.appendChild(myFlavor);

  //   let myInterest = document.createElement("p");
  //   myInterest.textContent = interest;
  //   thankyou.appendChild(myInterest);

  let message = `Thank you ${name}  for your info: ${email},${phone}, and for your comments: ${comments}, flavor: ${flavor},interest: ${interest}! `;
  let messageTy = document.createElement("p");
  messageTy.textContent = message;
  thankyou.appendChild(messageTy);
}
