import { useQuery } from "@apollo/client"
import { ILivro } from "../../interfaces/ILivro"
import { DESTAQUES } from "./queries"


type IDestaques = {
    destaques: { 
        lancamentos: ILivro[],
        maisVendidos: ILivro[]
    }
}

export const useDestaques = () => {
    const response = useQuery<IDestaques>(DESTAQUES, {
    })
    return response.data?.destaques
} 