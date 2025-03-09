import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
function Home() {
  return (
    <div>
      <div className="p-6 space-y-8">
        <div>
        <h1 className='text-center text-2xl font-medium'>Home Page</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At placeat
            necessitatibus ex inventore non officiis vel! Omnis ducimus quisquam
            totam consequatur libero sint culpa vel nulla, pariatur sapiente!
            Aliquam, fugit?
          </p>
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure earum
          laboriosam modi magnam consectetur possimus odio ipsa atque
          doloremque, sint aliquid architecto soluta illum hic reiciendis
          consequatur ex blanditiis. Esse!
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
          mollitia rerum. Commodi vero impedit tempore modi accusantium aliquam
          sunt cupiditate delectus, fugit nulla doloribus. Quis corporis error
          eos aspernatur odit!
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A, totam sunt
          minus magni minima dicta animi, tempora quae quas sint aliquid dolor
          alias veritatis doloribus accusantium vero rem illum architecto!
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          delectus libero, odit eaque repellat maiores culpa, dicta laborum a
          voluptates assumenda unde distinctio quibusdam consequuntur
          exercitationem, odio quam perferendis alias.
        </div>
        <div>
          <button className="bg-[#fc2c36] px-3 py-1 rounded cursor-pointer text-white">
            <Link to={"/shop"}>Explore Products</Link>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
