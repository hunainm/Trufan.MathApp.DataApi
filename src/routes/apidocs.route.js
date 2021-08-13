const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const docs = require('../docs');

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(docs));

module.exports = router;