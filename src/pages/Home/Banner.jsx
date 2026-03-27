import React, { memo, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import Lottie from 'lottie-react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import your Lottie JSON animations
import animation1 from '../../assets/slide2.json';
import animation2 from '../../assets/slide4.json';
import animation3 from '../../assets/slide3.json';
import animation4 from '../../assets/slide1.json';

const slidesData = [
  {
    id: 1,
    title: "Where's Your Lost Item?",
    description:
      "Can't find your belongings? Post it here and let our community help you track it down. Lost items deserve to be found.",
    animation: animation1,
  },
  {
    id: 2,
    title: 'Found Something? Make a Difference',
    description:
      'Discover items waiting to be returned to their owners. Be a hero by reuniting lost belongings with the people who cherish them.',
    animation: animation2,
  },
  {
    id: 3,
    title: 'Your Campus, Your Community',
    description:
      "We're building a connected network where nothing stays lost for long. Report, search, and recover with just a few clicks.",
    animation: animation3,
  },
  {
    id: 4,
    title: 'Every Item Has a Story',
    description:
      'From keys to gadgets, we help bring meaningful items back home. Trust our community to get what matters most back to you.',
    animation: animation4,
  },
];

const Banner = memo(function Banner() {
  const navigate = useNavigate();
  const settings = useMemo(
    () => ({
      dots: true,
      infinite: true,
      speed: 650,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: true,
      pauseOnFocus: false,
      arrows: false,
      swipe: true,
      touchMove: true,
      draggable: true,
      cssEase: 'cubic-bezier(0.22, 1, 0.36, 1)',
      lazyLoad: 'ondemand',
      adaptiveHeight: false,
    }),
    []
  );

  const slides = useMemo(() => slidesData, []);

  return (
    <section className="px-4 py-6 md:px-6 md:py-10">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-[0_10px_40px_rgba(2,6,23,0.04)]">
        <Slider {...settings} className="banner-slider">
          {slides.map((slide) => (
            <div key={slide.id}>
              <div className="bg-gradient-to-r from-white via-emerald-50/60 to-emerald-100/40 px-5 py-8 md:px-10 md:py-12 lg:px-14 lg:py-16">
                <div className="flex min-h-[320px] flex-col items-center justify-between gap-8 md:min-h-[440px] md:flex-row md:gap-10">
                  {/* Text Content */}
                  <div className="w-full md:w-1/2">
                    <div className="max-w-xl">
                      <span className="mb-4 inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700 md:text-sm">
                        Campus Lost & Found
                      </span>

                      <h1 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
                        {slide.title}
                      </h1>

                      <p className="mt-4 max-w-lg text-sm leading-7 text-slate-600 md:mt-5 md:text-base lg:text-lg">
                        {slide.description}
                      </p>

                      <div className="mt-6 flex flex-col gap-3 sm:flex-row md:mt-8">
                        <button
                          type="button"
                          onClick={() => navigate('/app/post-item')}
                          className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-300 md:text-base"
                        >
                          Report Lost Item
                        </button>

                        <button
                          type="button"
                          onClick={() => navigate('/signin')}
                          className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-colors duration-200 hover:border-emerald-200 hover:text-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-200 md:text-base"
                        >
                          Browse Found Items
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Animation */}
                  <div className="flex w-full items-center justify-center md:w-1/2">
                    <div className="banner-animation-wrap flex h-[240px] w-[240px] items-center justify-center rounded-full border border-white/70 bg-white/90 p-4 shadow-[0_12px_35px_rgba(16,185,129,0.08)] backdrop-blur-sm sm:h-[280px] sm:w-[280px] md:h-[340px] md:w-[340px] md:p-6">
                      <Lottie
                        animationData={slide.animation}
                        loop
                        autoplay
                        className="banner-lottie h-full w-full"
                        rendererSettings={{
                          preserveAspectRatio: 'xMidYMid meet',
                          progressiveLoad: true,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <style>{`
        .banner-slider,
        .banner-slider .slick-list,
        .banner-slider .slick-track,
        .banner-slider .slick-slide > div {
          height: 100%;
        }

        .banner-slider .slick-list {
          overflow: hidden;
          border-radius: 24px;
          transform: translate3d(0, 0, 0);
        }

        .banner-slider .slick-track {
          display: flex !important;
          align-items: stretch;
          will-change: transform;
        }

        .banner-slider .slick-slide {
          height: inherit !important;
        }

        .banner-slider .slick-dots {
          bottom: 18px;
        }

        .banner-slider .slick-dots li {
          margin: 0 3px;
        }

        .banner-slider .slick-dots li button:before {
          font-size: 10px;
          color: #10b981;
          opacity: 0.28;
        }

        .banner-slider .slick-dots li.slick-active button:before {
          color: #059669;
          opacity: 1;
        }

        .banner-animation-wrap,
        .banner-lottie {
          transform: translateZ(0);
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          will-change: transform;
        }

        .banner-slider * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        @media (max-width: 768px) {
          .banner-slider .slick-dots {
            bottom: 10px;
          }
        }
      `}</style>
    </section>
  );
});

export default Banner;
