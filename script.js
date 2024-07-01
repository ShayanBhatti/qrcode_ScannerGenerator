function generateQRCode() {
    const text = document.getElementById('text').value;
    if (text) {
        const qrCodeDiv = document.getElementById('qrcode');
        qrCodeDiv.innerHTML = ''; // Clear previous QR code
        const qr = qrcode(0, 'L');
        qr.addData(text);
        qr.make();
        qrCodeDiv.innerHTML = qr.createImgTag();
        qrCodeDiv.querySelector('img').style.width = '250px'; // Set width
        qrCodeDiv.querySelector('img').style.height = '250px'; // Set height
    } else {
        alert('Please enter some text');
    }
}

function startScanner() {
    const html5QrCode = new Html5Qrcode("reader");
    html5QrCode.start(
        { facingMode: "environment" }, // Default camera
        {
            fps: 10,    // Frames per second
            qrbox: { width: 250, height: 250 }  // QR code scanning box
        },
        qrCodeMessage => {
            document.getElementById('scanned-result').innerText = `Scanned result: ${qrCodeMessage}`;
            html5QrCode.stop().then(() => {
                console.log("QR Code scanning stopped.");
            }).catch(err => {
                console.error("Error stopping the scanner.", err);
            });
        },
        errorMessage => {
            // Handle errors
            console.error(errorMessage);
        }
    ).catch(err => {
        // Start failed, handle it
        console.error("Unable to start scanning.", err);
    });
}
