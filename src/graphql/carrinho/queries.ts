import { gql } from "@apollo/client";

export const OBTER_CARRINHO = gql`
 query ObterCarrinho {
  carrinho {
    total
    itens{
      quantidade
      opcaoCompra {
        preco
        id
      }
      livro {
        titulo
        id
        imagemCapa
        descricao
        autor {
          nome
        }
      }
    }
  }
}
`

export const ACICIONAR_ITEM = gql`
    mutation AdicionarItem($item: ItemCarrinhoInput!) {
    adicionarItem(item: $item) 
    }
`


export const REMOVER_ITEM = gql`
    mutation RemoverItem($item: ItemCarrinhoInput!) {
    removerItem(item: $item)
  } 
`