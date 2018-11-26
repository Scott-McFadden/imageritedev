const mongoose = require('mongoose');
//const MODELNAME = 'keyValueSets';
//const ROUTE = '/keyValueSetAPI';

module.exports = (app, ROUTE, MODELNAME) => {

    console.log(MODELNAME);
    const model = mongoose.model(MODELNAME);

    app.use(ROUTE + '/version', (req,res)=> {
        res.send({"Verison": 0.1});

    });


    app.route(ROUTE + '/take/:startat/:itemcount')
    .get( async (req,res) =>
    {
        console.log('take startat',req.params.startat);
        console.log('take itemcount',req.params.itemcount);

        try {
            const output = await model.find({})
                .skip(parseInt(req.params.startat))
                .limit(parseInt(req.params.itemcount));
            // console.log("output",output);
            res.send(output);

        } catch (err) {
            res.status(422).send(err);
        }
    })


    app.route(ROUTE + '/:id')
        .get( async (req, res) =>
        {
            try {
                const output = await model.findById(req.params.id);
                res.send(output);

            } catch (err) {
                res.status(422).send(err);
            }
        })
        .delete( async (req, res) => {
            try {
                const output = await model.findOneAndDelete({ _id: req.params.id});
                res.send(output);

            } catch (err) {
                res.status(422).send(err);
            }
        })
        .put( async (req, res) => {
            try {
                const output = await model.findOneAndUpdate({ _id: req.params.id}, req.body);
                //output.markModified('items');
                res.send(output);

            } catch (err) {
                res.status(422).send(err);
            }
        });

    app.route(ROUTE + '')
        .get( async (req,res) =>
        {
            try {
                const output = await model.find({});
                // console.log("output",output);
                res.send(output);

            } catch (err) {
                res.status(422).send(err);
            }
        })
        .post( async (req, res) => {
            //console.log("Post Body:", req.body);

            const output = new model(req.body);
            try {
                await output.save();
                res.send(output);
            } catch (err) {
                res.status(422).send(err);
            }

        });

    app.route(ROUTE+'/searchForOne')
        .post( async (req, res) =>
        {
            try {
                const output = await model.findOne(req.body);
                // console.log("output",output);
                res.send(output);

            } catch (err) {
                res.status(422).send(err);
            }
        });

    app.route(ROUTE+"/search")
        .post( async (req, res) =>
        {
            try {
                const output = await model.find(req.body);
                // console.log("output",output);
                res.send(output);

            } catch (err) {
                res.status(422).send(err);
            }
        });

    app.route(ROUTE + '/sort/:way')
        .get( async (req,res) =>
        {
            try {


                const output = await model.find({}).sort(req.params.way);
                // console.log("output",output);
                res.send(output);

            } catch (err) {
                res.status(422).send(err);
            }
        })
}
