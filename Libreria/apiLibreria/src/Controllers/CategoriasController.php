<?php
    namespace App\Controllers;
    use Psr\Http\Message\ResponseInterface as Response;
    use Psr\Http\Message\ServerRequestInterface as Request;
    use App\Model\CategoriasModel;    

    class CategoriasController {
        public function new(Request $request, response $response, $args){
            echo "nueva categoria...";
            $parametros = $request->getParsedBody();
           // $result = UsuariosModel::new($parametros); 
            $categoriaid = $parametros['categoriaid'];
            $nombre =$parametros['nombre_categoria'];
            $valores = array($categoriaid, $nombre);
            $resultado = CategoriasModel::new($parametros);
            $response->getBody()->write($resultado);
            return $response
                ->withHeader('Content-Type', 'application/json')
                ->withStatus(200);

        }
        public function getAll($request, $response, $args){
            $categorias = CategoriasModel::getAll();
            $categoriasjson = json_encode($categorias);
            $response->getBody()->write($categoriasjson);
            return $response
                ->withHeader('Content-Type', 'application/json')
                ->withStatus(200);
        }
    }