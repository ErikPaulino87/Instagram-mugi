import './Conta.css';
import ContaPerfil from './ContaPerfil';
import luffy from '../Centro/imagem/luffy.jpg';

export default function Conta(){
    return(
        <div className='Conta'>
            <ContaPerfil
            foto={luffy}
            titulo="Luffy"
            />
        </div>
    )
}