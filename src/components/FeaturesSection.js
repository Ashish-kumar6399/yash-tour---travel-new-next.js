export default function FeaturesSection() {
    return (
        <>
      <div className="bg-[#e42a69] text-white py-6 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          
          {/* 24 Hours Available */}
          <div className="flex items-center space-x-4">
            <div className="text-4xl">
              <i className="fas fa-user-clock"></i>
            </div>
            <div className="text-left">
              <h3 className="font-bold text-lg">24 HOURS AVAILABLE</h3>
              <p className="text-sm">
                24 Hours x 7 Days Open | 24 Hours Customer Support | Book Through Web or Phone
              </p>
            </div>
          </div>
  
          {/* Highest Rated */}
          <div className="flex items-center space-x-4">
            <div className="text-4xl">
              <i className="fas fa-star"></i>
            </div>
            <div className="text-left">
              <h3 className="font-bold text-lg">HIGHEST RATED</h3>
              <p className="text-sm">
                Finest Quality Of Fleet | Highest Rated On Google Local | 100% Customer Satisfaction
              </p>
            </div>
          </div>
  
          {/* Lowest Prices */}
          <div className="flex items-center space-x-4">
            <div className="text-4xl">
              <i className="fas fa-arrow-down"></i>
            </div>
            <div className="text-left">
              <h3 className="font-bold text-lg">LOWEST PRICES</h3>
              <p className="text-sm">
                Lowest Price Than Others | Transparent pricing structure | Cheaper Than Cheapest.
              </p>
            </div>
          </div>
  
        </div>
      </div>
      
  {/* <div id="about" className="flex justify-center text-black py-16 px-6 h-auto  w-full">
    <div
      className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 h-full w-full md:mx-5 md:px-10">
      <div className="w-full  flex gap-2 md:gap-4 md:h-full">
        <div className="">
          <img
            src="https://www.libertytravel.com/sites/default/files/styles/full_size/public/Tahiti-hero.jpg?itok=El19cIiC"
            alt="Girl Doing Payment" className="rounded-lg shadow-lg md:w-full- h-full md:h-full object-cover" />
        </div>

      </div>

      <div className="w-full  space-y-2 md:space-y-4">
        <h3 className="text-2xl md:text-4xl font-bold">
          Ghumakkar Masti
        </h3>
        <p className="text- md:text-lg leading-relaxed text-black text-justify">
          Ghumakkar masti is one of the leading Holiday Deal provider company in Delhi india.Ghumakkar Masti provide all
          kind of Travel package like kashmir packages, Leh and ladakh Packages,Portblair holiday packages,north East
          tour packages, Shimla manali Packages,Wildlife packages,South India Packages,South India Religious tour
          packages,Chardham yatra,Mata vashinov Devi yatra,Indian cultural Tours,Discover Kerla tours and many more
          packages is not a valid packages with customise according to your need.
          Ghumakkar Masti will be your good travel partner we are comitted to provide good services and satisfaction of
          our customers.
        </p>

       

        <div className="mt-5 md:mt-20">
          <a href=""
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-3 md:px-6 py-1.5 md:py-3 rounded-lg shadow-md transition-colors">
            Book Now
          </a>
        </div>
      </div>
    </div>
  </div> */}
      </>
    );
  }
  