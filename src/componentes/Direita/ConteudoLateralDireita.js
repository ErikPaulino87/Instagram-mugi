import './ConteudoLateralDireita.css';
import Conta from'./Conta';
import Sugestoes from './Sugestoes'

export default function ConteudoLateralDireita (){
    return(
        <div className='conteudoLateralDireito'>
            <Conta/>
            <Sugestoes/>
        </div>
    )
}