 const form=document.getElementById('generate-form');
 const qrres=document.getElementById('qrcode');
 
 function ongeneratesubmit(e){
    e.preventDefault();
    clear();
 const url=document.getElementById('url').value;
 const size=document.getElementById('size').value;
 
if(url.value === ''){
    url.style.borderColor='rgb(220 38 38)';
}else{
    // Show spinner for 1,5 sec
    showspinner();
    setTimeout(()=>{
        hidespinner();
        GenerateQRCode(url,size);
    // Generate the save button after the qr code image src is ready
      setTimeout(() => {
    // Get save url
        const saveUrl = qrres.querySelector("canvas").toDataURL();
    // Create save button
        createSaveBtn(saveUrl);
      }, 50);
    },1500)
}
// Generate QR code :

function GenerateQRCode(url,size){
    const QrCoder= new QRCode(qrres,{
        text:url,
        with:size,
        height:size
    });
}

 }

// Clear QR code and save button :

function clear(){
    qrres.innerHTML='';
    const saveBtn = document.getElementById("save-link");
    if (saveBtn) {
        saveBtn.remove();
    }
}

function hidespinner(){
document.getElementById('spinner').style.display='none';
}

function showspinner(){
document.getElementById('spinner').style.display='block';
}

// Create save button to download QR code as image
const createSaveBtn = (saveUrl) => {
    const link = document.createElement("a");
    link.id = "save-link";
    link.classList =
      'bg-red-500 hover:bg-red-700 text-white font-bold py-2 rounded w-1/3 m-auto my-5';
    link.innerHTML = "Save Image";
  
    link.href = saveUrl;
    link.download = "qrcode.png";
  
    document.getElementById("generated").appendChild(link);
  };

 form.addEventListener('submit',ongeneratesubmit)
