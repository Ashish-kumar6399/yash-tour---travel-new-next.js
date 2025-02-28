import Link from 'next/link';


export default function AboutSection() {
  return (
    <div className=" py-12 px-4 lg:px-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-black font-bold text-4xl mb-4"> Yash Tour & Travels
          </h1>
          <h6 className="text-gray-700 mb-4 text-justify text-lg">
            Welcome to Yash Tour & Travels, your trusted partner for
            comfortable, reliable, and affordable journeys. Discover the joy of
            travel with our premium rental services across India.every journey
            is a promise of memories that last a lifetime. As your premier
            travel companion, we are dedicated to providing you with
            comfortable, reliable, and affordable travel solutions. Our mission
            is to make your voyages across India's diverse landscapes as
            seamless and enjoyable as possible.
            Our fleet, a symphony of modernity and convenience, is meticulously
            maintained to ensure your safety and comfort. 
          </h6>
         
          <Link
            href="/about"
            className="uppercase font-bold text-gray-800 hover:text-gray-600 px-5 text-lg"
          >
            Read More...
          </Link>
        </div>

        {/* Right Image with Play Button */}
        <div className="relative">
          <img
            src="https://th.bing.com/th/id/R.4ea54f75ad8b5f75c3a1c6e95b149fcd?rik=5qb%2fdM97yDvFVg&riu=http%3a%2f%2fwww.hdcarwallpapers.com%2fwalls%2f2015_mercedes_benz_cls-HD.jpg&ehk=Ek4F0Kr1Np%2b0KEoUz1pjqwrf2DurpxM8rKZYmw8Ifn8%3d&risl=&pid=ImgRaw&r=0" // Replace with your image path
            alt="Video Thumbnail"
            width={600}
            height={400}
            className="w-full h-48 lg:h-96 rounded"
          />
        </div>
      </div>
    </div>
  );
}
