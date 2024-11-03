document.addEventListener("DOMContentLoaded", function () {
    const fileInput = document.getElementById("qr-input-file");
    const imageDisplay = document.getElementById("img1");
    const messageDisplay = document.getElementById("msg");
    const resualtlink=document.getElementById('resualtlink');

 // Add an event listener for file input changes
fileInput.addEventListener("change", handleFileSelect);

function handleFileSelect() {
    // Create an instance of Html5QrcodeScanner
    const html5QrCode = new Html5QrcodeScanner("resualtlink", { fps: 10, qrbox: 250 });
   
    function handleScanSuccess(Result) {
        messageDisplay.textContent = `QR Code Scanned! Content:  ${Result}`;
        console.log(Result);
    }
    function handleScanError(err) {
        console.error("QR Code scanning failed:", err);
    }
    // Start scanning the uploaded image
    html5QrCode.render(handleScanSuccess,handleScanError);
}
console.log(messageDisplay.value)
})