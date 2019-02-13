'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _patyController = require('Controllers/patyController');

var _patyController2 = _interopRequireDefault(_patyController);

var _officeController = require('Controllers/officeController');

var _officeController2 = _interopRequireDefault(_officeController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_express2.default.json());

app.get('/', function (req, res) {
    return res.json({ 'message': 'Welcome to Politico Platform' });
});
app.post('/api/v1/parties', _patyController2.default.create);
app.post('/api/v1/offices', _officeController2.default.create);
app.get('api/v1/offices', _officeController2.default.getAllOffices);
app.get('/api/v1/parties', _partyController2.default.getAllParties);
app.get('api/v1/offices/:id',_officeController2.default.getOne);
app.get('/api/v1/parties/:id',_partyController2.default.getOne);
app.patch('/api/v1/parties/:id',_partyController2.default.editParty);
app.delete('/api/v1/parties/:id',_partyController2.default.deleteParty);
app.patch('/api/v1/offices/:id',_partyController2.default.editOffice);
app.delete('/api/v1/offices/:id',_partyController2.default.deleteOffice);

var port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log('You are running on port ' + port);
});

exports.default = app;