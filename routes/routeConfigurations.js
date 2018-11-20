const mongoose = require('mongoose');

const Configurations = mongoose.model('configurations');

module.exports = (app) =>
{
    app.use('/configAPI/version', (req,res)=> {
        res.send({"configAPIVerison": 0.1});

    });

    app.route('/configAPI/:id')
        .get( async (req, res) =>
        {
            try {
                const output = await Configurations.findById(req.params.id);
                res.send(output);

            } catch (err) {
                res.status(422).send(err);
            }
        })
        .delete( async (req, res) => {
            try {
                const output = await Configurations.findOneAndDelete({ _id: req.params.id});
                res.send(output);

            } catch (err) {
                res.status(422).send(err);
            }
        })
        .put( async (req, res) => {
            try {
                const output = await Configurations.findOneAndUpdate({ _id: req.params.id}, req.body);
                //output.markModified('items');
                res.send(output);

            } catch (err) {
                res.status(422).send(err);
            }
        });

    app.route('/configAPI')
        .get( async (req,res) =>
        {
            try {
                const output = await Configurations.find({});
               // console.log("output",output);
                res.send(output);

            } catch (err) {
                res.status(422).send(err);
            }
        })
        .post( async (req, res) => {
            //console.log("Post Body:", req.body);

            const announcement = new Configurations(req.body);
            try {
                await announcement.save();
                res.send(announcement);
            } catch (err) {
                res.status(422).send(err);
            }

        });

}
