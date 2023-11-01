

interface CardProps{
    titulo: string
    descricao: string
}

function Card({titulo, descricao}: CardProps){
    return(
    <div style = {{
        color: 'green'
    
    }}>
    <h1>{titulo}</h1>
    <p>{descricao}</p>

    </div>)
    }

    export default Card
