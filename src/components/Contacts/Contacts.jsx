import './Contacts.css';

export function Contacts() {
    return (
        <section className="contacts" id="contacts">
            <div className="container">
                <div className="contacts__header">
                    <span className="contacts__label">
                        Контакты
                    </span>

                    <h2>Запишитесь на массаж</h2>

                    <p>
                        Свяжитесь со мной удобным для вас способом.
                    </p>
                </div>

                <div className="contacts__content">
                    <a
                        href="tel:+70000000000"
                        className="contacts__item"
                    >
                        <span className="contacts__item-label">
                            Телефон
                        </span>

                        <span className="contacts__item-value">
                            +7 (000) 000-00-00
                        </span>
                    </a>

                    <a
                        href="#"
                        className="contacts__item"
                    >
                        <span className="contacts__item-label">
                            Telegram
                        </span>

                        <span className="contacts__item-value">
                            @username
                        </span>
                    </a>

                    <div className="contacts__item">
                        <span className="contacts__item-label">
                            Адрес
                        </span>

                        <span className="contacts__item-value">
                            Ваш адрес
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}