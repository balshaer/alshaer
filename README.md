[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FBrianRuizy%2Fb-r.io)

# My Personal Website

My personal portfolio website designed to be simplistic and clean while including features like dark mode toggle, muilt languages, an projects page, and more.

## Tech Stack

backend:

- [Node.js](https://nodejs.org/en) / TypeScript
- [Mongoose](https://mongoosejs.com/docs/)(Database)
- [Express.js](https://expressjs.com/)

frontend:

- [Tailwind CSS](https://tailwindcss.com) (Styling)
- [Shadcn UI](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/) (Animations)

## Getting Started

To get started with the project, follow these steps:

1. **Install Dependencies**: Ensure you have Node.js v18.17.0+ installed on your machine, then run `npm install` to install the necessary dependencies.

2. **Environment Variables**: Copy `.env.example` to a new `.env.local` file and fill in the required environment variables.

3. **Database Setup**: See [Database Setup](#database-setup) section below for instructions on setting up the database.

4. **Start Developing**: Run `npm run dev`. This will automatically create the .contentlayer files and start the Next.js development server.

## Database Setup

To set up the database for this project using Mongoose, follow these steps:

1. Make sure you have MongoDB installed and running on your local machine or set up a MongoDB Atlas account for cloud hosting.

2. Create a new database for your project either locally or on MongoDB Atlas.

3. Update the `MONGODB_URI` environment variable in your project's `.env.local` file with the connection string to your MongoDB database.
