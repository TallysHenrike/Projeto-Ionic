import { Categoria } from '../categorias/categorias.model';

export interface Evento{
    idEvento: number;
    categoria: Categoria;
    titulo: string;
    descricao: string;
    corpo: string;
    imagemPrincipal: string;
    dataDeInicio: Date;
    quantidadeDeVagas: number;
    urlDoGoogleMaps: string;
    dataDeCadastro: Date;
    dataDeAtualizacao: Date;
}