module.exports = (app) => {
    
    app.post("/noticias/salvar")

    app.get('/noticias', (req,res) => {
        app.app.controllers.noticias.noticias(app,req,res);
    });

    app.get('/noticia', (req,res) => {
        app.app.controllers.noticias.noticia(app,req,res);
    });
};