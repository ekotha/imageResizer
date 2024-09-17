# Image Resizer PWA

You can view a live version of this quick tool here: ~~https://tangibleplumpresource.eashankotha.repl.co~~
Due to changes in Replit deployments, I've taken the live demo offline.

This is a simple image resizer web application implemented as a Progressive Web App (PWA). It allows users to upload an image, specify width and height dimensions, and resize the image accordingly. The resized image is displayed on the page and can be saved manually using the browser's context menu.

## Features

- Image upload: Select an image file from your device to resize.
- Resize dimensions: Specify the desired width and height for the resized image.
- Image resizing: Dynamically resize the image while maintaining the aspect ratio.
- Save resized image: Manually save the resized image using the browser's context menu.
- Progressive Web App: Install the web app on your device.

## Installation and Usage

To use the Image Resizer web app, follow these steps:

1. Clone the repository or download the source code.
2. Open the `index.html` file in a web browser.
3. Upload an image file and specify the desired width and height dimensions.
4. Click the "Resize Image" button to resize the image.
5. The resized image will be displayed on the page and a download is automatically generated. Choose where to save it.
6. You can also right-click on the resized image and select the "Save image as..." option from the context menu to choose the desired location on your device to save the resized image.

### Progressive Web App (PWA)

To install the web app as a Progressive Web App, follow these additional steps:

1. Access the web app using a supported browser (Chrome, Firefox, etc.).
2. In the browser's address bar, look for the install icon or a prompt to install the app.
3. Click the install icon or follow the installation prompt.
4. The web app will be installed on your device and accessible from the home screen or app launcher.
5. Launch the installed app to use it offline.

## File Structure

The file structure of the project is as follows:

```
├── index.html         # HTML file containing the user interface
├── script.js          # image resizing js
├── manifest.json      # Manifest - PWA config
├── service-worker.js  # Service worker script - cache
├── icon.png           # PWA image (192x192)
├── style.css         
└── README.md         
```

## Future Additions
The UX and styling is pretty bare bones at the moment. It's purely functional. Users have to manually type in the exact pixel width and heights.
A future iteration could involve adding buttons for preset aspect ratios. That would be a good QoL improvement. 

## License

The Image Resizer Progressive Web App is licensed under the MIT License.
Feel free to modify and customize the app according to your needs.

## Acknowledgements

This web app was created using HTML, CSS, and JavaScript. It utilizes Bootstrap. 
Special thanks to the open-source community for their contributions and libraries used in this project.


## Feedback and Contributions

If you have any feedback, suggestions, or would like to contribute to the project, please feel free to open an issue or submit a pull request.

Feedback and contributions are highly appreciated!

