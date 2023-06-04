// src/graphql/carrinho/hooks.ts
import { useMutation, useQuery } from "@apollo/client"
import { ICarrinho } from "../../interfaces/ICarrinho"
import { OBTER_CARRINHO, ACICIONAR_ITEM, REMOVER_ITEM } from "./queries"

export const useCarrinho = () => {
    return useQuery<{ carrinho: ICarrinho }>(OBTER_CARRINHO)
}


export const useAdicionarItem = () => {
    return useMutation(ACICIONAR_ITEM, {
        refetchQueries: [
            'ObterCarrinho'
        ] 
    })
}

export const useRemoverItem = () => {
    return useMutation(REMOVER_ITEM, {
        refetchQueries: [
            'ObterCarrinho'
        ] 
    })
}