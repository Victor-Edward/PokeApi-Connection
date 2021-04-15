import React, { useState, useMemo, useEffect } from 'react'
import { pokemon } from '../interfaces/interface'
import styles from '../styles/main.module.css'
import { getpokemon } from '../interfaces/api'

const MainPage = () => {
    
    

    const changeColor = () => {
        const body = document.body
        
        const bgcolors:any = {
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

        if (displayPokemon) {
            const types = displayPokemon.types.map(type => bgcolors[type.type.name])
            if (types.length == 1) {
                body.style.backgroundImage = `linear-gradient(to bottom right, ${types.join(',')}, ${types.join(',')})`
            } else {
                body.style.backgroundImage = `linear-gradient(to bottom right, ${types.join(',')})`
            }
            
        }
            
        
    }

    const [displayPokemon, setDisplayPokemon] = useState <pokemon> ()

    const load = async (inputPokemon: string) => {
        const loadData = await getpokemon(inputPokemon)
        setDisplayPokemon(loadData)
        
    }

    useEffect(changeColor, [displayPokemon])

    return (
        <div className={styles.container}>
            <div className={styles.greetings}>
                <h1>Seja bem vindo ao PokeApi, para começar, digite um pokemon e pressione Enter</h1>
                <input onKeyPress={(e:any) => {if (e.code === "Enter") {load(e.target.value)}}} type="text"/>
            </div>
            <div className={styles.pokemon}>
                <div className={styles.heading}>
                    <p>{displayPokemon?.name}</p>
                    <p>Id: {displayPokemon?.id}</p>
                </div>
                <div className={styles.image}>
                    <img src={displayPokemon?.sprites.front_default} alt=""/>
                    <img src={displayPokemon?.sprites.back_default} alt=""/>
                </div>
                <div className={styles.text}>
                    <div className={styles.types}>
                        <p id={styles.typesHeading}>Tipos</p>
                        {displayPokemon?.types ? displayPokemon.types.map(type => {return (
                            <p className="pokemonType">{type.type.name}</p>
                        )}):null}
                    </div>
                    <div className={styles.stats}>
                        <p id={styles.statsHeading}>Stats</p>
                        <p><strong>Weight: </strong> {displayPokemon ? displayPokemon.weight / 10 : null} Kg</p>
                        <p><strong>Height: </strong> {displayPokemon ? displayPokemon.height / 10 : null} m</p>
                        {displayPokemon?.stats ? displayPokemon.stats.map(stats => {return (
                            <p><strong>{stats.stat.name}: </strong>{stats.base_stat}</p>
                        )}):null}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MainPage