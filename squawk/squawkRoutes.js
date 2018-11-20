const mongoose = require('mongoose');

const Announcements = mongoose.model('announcements');

module.exports = (app) =>
{
    app.use('/squawk/version', (req,res)=> {
        res.send({"squawkVerison": 0.1});

    });

    app.route('/squawk/:id')
    .get( async (req, res) =>
    {
        try {
            const output = await Announcements.findById(req.params.id);
            res.send(output);

        } catch (err) {
            res.status(422).send(err);
        }
    })
    .delete( async (req, res) => {
        try {
            const output = await Announcements.findOneAndDelete({ _id: req.params.id});
            res.send(output);

        } catch (err) {
            res.status(422).send(err);
        }
    })
    .put( async (req, res) => {
        try {
            const output = await Announcements.findOneAndUpdate({ _id: req.params.id}, req.body);
            res.send(output);

        } catch (err) {
            res.status(422).send(err);
        }
    });

    app.route('/squawk')
    .get( async (req,res) =>
    {
        try {
            const output = await Announcements.find({});
            res.send(output);

        } catch (err) {
            res.status(422).send(err);
        }
    })
    .post( async (req, res) => {
        console.log("Post Body:", req.body);

        const announcement = new Announcements(req.body);
        try {
            await announcement.save();
            res.send(announcement);
        } catch (err) {
            res.status(422).send(err);
        }


    });

}
