const mongoose = require('mongoose');
//const MODELNAME = 'keyValueSets';
//const ROUTE = '/keyValueSetAPI';

module.exports = (app ) => {

    const model = mongoose.model('announcements');


    app.route('/squawks/current')
        .get( async (req,res ) => {
            try {
                const d = new Date();

                const output = await model
                    .find({
                        startOn: {$lte: d.toISOString()},
                        endOn: {$gte: d.toISOString()}
                    })
                    .sort({priority: 'asc'});

                res.send(output);

            } catch (err) {
                res.status(422).send(err);
            }
        });

}
