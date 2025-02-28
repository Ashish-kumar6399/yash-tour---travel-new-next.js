export default function ContactUs() {
    return (
      <section className="relative py-8">
        <div className="absolute inset-x-0 top-0 h-80 bg-cover bg-center" style={{ backgroundImage: 'url(https://duruthemes.com/demo/html/renax/light/img/slider/4.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 text-center text-white py-16">
          <p className="text-md font-bold uppercase tracking-wide" style={{color: "#ec3323"}}>Get in Touch</p>
          <h2 className="text-4xl font-bold">Contact <span className="" style={{color: "#ec3323"}}>Us</span></h2>
        </div>
        <div className="relative z-20 container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-[-0px]">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center">
            <div className="text-3xl mb-4" style={{color: "#ec3323"}}>✉️</div>
            <h3 className="font-semibold text-lg">Email us</h3>
            <p className="text-black-600">yashtourandtravels1@gmail.com</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center">
            <div className="text-3xl mb-4" style={{color: "#ec3323"}}>📍</div>
            <h3 className="font-semibold text-lg">Our address</h3>
            <p className="text-black-600">Bimal Mansion,SF-2,Second Floor,8584,Pahar Ganj,Behind,Shiela Cinema,Near St. Anthony School,New Delhi-55</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center">
            <div className="text-3xl mb-4" style={{color: "#ec3323"}}>⏰</div>
            <h3 className="font-semibold text-lg">Office Timing</h3>
            <p className="text-balck-600">24/7</p>
          </div>
          <div className="p-6 rounded-lg shadow-lg text-center flex flex-col items-center bg-white" >
            <div className="text-black text-3xl mb-4">📞</div>
            <h3 className="font-semibold text-lg text-black">Call us</h3>
            <p className="text-black">+91 9773764427

+91-9312288985</p>
          </div>
        </div>
      </section>
    );
  }