import { ReactElement, createContext, useContext } from "react";
import { ICarrinho } from "../../interfaces/ICarrinho";
import { useAdicionarItem, useCarrinho, useRemoverItem } from "../../graphql/carrinho/hooks";
import { IItemCarrinho } from "../../interfaces/IItemCarrinho";

export interface ICarrinhoContext {
    carrinho?: ICarrinho,
    adicionarItemCarrinho: (item: IItemCarrinho) => void
    removerItemCarrinho: (item: IItemCarrinho) => void
    carregando: boolean
}

export const CarrinhoContext = createContext<ICarrinhoContext>({
    adicionarItemCarrinho: () => null,
    removerItemCarrinho: () => null,
    carregando: false

})

interface CarrinhoProviderProps {
     children: ReactElement
}

const CarrinhoProvider = ({children}: CarrinhoProviderProps) => {

    const { data, loading: loadingCarrinho } = useCarrinho()

    const [ adicionarItem, {loading: loadingAdiciona }] = useAdicionarItem()
    const [ removerItem ] = useRemoverItem()

    const adicionarItemCarrinho = (item: IItemCarrinho) => {
        adicionarItem({
            variables: {
                item:{
                    livroId: item.livro.id,
                    quantidade: item.quantidade,
                    opcaoCompraId: item.opcaoCompra.id
                }
            }
        })     
    }


    const removerItemCarrinho = (item: IItemCarrinho) => {
        console.log("🚀 ~ file: index.tsx:42 ~ removerItemCarrinho ~ item:", item)
        removerItem({
            variables: {
                item:{
                    livroId: item.livro.id,
                    quantidade: item.quantidade,
                    opcaoCompraId: item.opcaoCompra.id
                }
            }
        })

    }

    return (
        <CarrinhoContext.Provider 
            value={{
                carrinho: data?.carrinho,
                adicionarItemCarrinho: adicionarItemCarrinho,
                removerItemCarrinho: removerItemCarrinho,
                carregando: loadingCarrinho || loadingAdiciona
            }}
        >
            {children}
        </CarrinhoContext.Provider>
    )
}

export const  useCarrinhoContext = ()=> {
    return useContext<ICarrinhoContext>(CarrinhoContext)
}

export default CarrinhoProvider