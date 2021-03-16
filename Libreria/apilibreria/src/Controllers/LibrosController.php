<?php
    namespace App\Controllers;
    use Psr\Http\Message\ResponseInterface as Response;
    use Psr\Http\Message\ServerRequestInterface as Request;
#use App\Controllers\BaseController;
    use App\Model\LibrosModel;    

    class LibrosController {
        
        public function new(Request $request, Response $response, $args){
            $response->getBody()->write("Insertar un nuevo Libro");
            return $response
                ->withHeader('Content-Type', 'application/json')
                ->withStatus(200);
        }

        public function getFilter(Request $request, Response $response, $args){
            $parametros = $request->getQueryParams();
            $precio = $parametros['precio'];
            $ciudad = $parametros['ciudad'];
            $ed = $parametros['editorial'];
            var_dump($precio);
          /*  $args = array ($precio);
            $libros = LibrosModel::getFilter($args);
            $librosJson = json_encode($libros);
            $response->getBody()->write($parametros);
            return $response
                ->withHeader('Content-Type', 'application/json')
                ->withStatus(200);*/
        }
        public function getAll(Request $request, Response $response, $args){
           
            $libros = LibrosModel::getAll();
            $librosJson = json_encode($libros);
           // $librosJson = "Listado de libros";
            $response->getBody()->write($librosJson);
            return $response
                ->withHeader('Content-Type', 'application/json')
                ->withStatus(200);
        }
    }