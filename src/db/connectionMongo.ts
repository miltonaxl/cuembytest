import  mongoose   from "mongoose";

const db_connection = async() =>{
  try {
    const connection = await mongoose.connect(
        `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_URL}/${process.env.DB_DATABASE}?retryWrites=true&w=majority`, 
        {
          useNewUrlParser: true,
          useUnifiedTopology: true 
        }
      
      );

      if(connection)
        console.log('connection db is ON')
    return connection;
  } catch ({message}) {
      console.log(message, '---', process.env.DB_USER)
  }
      
}


export default db_connection();
  