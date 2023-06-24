# Weather Application

![Weather Application Screenshot](https://res.cloudinary.com/dza2t1htw/image/upload/v1687610806/Screenshot_52_eqgn5f.png)

A weather application built using React.js and TypeScript. It utilizes Redux Toolkit for state management, Tailwind CSS for styling, and React Router DOM 6 for navigation.

## Features

- Get current weather information for a specific location
- Display temperature, humidity, wind speed, and weather conditions
- Supports both metric and imperial units for temperature and wind speed
- User-friendly interface with responsive design
- Navigate between different routes to view weather details for multiple locations

## Prerequisites

- Node.js (version 12 or higher) and npm (Node Package Manager)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/weather-application.git

2. Navigate to the project directory:

   ```bash
   cd weather-application

3. Install the required dependencies:
 ```bash
  npm install
4. Obtain an API key from a weather data provider (e.g., OpenWeatherMap) by creating an account on their website.

5. Create a .env file in the project directory and add the following content:

 ```bash  
   REACT_APP_SERVER_URL= url or use 'http://api.weatherapi.com/v1'
   ```bash
   REACT_APP_AUTOCOMPLETE = url or 'https://us1.locationiq.com'
  ```bash
   REACT_APP_API_KEY_FOR_AUTOCOMPLETE = api_key or 'pk.783d8e32aa8e21d9db146d7da763ee61'
  
   REACT_APP_API_KEY = api_key or 'a05f026641af48559c074315232006'
   
 if you have own api key, Replace your-api-key with the API key obtained in the previous step.
 
## Usage
To start the development server, run the following command:

```bash
  npm install

This will start the application and open it in your default web browser. You can also access it at http://localhost:3000.

Use the search bar to enter a location and press Enter or click the Search button. The application will display the current weather data for the specified location, including temperature, humidity, wind speed, and weather conditions.

You can switch between metric and imperial units by clicking the unit toggle button in the top-right corner of the weather display.

## Build

To build the application for production, use the following command:

```bash
npm run build

This will create an optimized production-ready build in the build directory.


## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

## Acknowledgments

- Thanks to OpenWeatherMap for providing the weather data API.
- This project was built using React.js, TypeScript, Redux Toolkit, Tailwind CSS, and React Router DOM 6.



![Weather Application Screenshot](https://res.cloudinary.com/dza2t1htw/image/upload/v1687610806/Screenshot_52_eqgn5f.png)
