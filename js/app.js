// loop for each Element 
const cards = document.querySelectorAll('.item-div');
cards.forEach(card => {
  card.addEventListener('click', addToCart);
});

// initial value set 
let totalPrice = 0;
let discount = 0;

// function for cart 
function addToCart(event) {
  const card = event.currentTarget;
  const productName = card.querySelector('.text-xl.font-semibold').textContent;
  const Productprice = parseFloat(card.querySelector('.font-semibold.text-slate-500 span').textContent);;

  const selectedItemDiv = document.getElementById('selected-item-container');
  const newElement = document.createElement('li');
  newElement.textContent = productName;
  selectedItemDiv.appendChild(newElement);
  console.log(newElement)
  totalPrice += Productprice;
  updateTotalPrice();
}

// function for update price list 
function updateTotalPrice() {
  const totalText = document.querySelector('ul.space-y-2.font-semibold li:first-child');
  totalText.textContent = `Total Price: ${totalPrice.toFixed(2)} TK`;

  const promoCode = document.querySelector('input[type="text"]');
  const applyBtn = document.getElementById('apply');
  if (promoCode.value === 'SELL200' && totalPrice >= 200) {
    applyBtn.disabled =true;
  } else {
    applyBtn.disabled = false;
  }
 
  discount = promoCode.value === 'SELL200' ? totalPrice * 0.2 : 0;
  const discountText = document.querySelector('ul.space-y-2.font-semibold li:nth-child(2)');
  discountText.textContent = `Discount: ${discount.toFixed(2)} TK`;

  const totalAfterDiscount = totalPrice - discount;
  const totalAfterDiscountText = document.querySelector('ul.space-y-2.font-semibold li:last-child');
  totalAfterDiscountText.textContent = `Total: ${totalAfterDiscount.toFixed(2)} TK`;

  const perchaseBtn = document.getElementById('perchase');
  if (totalPrice === 0) {
    perchaseBtn.disabled = true;
  } else {
    perchaseBtn.disabled = false;
  }

}

const applyButton = document.getElementById('apply');
applyButton.addEventListener('click', updateTotalPrice);

const goHomeButton = document.getElementById("goHomeButton");

