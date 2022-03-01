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