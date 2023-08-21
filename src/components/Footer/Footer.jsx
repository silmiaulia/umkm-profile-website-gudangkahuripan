import React from "react";
import logoImg from '../../assets/images/logo_upi_desa.png'


const Footer = () => {
    return <footer className="bg-smalltextColor pt-12">
        {/* footer top */}
        <div className="container">
            <div className="sm:flex items-center justify-between md:gap-8">
                <div className="w-full sm:w-1/2">
                    <h2 className="text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem]">
                        Ingin melihat UMKM di Desa Gudangkahuripan?
                    </h2>
                    <a href="#umkm">
                        <button className="bg-primaryColor text-white font-[500] 
                        hover:bg-smalltextColor ease-in duration-300 py-2 px-4 rounded">
                            <i class="ri-file-list-line"></i> Lihat UMKM
                        </button>
                    </a>
                </div>

                <div className="w-full sm:w-1/2">
                    <p className="text-gray-300 leading-7 mt-4 sm:mt-0">
                        Website ini hadir sebagai jembatan antara Anda dan keragaman Usaha Mikro, Kecil, dan Menengah (UMKM) yang ada di Desa Gudangkahuripan. 
                        Temukan produk unik, dan layanan berkualitas yang dihadirkan oleh para pengusaha lokal kami.     
                    </p>

                    <div className="flex items-center gap-4 flex-wrap md:gap-8 mt-10">
                        <span className="text-gray-300 font-[600] text-[15px]">Ikuti Kami:</span>

                        <span className="w-[35px] h-[35px] bg-headingColor p-1 rounded-[50px]
                        cursor-pointer text-center">
                            <a className="text-gray-300 font-[500] text-[18px]" href="https://www.instagram.com/gudangkahuripan/?hl=en">
                                <i class="ri-instagram-line"></i>
                            </a>
                        </span>

                        
                        <span className="w-[35px] h-[35px] bg-headingColor p-1 rounded-[50px]
                        cursor-pointer text-center">
                            <a className="text-gray-300 font-[500] text-[18px]" href="https://gudangkahuripanlembang.wordpress.com/">
                                <i class="ri-wordpress-fill"></i>
                            </a>
                        </span>

                    </div>
                </div>
            </div>

            <div>
                <ul className="flex items-center justify-center gap-10 mt-8">
                    <li>
                        <a className="text-gray-200 hover:text-primaryColor font-[600]" href="#profil">Profil</a>
                    </li>
                    <li>
                        <a className="text-gray-200  hover:text-primaryColor font-[600]" href="#umkm">UMKM</a>
                    </li>
                    <li>
                        <a className="text-gray-200  hover:text-primaryColor font-[600]"href="#contact">Kontak</a>
                    </li>
                </ul>
            </div>
        </div>
        {/* footer top end */}

        {/* footer buttom */}
        <div className="bg-[#243d2f] py-3 mt-10">
            <div className="container">
                <div className="flex items-center justify-center sm:justify-between">
                    <div className="hidden sm:block">
                        <div className="flex items-center gap-[10px]">
                            <img className="w-[100px] h-[50px]" src={logoImg} alt="" />

                            <div className="leading-[20px]">
                                <h2 className="text-base text-white font-[700]">Gudangkahuripan</h2>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p className="text-gray-400 text-[14px]">Dikembangkan oleh Tim KKN UPI Desa Gudangkahuripan 2023</p>
                    </div>
                </div>
            </div>

        </div>
        {/* footer buttom end*/}

    </footer>
};

export default Footer;