
import logo from './Group1.png'

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
        <div className="menu">
            <div>Главная</div>
            <div>О нас</div>
            <div>Контакты</div>
            </div>
        </div>
    );
};

export default Header;