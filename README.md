 # QR Code Generator and Scanner

A simple web application to generate and scan QR codes using vanilla JavaScript, HTML, and CSS.

## Features

- Generate QR codes from text (numbers or alphanumeric strings).
- Scan QR codes using the device camera.

## Technologies Used

- HTML
- CSS
- JavaScript
- [qrcode-generator](https://cdnjs.cloudflare.com/ajax/libs/qrcode-generator/1.4.4/qrcode.min.js) library for generating QR codes.
- [html5-qrcode](https://unpkg.com/html5-qrcode/minified/html5-qrcode.min.js) library for scanning QR codes.

## Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

- A modern web browser (e.g., Google Chrome, Mozilla Firefox).

### Installation

1. Clone the repository or download the ZIP file.

    ```bash
    git clone https://github.com/yourusername/qrcode-generator-scanner.git
    cd qrcode-generator-scanner
    ```

2. Open the `index.html` file in your web browser.

### Usage

1. **Generate QR Code:**
    - Enter the text (number or alphanumeric string) in the input field.
    - Click the "Generate QR Code" button.
    - The QR code will be displayed below the button.

2. **Scan QR Code:**
    - Click the "Start Scanning" button.
    - Allow the browser to access the camera if prompted.
    - Point the camera at a QR code.
    - The scanned result will be displayed below the camera view.

## Code Explanation

