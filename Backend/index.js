import express from "express"
import cors from "cors"
import bodyParser from "body-parser"

const app = express()

// Middleware
app.use(cors())
app.use(bodyParser.json())

// Define a simple GET route
app.get('/', (req, res) => {
  res.send('Citizen Reporting Backend is Running')
})

// API route to submit a new incident
app.post('/submit-incident', (req, res) => {
  const { title, description, category, location, images } = req.body

  console.log('Request body:', req.body)

  if (!title || !description || !category || !location) {
    return res.status(400).send({ message: 'Missing required fields'})
  }

  // Here, you would typically save the incident to a database
  // For now, we'll just log it to the console
  console.log(`New Incident Submitted:`)
  console.log(`Title: ${title}`)
  console.log(`Description: ${description}`)
  console.log(`Category: ${category}`)
  console.log(`Location: ${location}`)
  console.log(`Images: ${images}`)

  // Send response
  res.status(201).send({ message: 'Incident Submitted Successfully' })
})

// Start server on port 3000
app.listen(3000, () => {
  console.log('Server running on port 3000')
})
