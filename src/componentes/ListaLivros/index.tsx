import { ICategoria } from "../../interfaces/ICategoria"
import CardLivro from "../CardLivro"
import { useReactiveVar } from "@apollo/client";

import './ListaLivros.css'
import { AbBotao, AbCampoTexto } from "ds-alurabooks"
import { useEffect, useState } from "react"
import { useLivros } from "../../graphql/livros/hooks"
import { filtroLivrosVar, livrosVar } from "../../graphql/livros/state"

interface ListaLivrosProps {
    categoria: ICategoria
}

  

const ListaLivros = ({ categoria }: ListaLivrosProps) => {

    const [textBusca, setTextoBusca] = useState('')

    useEffect(() =>{
        filtroLivrosVar({
            ...filtroLivrosVar(),
            titulo: textBusca.length >=3 ? textBusca : ''

        })
    }, [textBusca])

    filtroLivrosVar({
        ...filtroLivrosVar(),
        categoria
    })

    const livros = useReactiveVar(livrosVar);


    useLivros()

    //const { data: produtos } = useQuery(['buscaLivrosPorCategoria', categoria], () => obterProdutosDaCategoria(categoria))
    return <section>
        <form  style={{maxWidth: '80%', margin: '0 auto', textAlign:"center"}}>
            <AbCampoTexto value={textBusca} onChange={setTextoBusca} placeholder="Digite o título"/>
           
        </form>
        <div className="livros">

            {livros.map(livro => <CardLivro livro={livro} key={livro.id} />)} 
        </div>
    </section>
    }
export default ListaLivros

