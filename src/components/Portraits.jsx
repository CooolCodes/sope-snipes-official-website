import gif from "../assets/Untitled design.gif";
import img1 from "../assets/_USA5666.jpg";
import img2 from "../assets/IMG_9213.jpg";
import img3 from "../assets/IMG_9260.jpg";
import img4 from "../assets/IMG_9320.jpg";
import img5 from "../assets/IMG_9325.jpg";
import img6 from "../assets/IMG_2446.JPG";

const Portraits = () => {
  return (
    <div>
      <div>
        <section id="portraits" className="bg-gray-50 py-10 px-4">
          <div className="max-w-6xl mx-auto ">
            <h2 className="text-5xl md:text-8xl font-black text-black mb-10 tracking-tight">
              PORTRAITS
            </h2>
            <div className="md:hidden">
              <img src={gif} />
            </div>

            <div className="hidden md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-3">
              <img
                src={img2}
                alt="image2"
                className="w-full h-full object-cover"
              />
              <img src={img4} alt="image4" />
              <img src={img3} alt="image3" />
              <img
                src={img6}
                alt="image6"
                className="w-full h-full object-cover"
              />
              <img
                src={img1}
                alt="image1"
                className="w-full h-full object-cover"
              />
              <img src={img5} alt="image5" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Portraits;
