
let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");


function generateQR() {
    
    let inputValue = qrText.value.trim();
    
   
    if (inputValue.length > 0) {
        
        let encodedValue = encodeURIComponent(inputValue);
        
        
        let qrCodeURL = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodedValue}`;
        
        
        qrImage.src = qrCodeURL;
        
       
        imgBox.classList.add("show-img");
    }
}


qrText.addEventListener("input", generateQR);