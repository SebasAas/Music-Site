import React from 'react'

// CSS
import 'assets/css/Home/BannerPage.css';

function BannerPage() {

  return (
    <>
      <div style={{ background: 'linear-gradient(130deg, #ff2995, #ff3d7f, #ff6655, #FF5F65)', zIndex: '9999999' }}>
        <div className="col-12 banner__main__container">
          <div className="d-none d-sm-block col-sm-6 col-md-6 col-lg-6 banner__total__image"></div>
          <div className="col-sm-6 col-md-6 col-lg-6 banner__background__text" >
            <div className="banner__container">
              <div className="banner__row">
                <div className="center__text">
                  <div className="banner__container__title">
                    <h1 className="banner__title">Escucha las mejores musicas</h1>
                  </div>
                </div>
                <div className="center__text">
                  <div className="banner__container__paragraph">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae praesentium asperiores repudiandae, cumque molestias iure ea reiciendis!</p>
                  </div>
                </div>
                <div className="banner__section">
                  <div className="banner__section__div">
                    {/* <button className="banner__section__button">
                <img className="banner__section__image" src="https://i.scdn.co/image/ab67616d0000b273daaa5a76699780480b232ad9" alt="" />
              </button> */}
                    <a className="banner__section__button">
                      <img className="banner__section__image" src="https://i.scdn.co/image/ab67616d0000b27326ade10c17424417bd06f1d6" alt="" />
                      <div className="banner__section__image__back">
                        <svg width="2.5em" height="2.5em" viewBox="0 0 16 16" className="bi bi-play" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10.804 8L5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" />
                        </svg>
                        <p>Vilma Palma</p>
                      </div>
                    </a>
                    <a className="banner__section__button">
                      <img className="banner__section__image" src="https://i.scdn.co/image/ab67616d0000b273c6031b915b9ce1378be1200f" alt="" />
                      <div className="banner__section__image__back">
                        <svg width="2.5em" height="2.5em" viewBox="0 0 16 16" className="bi bi-play" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10.804 8L5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" />
                        </svg>
                        <p>Vilma Palma</p>
                      </div>
                    </a>
                    {/* <button className="banner__section__button">
                <img className="banner__section__image" src="https://i.scdn.co/image/ab67616d0000b273daaa5a76699780480b232ad9" alt="" />
              </button> */}
                  </div>
                  <div className="banner__section__div">
                    {/* <button className="banner__section__button">
                <img className="banner__section__image" src="https://i.scdn.co/image/ab67616d0000b27326ade10c17424417bd06f1d6" alt="" />
              </button>
              <button className="banner__section__button">
                <img className="banner__section__image" src="https://i.scdn.co/image/ab67616d0000b273c6031b915b9ce1378be1200f" alt="" />
              </button> */}
                    <button className="banner__section__button">
                      <img className="banner__section__image" src="https://i.scdn.co/image/ab67616d0000b273daaa5a76699780480b232ad9" alt="" />
                    </button>
                    <button className="banner__section__button">
                      <img className="banner__section__image" src="https://i.scdn.co/image/ab67616d0000b27326ade10c17424417bd06f1d6" alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BannerPage
