var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// Change the database URI with yours
const uri = "mongodb+srv://gouthamkrishnamarolix:vAgACtfWlrr7oZQr@cluster0.tgtccal.mongodb.net/your-database-name?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('Error connecting to MongoDB Atlas:', err));
