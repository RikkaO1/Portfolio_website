"use client"

import { useState } from "react"
import Image from 'next/image';

export function Skill() {
    const [activeLink, setActiveLink] = useState('techstack');
    const [content, setContent] = useState('techstack');
    return (
        <section id="skill">
            <ul className="tabs flex flex-row">
                {['Tech Stack', 'Tools'].map((item) => {
                    const key = item.toLowerCase().replace(' ', '');
                    return (
                        <li key={key}>
                            <button
                                type="button"
                                className={`px-6 py-4 rounded-lg font-bold text-2xl transition-colors duration-300 ${activeLink === key
                                    ? 'bg-[#7CE4F0]/20 text-[#7CE4F0]'
                                    : 'text-[#D4D4D4] hover:text-[#7CE4F0]'
                                    }`}
                                onClick={() => {
                                    setActiveLink(key);
                                    setContent(key);
                                }}
                            >
                                {item}
                            </button>
                        </li>
                    );
                })}
            </ul>
            <div className="content">
                {content === 'techstack' && (
                    <div className="tech-stack">
                        <ul className="tabs-menu">
                            {["HTML", "CSS", "JavaScript", "TypeScript", "PHP", "jQuery", "Tailwind CSS", "Bootstrap", "React", "Next.js", "Flowbite", "Laravel"].map((item) => (
                                <li key={item}>
                                    <Image
                                        width={50}
                                        height={50}
                                        src={`/images/logos/${item.replace(/\s+/g, '').replace(/\./g, '')}.png`}
                                        alt={item}
                                        className="w-14"
                                        onError={(e) => {
                                            e.currentTarget.style.display = 'none';
                                        }}
                                    />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                {content === 'tools' && (
                    <div className="tools">
                        <ul className="tabs-menu">
                            {["XAMPP", "WinSCP", "FileZilla", "Postman", "Visual Studio Code", "Windsurf", "Git"].map((item) => (
                                <li key={item}>
                                    <Image
                                        width={50}
                                        height={50}
                                        src={`/images/logos/${item.replace(/\s+/g, '').replace(/\./g, '')}.png`}
                                        alt={item}
                                        className="w-14"
                                        onError={(e) => {
                                            e.currentTarget.style.display = 'none';
                                        }}
                                    />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </section>
    )
}
