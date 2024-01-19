const mongoose = require("mongoose");

require("dotenv").config();

//connection between nodejs and database

const dbConnect= () => {
      mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser:true,
        useUnifiedTopology: true,
      })
      .then( ()=> console.log("db connection is successfull"))
      
      .catch( (error) => {
        console.log("issue in db connection");
        console.error(error.message);
        
        process.exit(1);
      } );
}

module.exports = dbConnect;