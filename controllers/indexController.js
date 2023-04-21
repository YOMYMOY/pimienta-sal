const plates = require('../data/plates.json');

module.exports = {
    index : function(req, res, next) {
        res.render('index', { title: 'Pimienta & sal',
    plates });
      },
    detalleMenu : (req,res) => {
        const {id} = req.params;
        const plate = plates.find(plate => plate.id === +id);
        res.render('detalleMenu', { title: 'Detalle del menú',
    plate });
      }

}