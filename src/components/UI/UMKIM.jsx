import React,{useState, useEffect} from "react";
import data from "../../assets/data/portfolioData" 
import Modal from "./Modal"

const UMKM = () => {

    const [nextItems, setNextItems] = useState(9)
    const [umkm, setUMKM] = useState(data)
    const [selectTab, setSelectTab] = useState('all')
    const [showModal, setShowModal] = useState(false)
    const [activeID, setActiveID] = useState(null)

    const loadMoreHandler = () => {
        setNextItems(prev=> prev + 6)
    };

    const showModalHandler = (id) => {
        setShowModal(true)
        setActiveID(id)
    }


    useEffect(()=>{
        if(selectTab==='all'){
            setUMKM(data)
        }

        if(selectTab==='kuliner'){
            const filteredData = data.filter(item=> item.category==='kuliner')
            setUMKM(filteredData)
        }

        if(selectTab==='pakaian'){
            const filteredData = data.filter(item=> item.category==='pakaian')
            setUMKM(filteredData)
        }

        if(selectTab==='lainnya'){
            const filteredData = data.filter(item=> item.category==='lainnya')
            setUMKM(filteredData)
        }
    },[selectTab])
    
    return (
        <section id="umkm">
            <div className="container">
                <div className="flex items-center justify-between flex-wrap">
                    <div className="mb-7 sm:mb-0">
                        <h4 className="text-headingColor text-[2rem] font-[700]">
                            UMKM di Desa Gudangkahuripan
                        </h4>
                    </div>

                    <div className="flex gap-3">
                        <button onClick={()=>setSelectTab('all')} className="text-smalltextColor border border-solid border-smalltextColor py-1 px-4
                        rounded-[8px]">
                            All
                        </button>

                        <button onClick={()=>setSelectTab('kuliner')} className="text-smalltextColor border border-solid border-smalltextColor py-1 px-4
                        rounded-[8px]">
                            Kuliner
                        </button>

                        <button onClick={()=>setSelectTab('pakaian')} className="text-smalltextColor border border-solid border-smalltextColor py-1 px-4
                        rounded-[8px]">
                            Pakaian
                        </button>

                        <button onClick={()=>setSelectTab('lainnya')} className="text-smalltextColor border border-solid border-smalltextColor py-1 px-4
                        rounded-[8px]">
                            Lainnya
                        </button>

                    </div>

                </div>

                <div className="flex items-center gap-4 flex-wrap mt-12">

                    {
                        umkm?.slice(0, nextItems)?.map((umkm,indeks)=>(
                            <div key={indeks} data-aos="fade-up"
                            data-aos-delay="50"
                            data-aos-duration="1200" 
                            className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]">
                                <figure>
                                    <img className="rounded-[10px]" src={umkm.imgUrl} alt="" />
                                </figure>

                                <div className="w-full h-full bg-headingColor bg-opacity-30 absolute top-0 left-0 z-[5] 
                                hidden group-hover:block">
                                    <div className="w-full h-full flex items-center justify-center">
                                        <button onClick={()=> showModalHandler(umkm.id)} className="text-white bg-headingColor hover:bg-smalltextColor py-2 px-4 rounded-[8px]
                                        font-[500] ease-in duration-200">
                                            Lihat Detail
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className="text-center mt-8">
                    {
                        nextItems < umkm.length && data.length > 6 && (
                            <button onClick={loadMoreHandler} className="text-white bg-headingColor hover:bg-smalltextColor py-2 px-4 rounded-[8px]
                            font-[500] ease-in duration-200">
                                Lihat Selengkapnya
                            </button>
                        )
                    }
                </div>
            </div>

            {showModal && <Modal setShowModal={setShowModal} activeID={activeID} />}
        </section>
    );
};

export default UMKM;