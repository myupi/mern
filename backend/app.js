import express from "express"
import cors from 'cors'

import db from "./database/db.js"

import blogRoutes from "./routes/routes.js"

const app = express()

app.use( cors() )
app.use( express.json())
app.use("/blogs", blogRoutes)

try {
    await db.authenticate()
    console.log('соеденение с бд успешен')
} catch (error) {
    console.log(`Error: ${error}`)
}


app.listen(8000, () => {
    console.log('Server http://localhost:8000/')
})
