module.exports = function(app) {

    app.get('/list/events', function(req, res) {

        // get the repos collection
        var events  = app.db.get('events');

        // execute the query to find those matched limiting to 20
        events.find({}, {limit: 30}, function(err, docs) {
            //console.log("Docs: " + app.util.inspect(docs, false, null))

            res.render('listEvents.jade', {
                events: docs
            });
        });
    });
};
