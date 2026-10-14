import './Hero.css'

export function Hero() {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero__content">
                    <h1>Массаж для вашего тела и души</h1>

                    <p>
                        Помогу расслабиться, снять напряжение и восстановить силы. 
                    </p>

                    <button className="hero__button">
                        Записаться на массаж
                    </button>
                </div>
                <div className="hero__image">
                    
                </div>
            </div>
        </section>
    )
}