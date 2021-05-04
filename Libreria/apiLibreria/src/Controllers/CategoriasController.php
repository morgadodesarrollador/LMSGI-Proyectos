<?php
    namespace App\Controllers;
    use Psr\Http\Message\ResponseInterface as Response;
    use Psr\Http\Message\ServerRequestInterface as Request;
    use App\Model\CategoriasModel;    

    class CategoriasController {
    
        
       
        public function getAll($request, $response, $args){
            $categorias = CategoriasModel::getAll();
            var_dump($categorias);
            $categoriasjson = json_encode($categorias);
            $response->getBody()->write($categoriasjson);
            return $response
                ->withHeader('Content-Type', 'application/json')
                ->withStatus(200);
        }
    }