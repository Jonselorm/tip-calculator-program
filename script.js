const billAmount = document.getElementById("billAmount");

const customTipAmount = document.getElementById("CustomTipAmount");

const splitCount = document.getElementById("splitCount");

// const submitiBtn = document .getElementById("")
const totalAmount = document.getElementById("totalAmount");
const tipAmount = document.getElementById("tipAmount");
const amountPerHead = document.getElementById("amountPerPerson");

function submit() {
  const bill = parseFloat(billAmount.value);
  const tip = parseFloat(customTipAmount.value);
  const numberOfPeople = splitCount.value;
  if (!bill || !tip || !numberOfPeople) {
    alert("some fields are empty");
  } else {
    const totalBill = parseFloat(bill + tip);
    const amountPerPerson = parseFloat(totalBill / numberOfPeople);

    totalAmount.innerHTML = `The total amount is :${totalBill}`;
    tipAmount.innerHTML = `Your tip is ${tip};`;
    amountPerHead.innerHTML = `Each person pays;  ${amountPerHead.toFixed(2)}`;
  }
}

function reset() {
  billAmount.value = "";
  customTipAmount.value = "";
  splitCount.value = "";
  totalAmount.innerHTML = "";
  tipAmount.innerHTML = "";
  amountPerHead.innerHTML = "";
}

function toggleDivVisbility() {
  const serviceRatingRadioButton = document.getElementById("serviceRating");
  const serviceRatingInputDiv = document.getElementById("serviceRatingInput");

  if (serviceRatingRadioButton.checked) {
    serviceRatingInputDiv.style.display = "block";
  } else {
    serviceRatingInputDiv.style.display = "none";
  }
}
