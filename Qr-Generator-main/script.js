function generateQRCode() {
    const inputText = document.getElementById('inputText').value;
    const qrcodeContainer = document.getElementById('qrcode');
    const downloadLink = document.getElementById('downloadLink');
  
    if (!inputText) {
      alert('Please enter text or URL.');
      return;
    }
  
    // Clear previous QR code if any
    qrcodeContainer.innerHTML = '';
  
    // Create a QR code instance using the qrcode-generator library
    const typeNumber = 0; // 0 for auto-detect
    const errorCorrectionLevel = 'L'; // L, M, Q, H
    const qr = qrcode(typeNumber, errorCorrectionLevel);
    qr.addData(inputText);
    qr.make();
  
    // Create an HTML image element with the QR code data
    const qrImage = document.createElement('img');
    qrImage.src = qr.createDataURL(10, 0);
  
    // Append the QR code image to the container
    qrcodeContainer.appendChild(qrImage);
  
    // Show the download link
    downloadLink.href = qrImage.src;
    downloadLink.download = 'qr_code.png';
    downloadLink.style.display = 'block';
  }
  