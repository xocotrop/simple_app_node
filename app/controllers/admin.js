module.exports.formulario_inclusao_noticia = function(app, req, res){
    res.render("admin/form_add_noticia", {validacao : {}, noticia: {}});
}

module.exports.noticias_salvar = function(app, req, res){
    var noticias = req.body;
        
    req.assert('titulo','Título é obrigatório').notEmpty();
    req.assert('resumo','Resumo é obrigatório').notEmpty();
    req.assert('resumo','Resumo deve conter entre 10 e 100 chars').len(10, 100);
    req.assert('autor','Autor é obrigatório').notEmpty();
    req.assert('data_noticia','Data é obrigatório').notEmpty().isValidDate();
    req.assert('noticia','Notícia é obrigatório').notEmpty();


    var errors = req.validationErrors();

    console.log(errors);
    
    if(errors){
        res.render("admin/form_add_noticia", {validacao : errors, noticia : noticias});
        return;
    }

    var connection = app.config.dbconnection();
    var noticiasModel = new app.app.models.NoticiasDAO(connection);

    noticiasModel.salvarNoticia(noticias, (error, result) => {
        res.redirect("/noticias");
    });
}