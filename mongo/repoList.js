module.exports = function(app) {

    app.get('/', function(req, res) {

        // get the repos collection
        var repos  = app.db.get('repos');

        // execute the query to find those matched limiting to 20
        repos.find( {}, function(err, docs) {
            //console.log("Docs: " + app.util.inspect(docs, false, null))

            res.render('listRepos.jade', {
                repos: docs
            });
        });
    });

    app.get('/list/repos', function(req, res) {

        // get the repos collection
        var repos  = app.db.get('repos');

        // execute the query to find those matched limiting to 20
        repos.find( {}, function(err, docs) {
            //console.log("Docs: " + app.util.inspect(docs, false, null))

            res.render('listRepos.jade', {
                repos: docs
            });
        });
    });
};
