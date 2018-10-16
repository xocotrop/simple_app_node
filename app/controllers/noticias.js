module.exports.noticias = function(app, req, res){
    var connection = app.config.dbconnection();    

    var noticiasModel = new app.app.models.NoticiasDAO(connection);

    noticiasModel.getNoticias((error,result) => {
        //res.send(result);
        res.render("noticias/noticias", {noticias: result});
    });
}

module.exports.noticia = function(app, req, res){
    var connection = app.config.dbconnection();    

        var noticiasModel = new app.app.models.NoticiasDAO(connection);
        var idNoticia = req.query;
        noticiasModel.getNoticia(idNoticia, (error,result) => {
            //res.send(result);
            res.render("noticias/noticia", {noticia: result});
        });
}