module.exports.index = function(app, req, res){
    var connection = app.config.dbconnection();
    var noticiasModel = new app.app.models.NoticiasDAO(connection);

    noticiasModel.get5Ultimas((error, result) => {
        
        res.render("home/index", {noticias: result});
    });

}