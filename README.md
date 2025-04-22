# DrinkLab - Cocktail Recipe Explorer

![DrinkLab Logo](./public/logo.png)

## About DrinkLab

DrinkLab is a modern, responsive web application that helps cocktail enthusiasts discover and explore drink recipes. With a beautiful gradient interface and intuitive search functionality, users can easily find cocktail recipes by name, ingredient, or category.

The application features a dynamic background that transitions between pastel colors, creating an engaging and visually appealing experience. Each recipe card displays detailed information including ingredients, measurements, and preparation instructions, making it easy for users to recreate their favorite drinks at home.

## Features

- **Search Functionality**: Find cocktails by name or ingredient
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Beautiful UI**: Gradient backgrounds and modern card-based layout
- **Detailed Recipes**: Complete ingredient lists and preparation instructions
- **Visual Appeal**: Cocktail images and elegant typography

## Tech Stack

- **Frontend Framework**: React.js
- **State Management**: React Context API
- **Styling**: CSS with custom variables and animations
- **API Integration**: CocktailDB API
- **Responsive Design**: CSS Media Queries
- **Typography**: Google Fonts (Playfair Display, Poppins)

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/drinklab.git
   cd drinklab
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the root directory:
   ```
   VITE_COCKTAIL_API_KEY=your_api_key_here
   ```
   
   Note: You can obtain an API key from [TheCocktailDB](https://www.thecocktaildb.com/api.php).

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser and navigate to `http://localhost:5173`

## How to Use

1. **Search for Cocktails**:
   - Type a cocktail name or ingredient in the search bar
   - Press Enter or click the search button
   - Results will display below the search bar

2. **View Recipe Details**:
   - Click on a recipe card to view detailed information
   - Each recipe includes:
     - List of ingredients with measurements
     - Preparation instructions
     - Glass type and alcoholic status

3. **Mobile Usage**:
   - The application is fully responsive and works on all devices
   - On mobile, the layout adjusts for optimal viewing and interaction

## Project Structure

```
drinklab/
├── public/
│   └── logo.png
├── src/
│   ├── components/
│   │   ├── datarec.jsx
│   │   ├── recipecom.jsx
│   │   └── search.jsx
│   ├── store/
│   │   └── ReData.jsx
│   ├── App.css
│   ├── App.jsx
│   └── main.jsx
├── .env
├── .env.example
├── index.html
├── package.json
└── README.md
```

## Environment Variables

Create a `.env` file with the following variables:

```
VITE_COCKTAIL_API_KEY=your_api_key_here
```


## Acknowledgments

- [TheCocktailDB](https://www.thecocktaildb.com/) for providing the cocktail data API
- [Google Fonts](https://fonts.google.com/) for the beautiful typography
- [Unsplash](https://unsplash.com/) for the cocktail images
