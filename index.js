const ALPHABETS = 'ABCDEFGHIJ';

const wrapper = document.getElementById('seats');
const selectedSeatsWrapper = document.getElementById('selected-seats');





const selectedSeats = [];

ALPHABETS.split('').forEach(function (item) {
  const row = document.createElement('div');
  row.className = 'flex flex-item gap-10';
  row.innerHTML = `<button class="py-2 px-4 w-10">${item}</button>`;

  for (let i = 1; i <= 4; i++) {
    const button = document.createElement('button');
    button.className = 'py-2 px-4 w-20 bg-gray-200 text-center';
    button.textContent = item + i;
    row.appendChild(button);
    button.addEventListener('click', function (e) {
      // Check if already selected
      if (selectedSeats.includes(item + i)) {
        const index = selectedSeats.indexOf(item + i);
        selectedSeats.splice(index, 1);
        e.target.className = 'py-2 px-4 w-20 bg-gray-200 text-center';
      } else {
        if (selectedSeats.length < 4) {
          e.target.className =
            'py-2 px-4 w-20 bg-green-500 text-center text-white';
          selectedSeats.push(item + i);
        }
      }
      console.log(selectedSeats);
      printSeats(selectedSeats);
      calcPriceAndPrint(selectedSeats);
    });
  }
  wrapper.appendChild(row);
});

function printSeats(newSelected) {
  selectedSeatsWrapper.innerHTML = '';
  newSelected.forEach(function (item) {
    selectedSeatsWrapper.innerHTML += `
        <div class='flex justify-between'>
            <span>${item}</span>
            <span>Economy</span>
            <span>550</span>
        </div>`;
  });
}


// Price Calculate
const applyBtn = document.getElementById('applyBtn');
const totalPrice = document.getElementById('total-price');
const grandTotal = document.getElementById('grand-price');
const couponInput = document.getElementById('coupon-input');

function calcPriceAndPrint(newSelected) {
  totalPrice.textContent = 550 * newSelected.length;
  grandTotal.textContent = 550 * newSelected.length;
}

applyBtn.addEventListener('click', function () {
  const totalPrice = 550 * selectedSeats.length;
  const value = couponInput.value;
  if (value === 'NEW15') {
    grandTotal.textContent = 0.15 * totalPrice;
    grandTotal.innerText = totalPrice - grandTotal.textContent;
    document.getElementById('coupon-input').value = '';
    
  } else if (value === 'Couple 20') {
    grandTotal.textContent = 0.2 * totalPrice;
    grandTotal.innerText = totalPrice - grandTotal.textContent;
    document.getElementById('coupon-input').value = '';
  } else {
    alert('Invalid coupon!');
  }
});
           

// Modal javascript Start
const nextBtn = document.getElementById('nextBtn');
const modal = document.getElementById('modal');


nextBtn.addEventListener('click', function () {
    modal.style.display = 'flex';
    document.getElementById('name').value = '';
    document.getElementById('number').value = '';
    document.getElementById('email').value = ''; 
});
  modal.addEventListener('click', function () {
  modal.style.display = 'none';
});
// Modal Javascript End


// Personal Information Start


// const number = document.getElementById('number');
// const value2 = number.value;

// const email = document.getElementById('email');
// const value3 = email.value;
// const name = document.getElementById('name');
// const value1 = name.value;

// nextBtn.addEventListener('click', function(){
//     console.log('connect');
// })
// Personal Information End