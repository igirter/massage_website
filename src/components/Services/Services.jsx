
import { useEffect, useState } from 'react'
import './Services.css'

const services = [
    {
        title: 'Спортивный массаж',
        description:
            'Работа с мышечным напряжением и восстановлением после физических нагрузок.',
    },
    {
        title: 'Восстановительный массаж',
        description:
            'Помощь организму в восстановлении после интенсивных тренировок и нагрузок.',
    },
    {
        title: 'Индивидуальная работа',
        description:
            'Индивидуальный подход с учётом физического состояния и задач клиента.',
    },
]

export function Services() {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex(
                (prevIndex) => (prevIndex + 1) % services.length
            )
        }, 4000)

        return () => clearInterval(timer)
    }, [])

    return (
        <section className="services" id="services">
            <div className="container">
                <div className="services__header">
                    <span className="services__label">
                        Направления работы
                    </span>

                    <h2>Услуги</h2>

                    <p>
                        Индивидуальный подход к работе с телом,
                        восстановлению и физическим нагрузкам.
                    </p>
                </div>

                <div className="services__grid">
                    {services.map((service, index) => (
                        <article
                            className={`service-card ${
                                index === currentIndex
                                    ? 'service-card--active'
                                    : ''
                            }`}
                            key={service.title}
                        >
                            <h3>{service.title}</h3>

                            <p>{service.description}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
