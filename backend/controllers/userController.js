// const User = require('../models/userModel');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// // Sign up user
// const signupUser = async (req, res) => {
//     const { name, email, password } = req.body;
  
//     try {
//       // Check if the user already exists
//       const userExists = await User.findOne({ email });
//       if (userExists) {
//         return res.status(400).json({ message: 'User already exists' });
//       }
  
//       // Hash the password before saving it to the database
//       const salt = await bcrypt.genSalt(10); // Generate salt
//       const hashedPassword = await bcrypt.hash(password, salt); // Hash the password
  
//       // Create a new user with the hashed password
//       const user = new User({ name, email, password: hashedPassword });
//       await user.save();
  
//       // Respond with a success message
//       res.status(201).json({ message: 'User created successfully' });
//     } catch (error) {
//       // Handle any errors and send an error message
//       res.status(500).json({ message: error.message });
//     }
//   };

// // Sign in user
// const signinUser = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ message: 'Invalid email or password' });
//     }

//     const isMatch = await user.matchPassword(password);
//     if (!isMatch) {
//       return res.status(400).json({ message: 'Invalid email or password' });
//     }

//     const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
//     res.json({ message: 'Login successful', token });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// module.exports = { signupUser, signinUser };

const User = require('../models/userModel');
const { generateToken } = require('../config/jwt');

// Register a new user
const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if the user already exists (by email or username)
    const userExists = await User.findOne({
      $or: [{ email }, { username }]
    });

    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create a new user
    const user = await User.create({ username, email, password });

    // Send response with user details and token
    res.status(201).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      token: generateToken(user)
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Login an existing user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });

    // Validate password
    if (user && (await user.comparePassword(password))) {
      // Send response with user details and token
      res.json({
        _id: user._id,
        username: user.username,
        email: user.email,
        token: generateToken(user)
      });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Export functions for CommonJS
module.exports = {
  registerUser,
  loginUser
};
