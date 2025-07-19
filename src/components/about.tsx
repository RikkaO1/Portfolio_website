"use client"

import Image from 'next/image';

export function About() {
    return (
        <section id="about" className="flex items-center justify-center">
            <div className="aboutme-container flex flex-col md:flex-row gap-2">
                <div className="w-full md:w-1/2 flex items-center justify-center">
                    <Image
                        src="/images/me.jpg"
                        alt="Profile picture"
                        className="rounded-full w-50 h-50 md:w-60 md:h-60 lg:w-100 lg:h-100 object-cover"
                        width={500}
                        height={500}
                    />                </div>
                <div className="w-full md:w-1/2">
                    <div className="flex items-center justify-between gap-2 relative">
                        <h2 className="text-4xl font-bold">About Me</h2>
                        <div className="w-1/3 h-1 bg-[#7CE4F0] absolute right-[-50px] lg:left-2/3 -translate-x-1/2 top-1/2"></div>
                    </div>
                    <div className="flex flex-col gap-2 mt-5 lg:mt-10">
                        <h4 className="text-sm">Hi! My name is Phatcharapa Onklan, and I&apos;m a passionate Frontend Developer with expertise in HTML, CSS, JavaScript, jQuery, Tailwind CSS, Bootstrap, React, and modern web technologies. I enjoy crafting visually appealing, responsive, and interactive user interfaces that provide seamless experiences.</h4>
                        <h4 className="text-sm">With 1 year of freelance experience and 7 months of internship experience, I have worked on various projects. I focus on building efficient and well-structured frontend solutions that enhance user engagement and usability.
                            I&apos;m always eager to learn new technologies and improve my skills. My goal is to create web applications that are both beautiful and user-friendly. If you&apos;re looking for a dedicated Frontend Developer to collaborate with, feel free to reach out!</h4>
                    </div>
                </div>
            </div>
        </section>
    )
}
