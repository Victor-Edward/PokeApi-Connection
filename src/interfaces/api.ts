import { pokemon } from '../interfaces/interface'
import axios from 'axios'

export const getpokemon = async (inputPokemon: string) => {
    const api = axios.create({
        baseURL: "https://pokeapi.co/api/v2/",
    })

    const result = await api.get <pokemon> (`pokemon/${inputPokemon}`).then(response => {
        return response.data
    }) 

    return result
}