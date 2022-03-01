// searchField 
const searchField = () => {
  document.getElementById('display-phone').innerHTML = '';
  document.getElementById('displaySinglePhone').innerHTML = '';
  const inputField = document.getElementById('inputField');
  const inputValue = inputField.value;
  inputField.value = '';
  const errorField = document.getElementById('error1');
  if (inputValue == "") {
    errorField.innerText = "Please search valid Phone";
  } else {
    const url = ` https://openapi.programming-hero.com/api/phones?search=${inputValue}`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (data.status == false) {
          errorField.innerText = "Please search valid Phone";      
        } else {
          displayPhone(data.data.slice(0,20));
          errorField.innerText = "";
          //console.log(data.data)
        }
        //console.log(data)
      });
  };
};

// display Phones 
const displayPhone = phones => {
  const dispalyContainer = document.getElementById('display-phone');
  phones.forEach(phone => {
    //console.log(phone);
    const div = document.createElement('div');
    div.classList.add('col-lg-4');
    div.innerHTML = `
        <div class="card h-100">
        <img src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${phone.phone_name}</h5>
          <p class="card-text">${phone.brand}</p>
          <button onclick="seeDetails('${phone.slug}')" id="details" class="btn btn-primary" >Details</button>
        </div>       
      </div>
        `;
    dispalyContainer.appendChild(div);
  });
};
