module.exports = function(app) {

    app.get('/view/event/:id', function(req, res) {

        // get the repos collection
        var events  = app.db.get('events');

        var q = {
            'id': req.params.id
        };
        
        var _event = events.findOne(q, function(err, doc) {
            console.log("Doc: " + app.util.inspect(doc, false, null))

            res.render('viewEvent.jade', {
                event: doc
            });
        });
    });
};
