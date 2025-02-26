Task Management App

Project Description

This is a full-stack task management application built using Next.js, TypeScript, and MongoDB. It provides full CRUD functionality for managing tasks, along with features like sorting, searching, and filtering. The UI is fully responsive, ensuring a seamless experience across different devices.

Technologies Used
	•	Frontend: Next.js, TypeScript, Redux Toolkit, Tailwind CSS
	•	Backend: Node.js, Express, MongoDB(@@@ I got some PostgreSQL server connection errors and had very little time remaining, so I used MongoDB instead.)
	•	State Management: Redux Toolkit
	•	Testing: Jest, React Testing Library
	*   React Query Devtools


BASE_URL will 3000 only and MONGO_URI will be Activated till one week.

  * MONGO_URI="mongodb+srv://pradhumnchoubey544:pradhumnchoubey544@cluster0.wzb0g.mongodb.net/myDatabase?retryWrites=true&w=majority"

  * BASE_URL="http://localhost:3000/api/items"	

Project Setup Instructions

Clone the Repository
First, clone the repository and navigate into the project directory.

Install Dependencies

Frontend Setup
	1.	Navigate to the client folder.
	2.	Run npm install to install all required dependencies.

Backend Setup
	1.	Navigate to the server folder.
	2.	Run npm install to install all required dependencies.

Configure the Database
The MongoDB connection URL is already set up in the .env file. Ensure MongoDB is running locally or use a cloud database like MongoDB Atlas.

Run the Project

Start the Backend
	1.	Navigate to the server folder.
	2.	Run npm run dev to start the backend using Nodemon.

Start the Frontend
	1.	Navigate to the client folder.
	2.	Run npm run dev to start the frontend.

Build the Frontend
To generate a production-ready build of the frontend, 
navigate to the client folder and run npm run build.
The backend does not require a build step; just use npm run dev to run it.