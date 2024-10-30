const mongoose = require('mongoose');

const treeSchema = new mongoose.Schema({
    treeName: {
        type: String,
       required: true
    },
    description: {
        type: String
    },
    image: {
        type: String    
    }
});

module.exports = mongoose.model("Tree", treeSchema);