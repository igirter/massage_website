import './About.css'

export function About() {
    return (
        <section className="about" id="about">
            <div className="container">

                <div className="about__content">

                    <div className="about__image">

                    </div>

                    <div className="about__text">
                        <span className="about__label">
                            О специалисте
                        </span>

                        <h2>
                            Дмитрий Клещёв
                        </h2>

                        <p>
                            Тренер-массажист сборной России по дзюдо
                            с многолетним опытом работы в большом спорте.
                        </p>

                        <p>
                            В своей работе уделяет особое внимание
                            восстановлению, физическому состоянию и
                            готовности организма к нагрузкам.
                        </p>

                    </div>
                </div>
            </div>
        </section>
    )
}