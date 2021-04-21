import React, { useState, useEffect } from 'react'
import { pokemon } from '../interfaces/interface'
import styles from '../styles/main.module.css'
import { getpokemon } from '../interfaces/api'
import normalIcon from '../assets/images/pokemon_type_icons/normal.png' 
import bugIcon from '../assets/images/pokemon_type_icons/bug.png' 
import darkIcon from '../assets/images/pokemon_type_icons/dark.png' 
import dragonIcon from '../assets/images/pokemon_type_icons/dragon.png' 
import electricIcon from '../assets/images/pokemon_type_icons/electric.png' 
import fairyIcon from '../assets/images/pokemon_type_icons/fairy.png' 
import fightingIcon from '../assets/images/pokemon_type_icons/fighting.png' 
import fireIcon from '../assets/images/pokemon_type_icons/fire.png' 
import flyingIcon from '../assets/images/pokemon_type_icons/flying.png' 
import ghostIcon from '../assets/images/pokemon_type_icons/ghost.png' 
import grassIcon from '../assets/images/pokemon_type_icons/grass.png' 
import groundIcon from '../assets/images/pokemon_type_icons/ground.png' 
import iceIcon from '../assets/images/pokemon_type_icons/ice.png' 
import poisonIcon from '../assets/images/pokemon_type_icons/poison.png' 
import psychicIcon from '../assets/images/pokemon_type_icons/psychic.png' 
import rockIcon from '../assets/images/pokemon_type_icons/rock.png' 
import steelIcon from '../assets/images/pokemon_type_icons/steel.png' 
import waterIcon from '../assets/images/pokemon_type_icons/water.png' 

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
            poison: "#812281",
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
            if (types.length === 1) {
                body.style.backgroundImage = `linear-gradient(to bottom right, ${types.join(',')}, ${types.join(',')})`
            } else {
                body.style.backgroundImage = `linear-gradient(to bottom right, ${types.join(',')})`
            }   
        }
    }

    const icons:any = {
        normal: normalIcon,
        fighting: fightingIcon,
        flying: flyingIcon,
        water: waterIcon,
        fire: fireIcon,
        electric: electricIcon,
        ice: iceIcon,
        grass: grassIcon,
        bug: bugIcon,
        poison: poisonIcon,
        rock: rockIcon,
        ground: groundIcon,
        steel: steelIcon,
        dragon: dragonIcon,
        ghost: ghostIcon,
        dark: darkIcon,
        fairy: fairyIcon,
        psychic: psychicIcon,
    }

    const [displayPokemon, setDisplayPokemon] = useState <pokemon> ()

    const load = async (inputPokemon: string) => {
        const loadData = await getpokemon(inputPokemon.toLowerCase())
        setDisplayPokemon(loadData)  
    }
    
    function capitalizeFirstLetter(name: any) {
        if (name){
            return name.charAt(0).toUpperCase() + name.slice(1);
        }
      }

    useEffect(changeColor, [displayPokemon])

    return (
        <div className={styles.container}>
            <div className={styles.greetings}>
                <h2>Seja bem vindo ao PokeApi, para começar, digite um pokemon e pressione Enter</h2>
                <input 
                onKeyPress={(e:any) => {if (e.code === "Enter") {load(e.target.value)}}} 
                type="text"
                placeholder="Tente 'Charizard'"
                />
            </div>
            {displayPokemon ? (
                <div className={styles.pokemon}>
                    <div className={styles.heading}>
                        <p>{capitalizeFirstLetter(displayPokemon?.name)}</p>
                        <p>Id: {displayPokemon?.id}</p>
                    </div>
                    <div className={styles.image}>
                        <img src={displayPokemon?.sprites.front_default} alt=""/>
                        <img src={displayPokemon?.sprites.back_default} alt=""/>
                    </div>
                    <div className={styles.text}>
                        <div className={styles.types}>
                            <p id={styles.typesHeading}><strong>Tipos</strong></p>
                            <p></p>
                            <div className={styles.typesContent}>
                                
                                {displayPokemon?.types ? displayPokemon.types.map(type => {return (
                                    <>
                                        <img className={styles.icons} src={icons[type.type.name]} alt="icons"/>
                                        <p className="pokemonType">{capitalizeFirstLetter(type.type.name)}</p>
                                    </>
                                )}):null}
                            </div>
                        </div>
                        <div className={styles.stats}>
                            <p id={styles.statsHeading}><strong>Stats</strong></p>
                            <p></p>
                            <div className={styles.statsContent}>
                                <p><strong>Peso: </strong> {displayPokemon ? displayPokemon.weight / 10 : null} Kg</p>
                                <p><strong>Altura: </strong> {displayPokemon ? displayPokemon.height / 10 : null} m</p>
                                {displayPokemon?.stats ? displayPokemon.stats.map(stats => {return (
                                    <p><strong>{stats.stat.name}: </strong>{stats.base_stat}</p>
                                )}):null}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                </>
            )}
        </div>
    )
}

export default MainPage