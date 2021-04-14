import react from 'React'
import { pokemon } from '../interfaces/interface'
import styles from '../styles/main.module.css'
import { getpokemon } from '../interfaces/api'

const Index = () => {
    const bgcolors = {
        normal: "#A8A878",
        fighting: "#C03028",
        flying: "#A890F0",
        water: "#6890F0",
        fire: "#F08030",
        electric: "#F8D030",
        ice: "#98D8D8",
        grass: "#78C850",
        bug: "#A8B820",
        poison: "#A040A0",
        rock: "#B8A038",
        ground: "#E0C068",
        steel: "#B8B8D0",
        dragon: "#7038F8",
        ghost: "#705898",
        dark: "#705848",
        fairy: "#EE99AC",
        psychic: "#F85888",
    }

    return (
        <div>
            <h1>Página incial</h1>
        </div>
    )
}

export default Index