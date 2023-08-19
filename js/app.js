// function getValueAndName(target){
//     const result = target.parentNode.childNodes[2].innerText;
//     console.log(result)
// }

// function getInputField(id){
//     const inputField = document.getElementById(id);
//     return inputField;
// }

// document.getElementById('item-1').addEventListener('click',function(){
//     const nameField = document.getElementById('item-1-name');
//     const nameValue = nameField.innerText;

//     const priceField = document.getElementById('item-1-price');
//     const priceValue = parseFloat(priceField.innerText);
//     console.log(nameValue, priceValue);
//     return nameValue, priceValue;
// })

// console.log(nameValue, priceValue);

  // Function to show item name and price
  function showItemInfo() {
    const itemName = document.getElementById('item-1-name').textContent;
    const itemPrice = document.getElementById('item-1-price').textContent;

    // Create a new element to display the item info
    const itemInfoElement = document.createElement('div');
    itemInfoElement.classList.add('item-info');
    itemInfoElement.innerHTML = `
      <p><strong>Item Name:</strong> ${itemName}</p>
      <p><strong>Item Price:</strong> ${itemPrice} TK</p>
    `;

    // Append the new element to the document
    document.body.appendChild(itemInfoElement);
  }

  // Add a click event listener to the main div
  const mainDiv = document.getElementById('item-1');
  mainDiv.addEventListener('click', showItemInfo);
