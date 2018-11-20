const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const configurationsSchema  = new Schema({
    name: String,
    items: [ Schema.Types.Mixed ]




    }
);

const Configurations = mongoose.model('configurations', configurationsSchema );
module.exports = Configurations;

/*

Since it is a schema-less type, you can change the value to anything else you like, but Mongoose
loses the ability to auto detect and save those changes. To tell Mongoose that the value of a Mixed
type has changed, you need to call doc.markModified(path), passing the path to the Mixed type
you just changed.

*/
