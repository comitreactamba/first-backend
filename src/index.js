const express = require('express');
const connection = require('./connection');

const app = express();

const users = [
  {
    id: 125,
    name: 'Pepe',
    surname: 'Suarez',
  },
  {
    id: 100,
    name: 'Maria',
    surname: 'Suarez',
  },
];

const products = [
  {
    id: 10,
    name: 'Monitor',
    price: '50000',
  },
  {
    id: 38,
    name: 'Mouse',
    surname: '5200',
  },
];

app.get('/users', (req, res) => {
  const sql = `SELECT * FROM clientes`;

  connection.query(sql, (err, result) => {
    if (err) {
      console.log('Error al obtener los usuarios');
    } else {
      res.json(result);
    }
  });
});

app.get('/users/:id', (req, res) => {
  const userId = req.params.id;

  res.send(`Datos del usuario ${userId}`);
});

app.get('/products', (req, res) => {
  const sql = `SELECT * FROM productos`;

  connection.query(sql, (err, result) => {
    if (err) {
      console.log('Error al obtener los productos');
    } else {
      res.json(result);
    }
  });
});

app.post('/users', (req, res) => {
  res.send('Agregar un usuario');
});

app.put('/users/:id', (req, res) => {
  const userId = req.params.id;

  res.send(`Modificar los datos del usuario ${userId}`);
});

app.delete('/users/:id', (req, res) => {
  const userId = req.params.id;

  res.send(`Eliminar el usuario ${userId}`);
});

app.listen(8000);
