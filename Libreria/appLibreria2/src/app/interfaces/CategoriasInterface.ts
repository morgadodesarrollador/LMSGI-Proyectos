export interface ICategoria {
  categoriaid: string;
  nombre_categoria: string;
}


export interface MsnApiCategorias{
  status?: string;
  errors?: string;
  data?: ICategoria;
}
