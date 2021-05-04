<?php
namespace App\Model;
use App\Config\DB;

//definimos LibrosModel como una clase estática:
//no se puede hacer un new, no hay $this, no hay método __contruct()
class CategoriasModel {
    private static $table = 'categorias';
    private static $DB;

    public static function conexionDB(){
        CategoriasModel::$DB = new DB();
    }
    public static function getFilter($sql, $param){
        echo $sql;
        $data = CategoriasModel::$DB->run($sql, $param);
        return $data->fetchAll();
    }

    public static function getAll(){
        echo "categoriasModel";
        CategoriasModel::conexionDB();
        $sql = "Select * from categorias";
        echo $sql;
        $data = CategoriasModel::$DB->run($sql, []);
        return $data->fetchAll();
    }
    public static function show($param){
        LibrosModel::conexionDB();
        $sql = 'SELECT * from libros where libro_id = ?';
        $data = CategoriasModel::$DB->run($sql, $param);
        return $data->fetch();
    }
}