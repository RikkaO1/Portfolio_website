"use client"
import Link from "next/link"
import { useTypingAnimation } from "../hooks/useTypingAnimation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook, faLine } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from "react";

export function Homepage() {
    const name = "Phatcharapa Onklan";
    const [showWelcome, setShowWelcome] = useState(true);
    const [startTyping, setStartTyping] = useState(false);
    const typedName = useTypingAnimation(name, 100, startTyping);

    useEffect(() => {
        // Start typing animation after welcome screen (1.5s + 0.5s for exit animation)
        const timer = setTimeout(() => {
            setStartTyping(true);
        }, 1500); // Adjust this timing to match your welcome animation

        return () => clearTimeout(timer);
    }, []);

    return (
        <section id="home" className="h-screen flex flex-col items-center justify-center gap-2">
            <h5 className="text-[#7CE4F0]">Hello It's Me</h5>
            <h1 className="text-3xl md:text-6xl font-bold">
                <span className="typing-text">{typedName}</span>
                <span className={`typing-cursor ${startTyping ? 'animate-pulse' : 'opacity-0'}`}></span>
            </h1>
            <h2 className="text-xl md:text-4xl font-semibold text-gradient">Web Developer</h2>
            <h6 className="text-lg text-center">I am a Computer Programming student with a passion for web development and building user-friendly applications.</h6>
            <ul className="social flex flex-row gap-4 mt-10">
                <li><Link target="_blank" href="https://github.com/RikkaO1"><FontAwesomeIcon className="icon" icon={faGithub} /></Link></li>
                <li><Link target="_blank" href="https://www.facebook.com/billy.cookies.2024"><FontAwesomeIcon className="icon" icon={faFacebook} /></Link></li>
                <li>
                    <Link
                        href="https://line.me/R/ti/p/billy2548"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                            e.preventDefault();
                            window.open(`https://line.me/R/ti/p/billy2548`, '_blank', 'noopener,noreferrer');
                        }}
                    >
                        <FontAwesomeIcon className="icon" icon={faLine} />
                    </Link>
                </li>
                <li>
                    <Link target="_blank" href="tel:+66990299308"
                        onClick={(e) => {
                            e.preventDefault();
                            window.open(`tel:+66990299308`, '_blank', 'noopener,noreferrer');
                        }}>
                        <FontAwesomeIcon className="icon" icon={faPhone} />
                    </Link>
                </li>
            </ul>
        </section>
    )
}
