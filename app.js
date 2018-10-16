var app = require('./config/server');

// var rotaHome = require('./app/routes/home');
// var rotaNoticias = require('./app/routes/noticias');
// var rotaFormulario = require('./app/routes/formulario_inclusao_noticia');
// rotaHome(app);
// rotaNoticias(app);
// rotaFormulario(app);

app.listen(3000, _ => {
    console.log('Servidor ON');
});