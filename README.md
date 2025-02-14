# CareerExchange - Job Bidding Platform

A full-stack web application that enables employers to post jobs and applicants to bid on them. Built with React, Node.js, Express, and PostgreSQL.

## 🚀 Features

- **User Authentication**: Secure JWT-based authentication with role-based access control
- **Job Posting**: Employers can create, manage, and delete job postings
- **Bidding System**: Applicants can bid on jobs with custom proposals and rates
- **Real-time Updates**: Instant updates for bid statuses and job modifications
- **Responsive Design**: Modern UI built with Tailwind CSS and Shadcn UI components

## 🛠️ Tech Stack

### Frontend
- React
- Tailwind CSS
- Shadcn UI Components
- Axios for API calls
- React Router for navigation

### Backend
- Node.js
- Express.js
- PostgreSQL
- JWT for authentication
- CORS for security

## 🏗️ Project Structure

```
career-exchange-platform/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── contexts/      # React contexts (auth, etc.)
│   │   ├── pages/         # Page components
│   │   └── services/      # API service layers
│   └── ...
└── server/                # Backend Express application
    ├── src/
    │   ├── controllers/   # Route controllers
    │   ├── middleware/    # Express middlewares
    │   ├── models/        # Database models
    │   └── routes/        # API routes
    └── ...
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- PostgreSQL
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Yashman-Singh/career-exchange-platform.git
   cd job-bidding-platform
   ```

2. Install dependencies:
   ```bash
   # Install client dependencies
   cd client && npm install
   
   # Install server dependencies
   cd ../server && npm install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env` in the server directory
   - Update with your database credentials and JWT secret

4. Start the development servers:
   ```bash
   # Start client (in client directory)
   npm run dev

   # Start server (in server directory)
   npm run dev
   ```

## 🔒 Environment Variables

### Server
```env
NODE_ENV=development
PORT=3000
DB_USER=your_db_user
DB_HOST=your_db_host
DB_NAME=your_db_name
DB_PASSWORD=your_db_password
DB_PORT=5432
JWT_SECRET=your_jwt_secret
```

### Client
```env
VITE_API_URL=http://localhost:3000/api
```

## 🌟 Key Features Demonstrated

- Full-stack development with modern JavaScript
- RESTful API design
- Database modeling and relationships
- Authentication and authorization
- Error handling and validation
- Responsive UI/UX design
- State management
- Security best practices

## 🔐 Security Features

- JWT-based authentication
- Password hashing with bcrypt
- CORS protection
- Environment variable management
- SQL injection prevention
- XSS protection

## 🚀 Deployment

The application is deployed on Render:
- Frontend: [https://careerexchange.onrender.com](https://careerexchange.onrender.com)
- Backend: [https://careerexchange.onrender.com/api](https://careerexchange.onrender.com/api)

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

