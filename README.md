# Art Pack Calculator

A React application that calculates the probability of getting an art pack based on the tez amount using the formula P(x) = 1 - e^(-x/σ) \* (1 + x/σ).

## Features

- Interactive slider to adjust tez amount
- Manual input option for precise values
- Real-time calculation of probability
- Dark/light mode toggle
- Quick reference table with common values
- Responsive design

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/YOUR_USERNAME/Art-Pack-Calculator.git
   cd Art-Pack-Calculator
   ```

2. Install dependencies

   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment to GitHub Pages

1. Update the `homepage` field in `package.json` with your GitHub username:

   ```json
   "homepage": "https://YOUR_USERNAME.github.io/Art-Pack-Calculator",
   ```

2. Deploy to GitHub Pages
   ```bash
   npm run deploy
   # or
   yarn deploy
   ```

## Built With

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Lucide React](https://lucide.dev/) - Icon library

## License

This project is licensed under the MIT License - see the LICENSE file for details.
