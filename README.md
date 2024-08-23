# Text Editor (JATE)

## Description

JATE is a progressive web application (PWA) designed to serve as a versatile text editor. This project was built to address the need for a reliable, offline-capable text editor that developers and writers can use to create and store notes or code snippets.

- Motivation: To provide a seamless text editing experience, regardless of internet connectivity.
- Purpose: To create a tool that enhances productivity by allowing users to work offline and automatically saving their work.
- Problem it solves: It addresses the issue of potential data loss and the need for constant internet connection when working on text or code snippets.
- Learning outcomes: This project deepened understanding of PWAs, IndexedDB, service workers, and webpack, showcasing how these technologies can be integrated to create a powerful web application.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Features](#features)
- [How to Contribute](#how-to-contribute)

## Installation

To install JATE, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the root directory of the project in your terminal.
3. Run `npm install` to install all dependencies.
4. Run `npm run start` to start the application.

## Usage

1. Open the application in your web browser.
2. Start typing your notes or code snippets in the text editor.
3. Your content will automatically be saved to IndexedDB when you click off the DOM window.
4. To install the application on your desktop, click the "Install" button.

## Demo

![JATE Screenshot](/assets/text-editor.gif)

## Credits

This project was developed as part of a coding bootcamp curriculum. Special thanks to the instructors and TAs for their guidance.

Third-party assets:
- [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)
- [Webpack](https://webpack.js.org/)
- [Workbox](https://developers.google.com/web/tools/workbox)

## License

This project is licensed under the MIT License.

## Features

- Offline functionality
- Automatic content saving
- Installable as a desktop application
- Next-gen JavaScript support
- IndexedDB for local storage
- Service worker for improved performance

## How to Contribute

Contributions to JATE are welcome! If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request