import './Pricing.css';

const services = [
    {
        title: 'Услуга 1',
        description: 'Описание услуги 1',
        duration: '1 час',
        price: '1000 ₽',
    },
    {
        title: 'Услуга 2',
        description: 'Описание услуги 2',
        duration: '2 часа',
        price: '2000 ₽',
    },
    {
        title: 'Услуга 3',
        description: 'Описание услуги 3',
        duration: '3 часа',
        price: '3000 ₽',
    },
];

export function Pricing() {
    return (
        <section className="pricing">
            <div className="container">
                <div className="pricing__header">
                    <span className="pricing__label">
                        Наши услуги
                    </span>

                    <h2>Услуги и цены</h2>

                    <p>
                        Выберите подходящий вариант массажа и запишитесь
                        на удобное время.
                    </p>
                </div>

                <div className="pricing__grid">
                    {services.map((service) => (
                        <article
                            className="pricing-card"
                            key={service.title}
                        >
                            <h3>{service.title}</h3>

                            <p>{service.description}</p>

                            <div className="pricing-card__bottom">
                                <p className="pricing-card__duration">
                                    {service.duration}
                                </p>

                                <p className="pricing-card__price">
                                    {service.price}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}