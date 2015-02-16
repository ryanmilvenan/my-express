module.exports = function(app) {

    app.get('/view/repo/:id', function(req, res) {

        // get the repos collection
        var repos  = app.db.get('repos');

        console.log("Req.Params: " + app.util.inspect(req.params, false, null))
        var q = {
            'id': parseInt(req.params.id)
        };
        
        // execute the query to find those matched limiting to 20
        var repo = repos.findOne(q, function(err, doc) {
            console.log("Doc: " + app.util.inspect(doc, false, null))

            res.render('viewRepo.jade', {
                repo: doc
            });
        });
    });
};
