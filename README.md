# bnf_alumni

## Installation

Follow these steps to set up the project on your local machine:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/bnf-alumni-crud.git
   cd bnf-alumni-crud
   

2. **Install dependencies:**
```bash
npm install


3. **Set up MongoDB:**

Ensure MongoDB is running locally on your machine or use a MongoDB Atlas connection string. Update the MongoDB connection string in app.js if needed:

```javascript
// app.js
mongoose.connect('mongodb://localhost:27017/bnf_alumni', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

4. **Start the application:**

```bash
node app.js
