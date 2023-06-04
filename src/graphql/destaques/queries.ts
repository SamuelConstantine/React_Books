import { gql } from "@apollo/client";

export const DESTAQUES = gql`
    query obterDestaques {
        destaques {
        lancamentos {
            titulo
            imagemCapa
            descricao
            opcoesCompra {
                preco
            }
        }
        maisVendidos {
            titulo
            imagemCapa
            descricao
            opcoesCompra {
                preco
            }
        }
    }
}
`