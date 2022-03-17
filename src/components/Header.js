import logo from '../assets/logo_icon.svg';

export default function Header() {
    return (
        <div className="header">
            <img src={logo} alt="" />
            <span className="logo--text">my travel journal.</span>
        </div>
    );
}