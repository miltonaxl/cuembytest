import app from "./src/app";

const PORT = process.env.PORT

app.listen(PORT, ()=> console.log(`On port localhost:${PORT}`))