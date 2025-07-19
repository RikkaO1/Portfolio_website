"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react"
import Image from 'next/image';

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    language: string;
    github: string;
    demo: string;
}

export function Projects() {
    const [project, setProject] = useState<Project[]>([]);

    useEffect(() => {
        const data = [
            {
                id: 1,
                image: "/images/projects/portfolio.png",
                title: "Portfolio",
                description: "Portfolio is a web application that allows users to manage their service requests.",
                language: "Next.js, Tailwind CSS",
                github: 'https://github.com/RikkaO1/portfolio_website',
                demo: 'https://portfolio-website-ten-kappa-24.vercel.app/'
            },
            {
                id: 2,
                image: "/images/projects/SRVC.png",
                title: "SRVC Web",
                description: "SRVC Web is a web application that allows users to manage their service requests.",
                language: "Laravel, Tailwind CSS",
                github: '',
                demo: 'https://www.srvc.ac.th/homepage'
            },
            {
                id: 3,
                image: "/images/projects/ita_srvc.png",
                title: "ITA SRVC",
                description: "ITA SRVC is a web application that allows users to manage their service requests.",
                language: "Next.js, Tailwind CSS, Laravel",
                github: '',
                demo: 'http://ita.srvc.ac.th/'
            },
        ]
        setProject(data)
    }, [])
    return (
        <section id="projects">
            <div className="flex flex-col gap-2">
                <h1 className="text-4xl font-bold text-center">Project Experience</h1>
                <h3 className="text-center text-gradient">Explore the projects I&apos;ve worked on so far</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {project?.map((item: Project) => (
                    <div className="w-full" key={item.id}>
                        <div className="flex flex-col gap-2 bg-white/10 p-2 rounded-md border-[#999999] border-2">
                            <Image src={item.image} alt={item.title} className="w-full h-fit object-cover rounded-md" width={500} height={500} />
                            <h2 className="text-2xl font-bold text-center">{item.title}</h2>
                            <p className="text-sm">{item.description}</p>
                            <div className="flex justify-between">
                                <p className="text-sm text-[#7CE4F0]">{item.language}</p>
                                <div className="flex gap-2">
                                    {item.github && (
                                        <a href={item.github} target="_blank" rel="noopener noreferrer">
                                            <FontAwesomeIcon icon={faGithub} className='text-2xl' />
                                        </a>
                                    )}
                                    {item.demo && (
                                        <a href={item.demo} target="_blank" rel="noopener noreferrer">
                                            <FontAwesomeIcon icon={faGlobe} className='text-2xl' />
                                        </a>
                                    )}
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
