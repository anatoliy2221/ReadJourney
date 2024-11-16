import IconSvg from '../IconSvg/IconSvg.jsx';
import css from './Logo.module.css';

const Logo = () => {
    return (
        <div className={css.logoWrapper} >
            <IconSvg width={'42px'} height={'17px'} iconName={'icon-logo'} />
            <p className={css.logoText}>read journey</p>
        </div>
    )
}

export default Logo