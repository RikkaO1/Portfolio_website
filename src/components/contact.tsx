"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFacebook, faLine } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import Swal from 'sweetalert2';

export function Contact() {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (form.current) {
            emailjs.sendForm(
                'service_lxhey15',
                'template_lo8y59l',
                form.current,
                'YqPZPFHqKf-YTLl9J'
            )
                .then((result) => {
                    form.current?.reset();
                    Swal.fire({
                        icon: 'success',
                        title: 'Success...',
                        text: 'Your form has been submitted successfully!',
                    });
                }, (error) => {
                    console.log(error.text);
                    Swal.fire({
                        icon: 'error',
                        title: 'Error...',
                        text: 'Your form has not been submitted successfully!',
                    });
                });
        }
    };

    return (
        <section id="contact">
            <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                    <h1 className="text-4xl font-bold">Contact <span className="text-main2">Me</span></h1>
                    <h4 className="text-xl font-semibold mt-2">let's work together</h4>
                    <h5 className="text-lg mt-5">I'm glad you've visited my personal portfolio website! If you have ant questions, suggestions, or would like to collaborate, please feel to contact me through this form. I will endeavor to reply to your message as soon as possible</h5>
                    <ul className="social flex flex-col gap-4 mt-10">
                        <li>
                            <Link target="_blank" href="https://github.com/RikkaO1" className="flex items-center gap-4">
                                <FontAwesomeIcon className="icon" icon={faEnvelope} />
                                p.onklan.dev@gmail.com
                            </Link>
                        </li>
                        <li>
                            <Link target="_blank" href="https://github.com/RikkaO1" className="flex items-center gap-4">
                                <FontAwesomeIcon className="icon" icon={faGithub} />
                                github.com/RikkaO1
                            </Link>
                        </li>
                        <li>
                            <Link target="_blank" href="https://www.facebook.com/billy.cookies.2024" className="flex items-center gap-4">
                                <FontAwesomeIcon className="icon" icon={faFacebook} />
                                Billy Cookies
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="https://line.me/R/ti/p/billy2548"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.open(`https://line.me/R/ti/p/billy2548`, '_blank', 'noopener,noreferrer');
                                }}
                                className="flex items-center gap-4"
                            >
                                <FontAwesomeIcon className="icon" icon={faLine} />
                                billy2548
                            </Link>
                        </li>
                        <li>
                            <Link target="_blank" href="tel:+66990299308"
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.open(`tel:+66990299308`, '_blank', 'noopener,noreferrer');
                                }}
                                className="flex items-center gap-4"
                            >
                                <FontAwesomeIcon className="icon" icon={faPhone} />
                                +66 990299308
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="flex-1">
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="flex flex-col gap-6">
                            <input type="text" required name="name" placeholder="Name" className="p-2 border bg-white/10 border-gray-300 rounded" />
                            <input type="email" required name="email" placeholder="Email" className="p-2 border bg-white/10 border-gray-300 rounded" />
                            <input type="text" required name="subject" placeholder="Subject" className="p-2 border bg-white/10 border-gray-300 rounded" />
                            <textarea required name="message" placeholder="Message" className="p-2 border bg-white/10 border-gray-300 rounded h-40"></textarea>
                            <button type="submit" className="p-2 bg-[#35C6D7] text-white rounded font-bold">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
