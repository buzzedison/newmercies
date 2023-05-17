export default function Hero() {
    return (
      <div className="relative bg-white overflow-hidden">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font font-extrabold tracking-tight sm:text-6xl">Total Relaxation.</h1> 
              <h1 className="text-4xl font font-extrabold tracking-tight sm:text-6xl">Rejuvenate with Nature.</h1>  
              <p className="mt-4 text-xl text-gray-500">We bring the stunning natural surroundings and peaceful ambience. You focus on letting go of everyday stresses.</p>
            </div>
            <div>
              {/* Slider */}
              <div className="mt-10">
                {/* Slider */}
              <div className="sm:hidden">
                <Slider {...settings}>
                  <div>
                    <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" />
                  </div>
                  <div>
                    <img src="https://images.unsplash.com/photo-1505926257838-685f0eb611ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" /> 
                  </div>  
                </Slider>
              </div>
  
              <div className="hidden sm:block">
                <Slider {...settings}>
                  <div>
                    <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" />
                  </div>
                  <div>
                    <img src="https://images.unsplash.com/photo-1505926257838-685f0eb611ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" /> 
                  </div>
                </Slider>
              </div>
            </div>
            </div>
          </div>
        </div>
        <div className="sm:mx-auto sm:w-full">
          <div className="sm:mx-auto sm:w-full">
            <Link href="#">
              <a  className="flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                Book your Tranquil Escape
              </a>
            </Link>
          </div>
        </div>
      </div>
    )
  }