import '../css/navbar.css';
import logo from '../img/cart.png'

function CarWidget() {
    return (
        <div>
            <img src={ logo } className="logo" alt="logo" />
        </div>
    );
}

export default CarWidget;