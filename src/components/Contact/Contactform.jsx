export default function ContactForm() {
    return (
        <section className="mb-4">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Contact Form */}
                <div>
                    <h2 className="text-2xl font-bold text-black mb-6 text-center  underline">Get in touch</h2>
                    <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input type="text" placeholder="Your Name *" className="w-full p-3 rounded-lg bg-white border border-gray-300" />
                            <input type="email" placeholder="Your Email *" className="w-full p-3 rounded-lg bg-white border border-gray-300" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input type="text" placeholder="Your Number *" className="w-full p-3 rounded-lg bg-white border border-gray-300" />
                            <input type="text" placeholder="Subject *" className="w-full p-3 rounded-lg bg-white border border-gray-300" />
                        </div>
                        <textarea placeholder="Message *" className="w-full p-3 rounded-lg bg-white border border-gray-300 h-32"></textarea>
                        <button className="text-white font-bold py-3 px-6 rounded-lg bg-orange-600">Send Message</button>
                    </form>
                </div>
                {/* Location Map */}
                <div>
                    <h2 className="text-2xl font-bold text-black mb-6 text-center underline">Location</h2>
                    <iframe
                        className="w-full h-64 rounded-lg"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7002.942914400806!2d77.212694!3d28.645599!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd61fb78944d%3A0x18e90d0686b71919!2sYash%20Tour%20%26%20Travels!5e0!3m2!1sen!2sin!4v1740643522988!5m2!1sen!2sin"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}



