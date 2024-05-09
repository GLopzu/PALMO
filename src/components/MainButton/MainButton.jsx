import './MainButton.css'

export function MainButton(props){
    const {text, bgColor, border} = props

    return(
        <button style={{backgroundColor: bgColor, borderBlock: border}} className='montserrat-text'>{text}</button>
    )
}