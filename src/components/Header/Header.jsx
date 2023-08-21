import React, { useRef, useEffect } from "react";
import logoImg from '../../assets/images/logo_upi_desa.png'

const Header = () => {

    const headerRef = useRef(null);
    const menuRef = useRef(null);

    useEffect(() => {
        const stickyHeaderFunc = () => {
            if (headerRef.current) { // Check if headerRef is assigned
                if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                    headerRef.current.classList.add('sticky__header');
                } else {
                    headerRef.current.classList.remove('sticky__header');
                }
            }
        };

        window.addEventListener("scroll", stickyHeaderFunc);

        return () => {
            window.removeEventListener("scroll", stickyHeaderFunc);
        };
    }, []); // Empty dependency array to run the effect only once

    const hadleClick = e=>{
        e.preventDefault()

        const targetAttr = e.target.getAttribute('href');
        const location =  document.querySelector(targetAttr).offsetTop;

        window.scrollTo({
            top: location - 80,
            left: 0,
        });
    }

    const toggleMenu = ()=> menuRef.current.classList.toggle('show__menu')
    return (

    <header ref={headerRef} className="w-full h-[120px] leading-[80px] flex items-center">
       <div className="container">
        <div className="flex items-center justify-between">
                <div className="flex items-center gap-[10px]">
                    {/* <span className="w-[35px] h-[35px] bg-primaryColor text-white text-[20px] font-[500] 
                    rounded-full flex items-center justify-center">
                        G
                    </span> */}
                    <img className="w-[160px] h-[80px]" src={logoImg} alt="" />

                    <div className="leading-[20px]">
                        <h2 className="md:text-xl text-sm text-smalltextColor font-[700]">Gudangkahuripan</h2>
                    </div>
                </div>

                <div className="menu" onClick={toggleMenu} ref={menuRef}>
                    <ul className="flex items-center gap-10">
                        <li>
                            <a onClick={hadleClick} className="text-smalltextColor hover:text-primaryColor font-[600]" href="#profil">Profil</a>
                        </li>
                        <li>
                            <a onClick={hadleClick} className="text-smalltextColor  hover:text-primaryColor font-[600]" href="#umkm">UMKM</a>
                        </li>
                        <li>
                            <a onClick={hadleClick} className="text-smalltextColor  hover:text-primaryColor font-[600]"href="#contact">Kontak</a>
                        </li>
                    </ul>
                </div>

                <span onClick={toggleMenu} className="text-2xl text-smalltextColor md:hidden cursor-pointer">
                        <i class="ri-menu-line"></i>
                </span>

            </div>
       </div>

    </header>
    ) 
};

export default Header;