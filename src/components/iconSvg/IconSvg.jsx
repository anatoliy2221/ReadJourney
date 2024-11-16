import sprite from '../../img/icons.svg'

const IconSvg = ({ width, height, iconName, styles }) => {
    return (

        <svg width={width} height={height} className={styles}>
            <use href={`${sprite}#${iconName}`}></use>
        </svg>

    )
}

export default IconSvg