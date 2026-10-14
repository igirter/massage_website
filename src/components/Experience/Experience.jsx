import { useState } from 'react'
import './Experience.css'

const experiences = [
    {
        title: 'Работа в большом спорте',
        description:
            'Многолетний опыт работы со спортсменами высокого уровня и подготовки к серьёзным физическим нагрузкам.',
    },
    {
        title: 'Сборная России по дзюдо',
        description:
            'Работа массажистом в составе сборной России по дзюдо.',
    },
    {
        title: 'Опыт восстановления',
        description:
            'Работа направлена на восстановление организма, поддержание физического состояния и готовность к нагрузкам.',
    },
]

export function Experience() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [touchStart, setTouchStart] = useState(null)
    const [touchStartY, setTouchStartY] = useState(null)

    const currentExperience = experiences[currentIndex]

    return (
        <section className="experience">
            <div className="container">
                <div className="experience__header">
                    <span className="experience__label">
                        Профессиональный опыт
                    </span>

                    <h2>Опыт и достижения</h2>
                </div>

                <div
                    className="experience__content"
                    onTouchStart={(event) => {
                        setTouchStart(event.touches[0].clientX)
                        setTouchStartY(event.touches[0].clientY)
                    }}
                    onTouchEnd={(event) => {
                        const touchEnd = event.changedTouches[0].clientX
                        const touchEndY = event.changedTouches[0].clientY

                        const distance = touchStart - touchEnd
                        const distanceY = touchStartY - touchEndY

                        if (Math.abs(distanceY) > Math.abs(distance)) {
                            setTouchStart(null)
                            setTouchStartY(null)
                            return
                        }

                        if (Math.abs(distance) < 50) {
                            setTouchStart(null)
                            setTouchStartY(null)
                            return
                        }

                        if (distance > 0) {
                            setCurrentIndex(
                                (currentIndex + 1) % experiences.length
                            )
                        } else {
                            setCurrentIndex(
                                (currentIndex - 1 + experiences.length) %
                                    experiences.length
                            )
                        }

                        setTouchStart(null)
                        setTouchStartY(null)
                    }}
                >
                    <h3>{currentExperience.title}</h3>

                    <p>{currentExperience.description}</p>

                    <div className="experience__dots">
                        {experiences.map((_, index) => (
                            <button
                                key={index}
                                className={
                                    index === currentIndex ? 'active' : ''
                                }
                                onClick={() => setCurrentIndex(index)}
                                aria-label={`Показать опыт ${index + 1}`}
                            />
                        ))}
                    </div>

                    <div className="experience__controls">
                        <button
                            onClick={() => {
                                setCurrentIndex(
                                    (currentIndex - 1 + experiences.length) %
                                        experiences.length
                                )
                            }}
                            aria-label="Предыдущий опыт"
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M15 18l-6-6 6-6" />
                            </svg>
                        </button>

                        <button
                            onClick={() => {
                                setCurrentIndex(
                                    (currentIndex + 1) % experiences.length
                                )
                            }}
                            aria-label="Следующий опыт"
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M9 18l6-6-6-6" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}