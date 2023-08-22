import React from "react";
import PetaUMKM from "../../assets/images/petaUMKM.png"

function Peta() {

    return (
        <section id="peta" className="pb-16">
            <div className="container">

                <h2 className="flex justify-center text-headingColor font-[700] text-[2rem] mb-5">
                    Peta Sebaran UMKM
                </h2>

                <div className="md:flex justify-start items-start">
                    <div className="md:w-[3800px]">
                        <img src={PetaUMKM} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Peta;

// import React from 'react';

// import product from './product.jpg'

// function Peta() {
//   const imageProps = {
//     smallImage: {
//       alt: '',
//       isFluidWidth: true,
//       src: PetaUMKM
//     },
//     largeImage: {
//       src: PetaUMKM,
//       width: 1200,
//       height: 1800
//     },
//     enlargedImageContainerStyle: { background: '#fff', zIndex: 9 }
//   };
//   return (
//     <div className="container mt-4">
//       <h2>Product details</h2>
//       <div className="row mt-4">
//         <div className="col-md-5">
//           <ReactImageMagnify {...imageProps} />
//         </div>
//         <div className="col-md-7">
//           <a className="mb-3 d-block" href="http://www.cluemediator.com">Clue Mediator</a>
//           <p className="title">Phasellus laoreet</p>
//           <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet nisi aliquet, tincidunt metus eget, bibendum dui. Phasellus a hendrerit lectus, sit amet porttitor enim. Duis convallis eu erat quis sodales. Vestibulum pharetra sagittis nisl. Nullam a arcu ac quam vestibulum ultricies sed vel quam. Fusce ac malesuada nibh. Suspendisse facilisis ex eu ligula vulputate porttitor. Vestibulum vitae aliquet ligula, quis viverra sem. Nullam at ligula nec enim tempor luctus. Nunc et magna ut magna fringilla fermentum vestibulum vitae ex. Morbi tempus enim dolor, quis vehicula odio feugiat non.</p>
//           <div className="options">
//             <p>Vivamus in auctor lorem</p>
//             <input type="button" value="Lorem" className="btn btn-outline-secondary mr-2" />
//             <input type="button" value="ipsum" className="btn btn-outline-secondary mr-2" />
//             <input type="button" value="aliquet" className="btn btn-outline-secondary mr-2" />
//           </div>
//           <div className="add-cart">
//             <p className="float-left mr-3">$180</p>
//             <input type="button" value="Add to cart" className="btn btn-danger float-left" />
//             <div className="clearfix"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;