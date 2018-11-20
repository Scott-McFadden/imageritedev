const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const keyValueSetSchema = new Schema ({
   name: String,
   items: [ { key: String, value: Schema.Types.Mixed }]

});

const KeyValueSets = mongoose.model('keyValueSets', keyValueSetSchema);
module.exports = KeyValueSets;

