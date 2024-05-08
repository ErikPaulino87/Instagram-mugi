import './Feed.css';

import Post from './Post/Post';
import usopp_luffy from './imagem/usopp_luffy.jpg';
import show from './imagem/show.jpg'
import onigashima from './imagem/onigashima.jpg'
import mugiwaras from './imagem/mugiwaras.jpg'
import luffy from './imagem/luffy.jpg'
import usopp from './imagem/usopp.jpg'
import franky from './imagem/franky.jpg'
import nami from './imagem/onigashima.jpg'
import chopper from './imagem/chopper.jpg'
import merry from './imagem/merry.jpg'
import galera from './imagem/galera.png'
import zoro_bebendo from './imagem/zoro_bebendo.jpg'
import zoro from './imagem/zoro.jpg'



export default function Feed() {
    return (
        <div className="Feed">
            <Post
                foto={luffy}
                title="Luffy"
                imgSrc={usopp_luffy}
                titular="Luffy"
                body="Esse dia foi top KKKK."/>
            <Post
                foto={usopp}
                title="Usopp"
                imgSrc={show}
                titular="Usopp"
                body="SHOOOW DA UTA TÁ BOM DEMAIS."/>
            <Post
                foto={nami}
                title="Nami"
                imgSrc={onigashima}
                titular="Nami"
                body="Tomara que tenha muito dinheiro aí dentro."/>
            <Post
                foto={franky}
                title="Franky"
                imgSrc={mugiwaras}
                titular="Franky"
                body="Vocês são SUPEEEEER."/>
            <Post
                foto={chopper}
                title="Chopper"
                imgSrc={merry}
                titular="Chopper"
                body="Sinto tanto sua falta merry :("/>
            <Post
                foto={usopp}
                title="Usopp"
                imgSrc={galera}
                titular="Usopp"
                body="DEUS DO CÉU, O QUE FOI ISSO???????!!!!!"/>
            <Post
                foto={zoro}
                title="Zoro"
                imgSrc={zoro_bebendo}
                titular="Zoro"
                body=":)."/>
        </div>
    )
}