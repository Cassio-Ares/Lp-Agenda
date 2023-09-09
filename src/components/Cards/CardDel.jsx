import './CardAdd.scss'
import Container from '../Container'
import Button from '../Button'

const CardDel = ({onclickYes, onclickNo, styles}) => {
  return (
    <div className='card'>
      <Container styles='container_card' >
           <h1>Deseja excluir esse item?</h1>
           <p>Colocar as descrições das tarefas aqui.</p>
           <div className='container-btn'>
            <Button text='Não' styles='btnCard_nao' event={onclickNo}/>
            <Button text='Sim' styles='btnCard_sim' event={onclickYes}/>
          </div>
      </Container>
    </div>
  )
}

export default CardDel