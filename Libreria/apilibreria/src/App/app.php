<?php

use Slim\Factory\AppFactory;
use Slim\Exception\NotFoundException;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Message\ResponseInterface;
// cargamos el autoload para que pueda detectar el resto de las clases
require __DIR__ . '/../../vendor/autoload.php';


// creamos la aplicación php
$app = AppFactory::create();
$app->get("/hello", function(ServerRequestInterface $request, ResponseInterface $response, $args) {
	print("Hello world!");
});

//Cargamos en memoria los archivos de rutas que contendrán los entrypoints a cada una de las tablas.
//los entrypoints harán referencia a las acciones CRUD de una tabla de nuestra BD
require __DIR__ . "/../Routes/libros.php";
require __DIR__ . "/../Routes/categorias.php";
require __DIR__ . "/../Routes/usuarios.php";


$app->run();