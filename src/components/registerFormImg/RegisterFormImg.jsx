// import IconSvg from '../IconSvg/IconSvg'
import css from './RegisterFormImg.module.css'

const RegisterFormImg = ({ src }) => {
    return (
        <div className={css.container}>
            <div className={css.tumb}>
                <img src={src} width={'366px'} height={'797px'} />
            </div>
        </div>
    )
}

export default RegisterFormImg