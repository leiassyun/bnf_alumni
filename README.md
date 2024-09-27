# bnf_alumni

## Examples
<img width="1145" alt="Screenshot 2024-09-27 at 2 11 11 AM" src="https://github.com/user-attachments/assets/c663c00a-a372-4e10-bf1a-6aa43458117e">
<img width="1145" alt="Screenshot 2024-09-27 at 2 11 22 AM" src="https://github.com/user-attachments/assets/0ab99d7d-8c89-4f3d-a5c9-ccb290dccf3a">
<img width="1145" alt="Screenshot 2024-09-27 at 2 11 41 AM" src="https://github.com/user-attachments/assets/99d56fd4-3c2a-497e-8bea-6e9fbd7ac6e1">



## Installation

Follow these steps to set up the project on your local machine:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/bnf-alumni-crud.git
   cd bnf-alumni-crud
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up MongoDB:**

   Ensure MongoDB is running locally on your machine or use a MongoDB Atlas connection string. Update the MongoDB connection string in app.js if needed:

   ```javascript
   // app.js
   mongoose.connect('mongodb://localhost:27017/bnf_alumni', { useNewUrlParser: true, useUnifiedTopology: true })
     .then(() => console.log('MongoDB connected'))
     .catch(err => console.error('MongoDB connection error:', err));
   ```
4. **Start the application:**

   ```bash
   node app.js
   ```
