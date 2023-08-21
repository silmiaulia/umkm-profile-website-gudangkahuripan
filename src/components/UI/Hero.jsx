
import React from "react";
import petaImg from '../../assets/images/peta.png'
import CountUp from "react-countup";

const Hero = () => {
    return (
        <section className="pt-0" id="profil">
            <div className="container pt-14">
                <div className="md:flex items-center justify-between sm:flex-col md:flex-row">

                    <div className="w-full md:basis-1/2">
                        <h5 data-aos='fade-right' data-aos-duration='1500'
                            className="text-headingColor text-[16px]">Selamat Datang di </h5>
                        <h1 data-aos='fade-up'
                            data-aos-duration='1500' className="font-[600] text-[40px] text-smalltextColor sm:text-[30px]">Profil UMKM <br />Desa Gudangkahuripan
                        </h1>

                        <div data-aos='fade-up' data-aos-duration='1100' data-aos-delay="200"
                            className="flex items-center gap-6 my-7">
                            <a href="#umkm">
                                <button className="bg-primaryColor text-white font-[500] 
                                hover:bg-smalltextColor ease-in duration-300 py-2 px-4 rounded">
                                    <i class="ri-file-list-line"></i> Lihat UMKM
                                </button>
                            </a>

                        </div>
                        <p data-aos='fade-left' data-aos-duration='1800'
                        className="flex gap-2 mt-7 text-headingColor font-[500] text-[15px]
                        leading-7 sm:pl-0 sm:pr-10">
                        Website ini hadir sebagai jembatan antara Anda dan keragaman Usaha Mikro, Kecil, dan Menengah (UMKM) yang ada di Desa Gudangkahuripan. 
                        Temukan produk unik, dan layanan berkualitas yang dihadirkan oleh para pengusaha lokal kami. 
                        Bergabunglah dalam perjalanan mendukung pertumbuhan dan keberhasilan UMKM Desa Gudangkahuripan."
                        </p>
                    </div>

                    <div className="basis-1/2 mt-10 sm:mt-0">
                        <figure className="flex items-center justify-center">
                            <img className="w-96 h-auto" src={petaImg} alt="" />
                        </figure>
                    </div>

                    <div className="md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0
                    md:flex-col md:justify-end md:text-end">
                        <div className="mb-10">
                            <h2 className="text-headingColor font-[500] text-[32px]">
                                <CountUp start={0} end={14000} duration={2} suffix="+"/>
                            </h2>
                            <h4>Jiwa Penduduk</h4>
                        </div>

                        <div className="mb-10">
                            <h2 className="text-headingColor font-[500] text-[32px]">
                                <CountUp start={0} end={15} duration={2} suffix=""/>
                            </h2>
                            <h4>Rukun Warga</h4>
                        </div>

                        <div className="mb-10">
                            <h2 className="text-headingColor font-[500] text-[32px]">
                                <CountUp start={0} end={58} duration={2} suffix=""/>
                            </h2>
                            <h4>Rukun Tetangga</h4>
                        </div>

                        <div className="mb-10">
                            <h2 className="text-headingColor font-[500] text-[32px]">
                                <CountUp start={0} end={20} duration={2} suffix="+"/>
                            </h2>
                            <h4>UMKM Terdata</h4>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
};

export default Hero;