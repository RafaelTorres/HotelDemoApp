Boilerplate used : [Pepperoni](http://getpepperoni.com/)

## Getting Started
Before starting, you must have installed the [React Native](https://facebook.github.io/react-native/) environment and also the [HotelDemoServer](https://github.com/RafaelTorres/HotelDemoServer) server to be able to test the application.

```sh
# clone it
git clone https://github.com/RafaelTorres/HotelDemoApp.git

# Go to folder the  project
cd HotelDemoApp

# Install dependencies
npm install

#Install Native configuration
react-native link

#Look for the file "constants", in src/utils/constants.js and modify export const API_URL = 'http://localhost:3000/api/v1.0/'
#example
export const API_URL = 'http://yourdomain:yourport/'

# Run it
react-native run-ios or react-native run-android
```
