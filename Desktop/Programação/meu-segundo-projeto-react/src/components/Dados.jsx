import { useState, useEffect } from "react"
import axios from "axios"
import './dados.style.css'

const Dados = () => {
    const [repos, setRepos] = useState([])
    const [busca, setBusca] = useState('')
    const [filtro, setFiltro] = useState([])


    useEffect(() => {
        const fecthData = async () => {
            const response = await axios.get('https://api.github.com/users/valentinahastenreiter/repos')
            const data = await response.data
            setRepos(data)
        }

        fecthData()

    }, [])

    useEffect(() => {
        setFiltro(repos.filter(repos => {
            return repos.name.includes(busca)
        })
        )
    }, [repos, busca])

    useEffect(() => {
        document.title = "Valentina Repos"
    }, []);


    return (
        <>
            <div className="div-titulo">
                <h1>Meus repositórios</h1>
            </div>
            <div className="div-input">
                <input placeholder="Digite o nome do repositório" type="text" value={busca} onChange={(event => setBusca(event.target.value))}>
                </input>
            </div>
            <div className="div-lista">
                <ul>
                    {filtro.map(item => <li key={item.id} >
                        {item.name}
                    </li>)}
                </ul>
            </div>
        </>
    )
}


export default Dados