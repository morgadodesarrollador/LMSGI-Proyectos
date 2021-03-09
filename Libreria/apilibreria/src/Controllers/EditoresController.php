<?php
    namespace App\Controllers;
    use Psr\Http\Message\ResponseInterface as Response;
    use Psr\Http\Message\ServerRequestInterface as Request;
#use App\Controllers\BaseController;
    use App\Model\LibrosModel;    

    class EditoresController {
        
        public function getAll(Request $request, Response $response, $args){
           // $libros = LibrosModel::getAll();
           // $librosJson = json_encode($libros);
           // $librosJson = "Listado de libros";
            //$response->getBody()->write($librosJson);
            $response->getBody()->write("Listado de Editores");
            return $response
                ->withHeader('Content-Type', 'application/json')
                ->withStatus(200);
        }
    }