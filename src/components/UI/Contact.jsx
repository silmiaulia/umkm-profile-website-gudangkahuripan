import React from "react";

const Contact = () => {
    return (
        <section id="contact" className="pb-16">
            <div className="container">

                <h2 className="flex justify-center text-headingColor font-[700] text-[2rem] mb-5">
                    Lokasi Desa Gudangkahuripan
                </h2>

                <div className="md:flex justify-center items-center">
                    <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
                        <iframe title="google-maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15845.952445876124!2d107.59588724774198!3d-6.831927890655439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e13ba2624183%3A0xaf0a18fe08af4c73!2sGudangkahuripan%2C%20Kec.%20Lembang%2C%20Kabupaten%20Bandung%20Barat%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1692106036077!5m2!1sid!2sid" className="border-0 w-full h-full" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Contact;