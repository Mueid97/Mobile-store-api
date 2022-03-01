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

// see single phone 
const seeDetails = info => {
  const url = `https://openapi.programming-hero.com/api/phone/${info}`;
  fetch(url)
    .then(res => res.json())
    .then(data => displaySinglePhone(data.data))
   // displaySinglePhone(data.data)
};

//  display single phone 
const displaySinglePhone = phone => {
  document.getElementById('displaySinglePhone').innerHTML = '';
 // document.getElementById('others')
  //console.log(phone);
  const displaySinglePhoneContainer = document.getElementById('displaySinglePhone');
  const div = document.createElement('div');
  div.classList.add('row');
  div.innerHTML = `
    <div class="col-md-4 d-flex justify-content-center align-items-center">
            <img src="${phone.image}" class="img-fluid rounded-start" alt="...">
    </div>
          <div class="col-md-8 ">
            <div class="card-body">
              <h5 class="card-title"><span class="fw-bold">Brand:</span> ${phone.brand}</h5>
              <p class="card-text"><span class="fw-bold">Release:</span> ${phone.releaseDate}</p>  
              <p class="card-text "><span class="fw-bold">Name:</span> ${phone.name}</p>

              <p class="card-text"><span class="fw-bold">Dispaly:</span> ${phone.mainFeatures.displaySize}</p>  
              <p class="card-text"><span class="fw-bold">Memory:</span> ${phone.mainFeatures.memory}</p>  
              <p class="card-text"><span class="fw-bold">Storage:</span> ${phone.mainFeatures.storage}</p> 

              <div id="others" class="d-flex gap-2">
                <p class="card-text"><span class="fw-bold">WLAN:</span> ${phone?.others?.WLAN}</p>   
                <p class="card-text"><span class="fw-bold">Bluetooth:</span> ${phone?.others?.Bluetooth}</p>   
                <p class="card-text"><span class="fw-bold">GPS:</span> ${phone?.others?.GPS}</p>   
                <p class="card-text"><span class="fw-bold">USB:</span> ${phone?.others?.USB}</p>  
             </div>   
                
              <div class="d-flex gap-2">
                 <p class="card-text"><span class="fw-bold">Sensor:</span> ${phone.mainFeatures.sensors[0]}</p>  
                 <p class="card-text">${phone.mainFeatures.sensors[1]}</p>  
                 <p class="card-text">${phone.mainFeatures.sensors[2]}</p>  
                 <p class="card-text">${phone.mainFeatures.sensors[3]}</p>  
                 <p class="card-text">${phone.mainFeatures.sensors[4]}</p>  
                 <p class="card-text">${phone.mainFeatures.sensors[5]}</p>  
             </div>
            </div>
          </div>
    `;
  displaySinglePhoneContainer.appendChild(div);
}