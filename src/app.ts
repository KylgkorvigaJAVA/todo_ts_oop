import express from 'express'
const app = express()

app.listen(3011, () => {
    console.log('Server is running at http://localhost:3011')
})

// kasuta "tsc" asemel - "tsc.cmd"