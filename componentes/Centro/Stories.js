import Story from "./Story"
import './Stories.css'
import zoro from './imagem/zoro.jpg'
import luffy from './imagem/luffy.jpg'
import nami from './imagem/nami.jpg'
import usopp from './imagem/usopp.jpg'
import sanji from './imagem/sanji.jpg'
import chopper from './imagem/chopper.jpg'
import robin from './imagem/Nico robin.jpg'
import franky from './imagem/franky.jpg'
import brook from './imagem/brook.jpg'
import jimbei from './imagem/jimbei.jpg'



var listaUsuarios = [
    {
        nome: "Luffy",
        src: luffy
    },
    {
        nome: "Zoro",
        src: zoro 
    },
    {
        nome: "Usopp",
        src: usopp
    },
    {
        nome: "Nami",
        src:nami
    },
    {
        nome: "Sanji",
        src: sanji
    },
    {
        nome: "Chopper",
        src: chopper
    },
    {
        nome: "Nico robin",
        src: robin
    },
    {
        nome: "Franky",
        src: franky
    },
    {
        nome: "Brook",
        src: brook
    },
    {
        nome: "Jimbei",
        src: jimbei
    },
    
    
]

export default function Stories() {
    return (
        <div className="Stories">
            {
                // Iteração -> Para cada usuário na lista de usuários, renderize um Story
                listaUsuarios.map((usuario) => {
                    return <Story nomeUsuario={usuario.nome} caminhoDaImagem={usuario.src} />
                })
            }

        </div>
    )
}