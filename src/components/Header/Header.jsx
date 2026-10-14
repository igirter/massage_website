import { useState } from 'react'
import './Header.css'

const navItems = [
    { name: 'Обо мне', link: '#about' },
    { name: 'Услуги', link: '#services' },
    { name: 'Контакты', link: '#contacts' },
]

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header>
            <div className="container">

                <div className="header__logo">
                    <h2>Массажист</h2>
                </div>

                <nav className="header__nav">
                    <ul>
                        {navItems.map((item) => (
                            <li key={item.link}>
                                <a href={item.link}>
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <a
                    href="#contacts"
                    className="header__button"
                >
                    Записаться
                </a>

                <button
                    className="header__burger"
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                >
                    {isMenuOpen ? '✕' : '☰'}
                </button>

            </div>

    
                <nav
                    className={`header__mobile-menu ${
                        isMenuOpen ? 'header__mobile-menu--open' : ''
                }`}
            >
                    <ul>
                        {navItems.map((item) => (
                            <li key={item.link}>
                                <a 
                                    href={item.link}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <a
                        href="#contacts"
                        className="header__mobile-button"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Записаться
                    </a>
                </nav>
            
        </header>
    )
}