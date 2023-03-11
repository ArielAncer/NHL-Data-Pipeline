import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'NHL API',
      description: 'NHL Statistics CRUD API ',
      version: '1.0.0'
    }
  },
  apis: ['./src/routes/*.ts']
}

const swaggerSpec = swaggerJsdoc(options)

const swaggerDocs = (app, port) => {
  // Swagger Page
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

  // Swagger Documentation
  app.get('/docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.send(swaggerSpec)
  })
}

export default swaggerDocs
