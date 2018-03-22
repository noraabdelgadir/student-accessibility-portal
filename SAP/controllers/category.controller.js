var Graphs = require('../models/Graph');

function loadCategory (req, res, next){

    res.sendFile('/SAP/views/CategoryGraph/categories.html', {'root': '../'})
}
