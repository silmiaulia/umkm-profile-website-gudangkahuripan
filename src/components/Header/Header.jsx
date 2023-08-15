import React from "react";
import logoImg from '../../assets/images/logo_upi_desa.png'

const Header = () => {
    return <header className="w-full h-[120px] leading-[80px] flex items-center">
       <div className="container">
        <div className="flex items-center justify-between">
                <div className="flex items-center gap-[10px]">
                    {/* <span className="w-[35px] h-[35px] bg-primaryColor text-white text-[20px] font-[500] 
                    rounded-full flex items-center justify-center">
                        G
                    </span> */}
                    <img className="w-[160px] h-[80px]" src={logoImg} alt="" />

                    <div className="leading-[20px]">
                        <h2 className="text-xl text-smalltextColor font-[700]">Gudangkahuripan</h2>
                    </div>
                </div>

                <div className="menu">
                    <ul className="flex items-center gap-10">
                        <li>
                            <a className="text-smalltextColor hover:text-primaryColor font-[600]" href="#profil">Profil</a>
                        </li>
                        <li>
                            <a className="text-smalltextColor  hover:text-primaryColor font-[600]" href="#umkm">UMKM</a>
                        </li>
                        <li>
                            <a className="text-smalltextColor  hover:text-primaryColor font-[600]"href="#contact">Kontak</a>
                        </li>
                    </ul>
                </div>

                <span className="text-2xl text-smalltextColor md:hidden cursor-pointer">
                        <i class="ri-menu-line"></i>
                </span>

            </div>
       </div>

    </header>
};

export default Header;