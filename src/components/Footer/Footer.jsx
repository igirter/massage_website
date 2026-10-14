import './Footer.css';

export function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__content">
                    <div className="footer__brand">
                        <span className="footer__logo">
                            Массаж
                        </span>

                        <p>
                            Забота о вашем теле и душе.
                        </p>
                    </div>

                    <nav className="footer__nav">
                        <a href="#about">Обо мне</a>
                        <a href="#services">Услуги</a>
                        <a href="#contacts">Контакты</a>
                    </nav>

                    <div className="footer__social">
                        <a href="#">
                            Telegram
                        </a>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p>
                        © 2026 Все права защищены
                    </p>
                </div>
            </div>
        </footer>
    );
}