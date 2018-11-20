const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const announcementSchema  = new Schema({

    title: {                   // title of article
        type: String,
        default: ''
    },
    url: String,              // optional URL
    content: {                // body of message
        type: String,
        default: ''
    },
    contentIsHTML: {           // set to true if content is html encoded
        type: Boolean,
        default: false
    },
    createdBy: String,          // who created the announcement
    createdOn: {                // created on or last updated on what date
        type: Date,
        default: Date.now()

    },
    startOn: {                  // date scheduled to start
        type: Date,
        default: Date.now()

    },
    endOn: {                    // date scheduled to end
        type: Date,
        default: Date.now() + (1000 * 60 * 60 * 24)
    },
    priority: {                 // order of display (lower at first)
        type: Number,
        default: 3
    },
    iconName: String            // name of material icon that should be used in title - default is none


});

const Announcement = mongoose.model('announcements', announcementSchema);
module.exports = Announcement;
