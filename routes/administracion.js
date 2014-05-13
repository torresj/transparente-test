/*
  Portal web transparente.ugr.es para publicar datos de la Universidad de Granada
  Copyright (C) 2014  Jaime Torres Benavente

  This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

//Variable para las configuraciones
var conf = require('../app');



// Gestión de la pagina de personal

exports.personal = function(req, res){
  var personal=conf.config.personal;
  res.render(personal.plantilla, { seccion: personal.nombre , texto: personal.texto});
};

// Gestión de la pagina de informacion economica

exports.infoEco = function(req, res){
  var infoEco=conf.config.infoEco;
  res.render(infoEco.plantilla, { seccion: infoEco.nombre , texto: infoEco.texto});
};