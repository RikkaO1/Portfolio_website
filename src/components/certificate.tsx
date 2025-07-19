"use client"

import { formatDateRange } from '@/utils/formatDate';
import Image from 'next/image';

export function Certificate() {

    const certificates = [
        {
            id: 1,
            image: "/images/cerfiticates/002.jpg",
            title: "ทักษะการเขียนโปรแกรมคอมพิวเตอร์ ระดับ ปวช. ระดับชาติ",
            description: "ได้รับรางวัลรองชนะเลิศอันดับ 1 มาตรฐานระดับเหรียญทอง ทักษะการเขียนโปรแกรมคอมพิวเตอร์ ระดับ ปวช.",
            date: "03/02/2566",
        },
        {
            id: 2,
            image: "/images/cerfiticates/003.jpg",
            title: "ทักษะการเขียนโปรแกรมคอมพิวเตอร์ ระดับ ปวช. ระดับภาค",
            description: "ได้รับรางวัลรองชนะเลิศอันดับ 1 มาตรฐานระดับเหรียญทอง ทักษะการเขียนโปรแกรมคอมพิวเตอร์ ระดับ ปวช.",
            date: "03/02/2566",
        },
        {
            id: 3,
            image: "/images/cerfiticates/001.jpg",
            title: "ทักษะการเขียนโปรแกรมคอมพิวเตอร์ ระดับ ปวช. ระดับจังหวัด",
            description: "ได้รับรางวัลชนะเลิศ มาตรฐานระดับเหรียญทอง ทักษะการเขียนโปรแกรมคอมพิวเตอร์ ระดับ ปวช.",
            date: "25/11/2565",
        },
        {
            id: 4,
            image: "/images/cerfiticates/004.jpg",
            title: "โครงการอบรเชิงปฏิบัติการ",
            description: "โครงการอบรเชิงปฏิบัติการเพื่อส่งเสริมการประกอบอาชีพอิสระ",
            date: "06/08/2565",
        },
        {
            id: 5,
            image: "/images/cerfiticates/005.jpg",
            title: "สุดยอดนักขายประเภทเดี่ยว",
            description: "ได้รับรางวัลรองชนะเลิศอันดับ 2 ตามโครงการผลิตเค้กและคุกกี้จำหน่ายในช่วงเทศกาลปีใหม่ ประจำปี 2565 วิทยาลัยอาชีวศึกษาสุรินทร์",
            date: "27/01/2566",
        },
        {
            id: 6,
            image: "/images/cerfiticates/006.jpg",
            title: "ฝึกงานที่บริษัทโกบอลคอสเมดิค",
            description: "ฝึกงานที่บริษัทโกบอลคอสเมดิค ตำแหน่ง Frontend Developer ทำหน้าที่พัฒนาเว็บไซต์ POS Responsive",
            date: "01/03/2566 - 01/10/2566",
        },
        {
            id: 7,
            image: "/images/cerfiticates/007.jpg",
            title: "โครงการประกวดแข่งขันนวัติกรรมด้านโลจิสติกส์ ระดับภูมิภาค",
            description: "โครงการประกวดแข่งขันนวัติกรรมด้านโลจิสติกส์ ระดับภูมิภาค 2566 ได้รับรางวัลชนะเลิศ",
            date: "17/07/2567",
        }
    ]

    return (
        <section id="certificate">
            <h1 className="text-4xl font-bold text-center after:content-[''] after:block after:w-1/3 after:mx-auto after:h-1 after:bg-main2">Certificate</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {certificates.map((certificate) => (
                    <div key={certificate.id} className='bg-white/10 rounded-md border-[#999999] border-2 px-4 py-2 flex flex-col justify-between'>
                        <div className="flex flex-col gap-2">
                            <Image src={certificate.image} alt={certificate.title} className={`w-full h-fit mb-4 rounded-2xl`} width={500} height={500} />
                            <h2 className="font-bold text-center">{certificate.title}</h2>
                            <p className="text-sm">{certificate.description}</p>
                        </div>
                        <p className="text-sm text-end">{formatDateRange(certificate.date)}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
