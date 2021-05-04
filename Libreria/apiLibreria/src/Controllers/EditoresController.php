<?php
    namespace App\Controllers;
    use Psr\Http\Message\ResponseInterface as Response;
    use Psr\Http\Message\ServerRequestInterface as Request;
    use App\Model\CategoriasModel;    

    class EditoresController {
    
        public function new(Request  $request, Response $response, $args){
            $response->getBody()->write("Insertar una nueva Categoria");
            return $response
                ->withHeader('Content-Type', 'application/json')
                ->withStatus(200);
        }
       
        public function getAll($request, $response, $args){
            $editores = EditoresModel::getAll();
            $editoresjson = json_encode($editores);
            $response->getBody()->write($editoresjson);
            return $response
                ->withHeader('Content-Type', 'application/json')
                ->withStatus(200);
        }
    }