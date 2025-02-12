# Ticket Generator

## Overview
The **Ticket Generator** is a web-based application that allows users to generate event tickets dynamically. Users can input their details, including name, email, and profile photo, and receive a visually appealing ticket. The ticket can be downloaded as a PDF and features a QR code for authentication.

## Features
- **User Input Form**: Users can enter their name, email, and upload an avatar via a Cloudinary URL.
- **Dynamic Ticket Preview**: A real-time preview of the ticket is displayed.
- **QR Code Generation**: Generates a QR code based on user input.
- **PDF Download**: Allows users to download the ticket as a PDF.
- **Tailwind CSS Styling**: Uses Tailwind CSS for a modern, responsive design.
- **Cloudinary Image Upload Support**: Accepts direct Cloudinary URLs for avatars.

## Technologies Used
- **React.js**: Frontend framework
- **Tailwind CSS**: Styling
- **Cloudinary**: Image hosting
- **QRCode.react**: QR Code generation
- **react-to-print**: Printing functionality
- **jsPDF**: PDF generation

## Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/muwatta/ticket-generator.git
   cd ticket-generator
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Start the development server:**
   ```sh
   npm run dev
   ```

4. Open `http://localhost:5173/` in your browser.

## How to Use

1. Select the ticket type and enter the number of tickets.
2. Fill in your attendee details (name, email, and Cloudinary image URL).
3. Click **Generate Ticket** to preview the ticket.
4. The QR code will be displayed and centered properly.
5. Click **Download Ticket** to save it as a PDF.

## Troubleshooting

- **Cloudinary image not displaying?** Ensure you provide a valid Cloudinary URL.
- **QR Code not showing?** Double-check that your input is correct.
- **PDF not downloading?** Ensure `jsPDF` and `react-to-print` are installed properly.

## Contributing
If you'd like to contribute:
- Fork the repository
- Create a feature branch (`git checkout -b feature-name`)
- Commit your changes (`git commit -m 'Add new feature'`)
- Push to the branch (`git push origin feature-name`)
- Open a pull request

## License
This project is licensed under the MIT License.

## Contact
For any questions or issues, feel free to reach out via [your email or GitHub profile].

