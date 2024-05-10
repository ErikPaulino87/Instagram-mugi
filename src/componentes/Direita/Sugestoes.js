import Sugestao from './sugestao'
import './Sugestoes.css'
import sanji from '../Centro/imagem/sanji.jpg'
import zoro from '../Centro/imagem/zoro.jpg'
import brook from '../Centro/imagem/brook.jpg'

var listaPerfil = [
    {
        nome: "Sanji",
        src: sanji
    },
    {
        nome: "Zoro",
        src: zoro
    },
    {
        nome: "Brook",
        src: brook
    }
]

export default function Sugestoes() {
    return (
        <div className="sugestoes">
            {
                listaPerfil.map((usuario) => {
                    return <Sugestao nome={usuario.nome} imagem={usuario.src}/>
                })
            }

        </div>
    )
}