'use client';
import { useEffect } from 'react';
import Image from "next/image";

export default function Carousel() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <div id="carouselExample" className="carousel slide carousel-fade" data-bs-ride="carousel">
      <div className="carousel-inner">
        {/* Slide 1 */}
        <div className="carousel-item active">
          <Image src="/image/Carousel/satturn.jpg" className="d-block w-100" alt="..." width={1920} height={690} />
          <div className="carousel-caption d-flex flex-column justify-content-center align-items-center h-100">
            <div className="card card-overlay p-4 text-center">
              <h3 className="text-white fw-bold mb-2">Explore Saturn</h3>
              <p className="text-white mb-3">Discover the beauty of the ringed planet.</p>
              <button className="btn btn-primary fw-bold">Learn More</button>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <Image src="/image/Carousel/star.jpg" className="d-block w-100" alt="..." width={1920} height={690} />
          <div className="carousel-caption d-flex flex-column justify-content-center align-items-center h-100">
            <div className="card card-overlay p-4 text-center">
              <h3 className="text-white fw-bold mb-2">Starry Night</h3>
              <p className="text-white mb-3">Feel the magic of the universe.</p>
              <button className="btn btn-primary fw-bold">Explore</button>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="carousel-item">
          <Image src="/image/sliders/sliders-03.jpg" className="d-block w-100" alt="..." width={1920} height={690} />
          <div className="carousel-caption d-flex flex-column justify-content-center align-items-center h-100">
            <div className="card card-overlay p-4 text-center">
              <h3 className="text-white fw-bold mb-2">Cosmic Journey</h3>
              <p className="text-white mb-3">Start your adventure through space.</p>
              <button className="btn btn-primary fw-bold">Get Started</button>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>

      <style jsx>{`
        .carousel-caption {
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
        }

        .card-overlay {
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(6px);
          border-radius: 16px;
          max-width: 400px;
          animation: fadeUp 0.8s ease-out forwards;
        }

        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .btn-primary {
          transition: 0.3s;
        }

        .btn-primary:hover {
          background-color: #2575fc;
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
}
