const express = require('express');
const cors = require('cors');
const app = express();
const sdk = require('api')('@lodgify/v1.0#4zh1w3lagrrgj2');


app.use(cors({ origin: 'https://www.bnbtalu.com' }));



sdk.auth('jz+WSYVeXGV/qhURChompGmymedaEinC+VpVo8QIoUkEVlttAfsofXN8/OYcdX9I');

app.get('/calendarr/:id', (req, res) => {
    const id = req.params.id;
  sdk.getCalendarByProperty({start: '2021-1-1', end: '2024-1-30' , propertyId: id})
    .then(({ data }) => res.json(data))
    .catch(err => res.json(err));
});



const sdk1 = require('api')('@lodgify/v1.0#4zh1w3lagrrgj2');

sdk1.auth('jz+WSYVeXGV/qhURChompGmymedaEinC+VpVo8QIoUkEVlttAfsofXN8/OYcdX9I');


app.get('/guest/:id', (req, res) => {
    const id = req.params.id;
    sdk1.getAsync({id: id})
    .then(({ data }) => res.send(data))
    .catch(err => console.error(err));
});




const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log('Server running on port 3000'));
