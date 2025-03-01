import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Users, Gauge, Fuel, Briefcase, User, Tv, BatteryFull, Video } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumb';
import Layout from '@/layout/Layout';

export default function Cars() {
    // Combined vehicle data with features
    const vehicles = [
        {
            id: 1,
            name: "BMW-7-SERIES",
            image: "https://www.indiancarrental.com/uploads/carrent/21937_1696429021.jpg",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae similique corrupti voluptatem doloremque temporibus quaerat at eaque maiores quibusdam atque fugiat quod itaque, ad accusantium.",
            features: [
                { icon: <Users size={14} />, tooltip: "5+1 Passengers" },
                { icon: <Gauge size={14} />, tooltip: "120 kmph" },
                { icon: <Fuel size={14} />, tooltip: "Petrol" },
                { icon: <Briefcase size={14} />, tooltip: "5 Luggage Space" },
                { icon: <User size={14} />, tooltip: "Comfort/Seating Yes" },
                { icon: <Tv size={14} />, tooltip: "(TV) Available" },
                { icon: <BatteryFull size={14} />, tooltip: "Charging/Battery Available" },
                { icon: <Video size={14} />, tooltip: "Security/Camera Available" }
            ]
        },
        {
            id: 2,
            name: "BMW -5 SERIES",
            image: "https://www.indiancarrental.com/uploads/carrent/1715_1696429586.jpg",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae similique corrupti voluptatem doloremque temporibus quaerat at eaque maiores quibusdam atque fugiat quod itaque, ad accusantium.",
            features: [
                { icon: <Users size={14} />, tooltip: "4+1 Passengers" },
                { icon: <Gauge size={14} />, tooltip: "160 kmph" },
                { icon: <Fuel size={14} />, tooltip: "Diesel" },
                { icon: <Briefcase size={14} />, tooltip: "4 Luggage Space" },
                { icon: <User size={14} />, tooltip: "Luxury Seating" },
                { icon: <Tv size={14} />, tooltip: "(TV) Available" },
                { icon: <BatteryFull size={14} />, tooltip: "Fast Charging Available" },
                { icon: <Video size={14} />, tooltip: "Security/Camera Available" }
            ]
        }, {
            id: 3,
            name: "BMW - X5",
            image: "https://www.indiancarrental.com/uploads/carrent/28502_1696430005.jpg",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae similique corrupti voluptatem doloremque temporibus quaerat at eaque maiores quibusdam atque fugiat quod itaque, ad accusantium.",
            features: [
                { icon: <Users size={14} />, tooltip: "4+1 Passengers" },
                { icon: <Gauge size={14} />, tooltip: "160 kmph" },
                { icon: <Fuel size={14} />, tooltip: "Diesel" },
                { icon: <Briefcase size={14} />, tooltip: "4 Luggage Space" },
                { icon: <User size={14} />, tooltip: "Luxury Seating" },
                { icon: <Tv size={14} />, tooltip: "(TV) Available" },
                { icon: <BatteryFull size={14} />, tooltip: "Fast Charging Available" },
                { icon: <Video size={14} />, tooltip: "Security/Camera Available" }
            ]
        }, {
            id: 4,
            name: "BMW - X7",
            image: "https://www.indiancarrental.com/uploads/carrent/55366_1696430818.jpg",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae similique corrupti voluptatem doloremque temporibus quaerat at eaque maiores quibusdam atque fugiat quod itaque, ad accusantium.",
            features: [
                { icon: <Users size={14} />, tooltip: "4+1 Passengers" },
                { icon: <Gauge size={14} />, tooltip: "160 kmph" },
                { icon: <Fuel size={14} />, tooltip: "Diesel" },
                { icon: <Briefcase size={14} />, tooltip: "4 Luggage Space" },
                { icon: <User size={14} />, tooltip: "Luxury Seating" },
                { icon: <Tv size={14} />, tooltip: "(TV) Available" },
                { icon: <BatteryFull size={14} />, tooltip: "Fast Charging Available" },
                { icon: <Video size={14} />, tooltip: "Security/Camera Available" }
            ]
        }, {
            id: 5,
            name: "BMW-6GT",
            image: "https://www.indiancarrental.com/uploads/carrent/44418_1696496737.jpg",
            description: "Luxury at its best with premium interiors.",
            features: [
                { icon: <Users size={14} />, tooltip: "4+1 Passengers" },
                { icon: <Gauge size={14} />, tooltip: "160 kmph" },
                { icon: <Fuel size={14} />, tooltip: "Diesel" },
                { icon: <Briefcase size={14} />, tooltip: "4 Luggage Space" },
                { icon: <User size={14} />, tooltip: "Luxury Seating" },
                { icon: <Tv size={14} />, tooltip: "(TV) Available" },
                { icon: <BatteryFull size={14} />, tooltip: "Fast Charging Available" },
                { icon: <Video size={14} />, tooltip: "Security/Camera Available" }
            ]
        }, {
            id: 6,
            name: "BMW -7 SERIES",
            image: "https://www.indiancarrental.com/uploads/carrent/37446_1696414439.jpg",
            description: "Luxury at its best with premium interiors.",
            features: [
                { icon: <Users size={14} />, tooltip: "4+1 Passengers" },
                { icon: <Gauge size={14} />, tooltip: "160 kmph" },
                { icon: <Fuel size={14} />, tooltip: "Diesel" },
                { icon: <Briefcase size={14} />, tooltip: "4 Luggage Space" },
                { icon: <User size={14} />, tooltip: "Luxury Seating" },
                { icon: <Tv size={14} />, tooltip: "(TV) Available" },
                { icon: <BatteryFull size={14} />, tooltip: "Fast Charging Available" },
                { icon: <Video size={14} />, tooltip: "Security/Camera Available" }
            ]
        },
    ];

    const vehicleCategories = [
        { id: 1, name: "Maruti-Swift-Dzire", href: "/maruti-swift-dzire" },
        { id: 2, name: "Maruti Eeco", href: "/maruti-eeco" },
        { id: 3, name: "Toyota Etios", href: "/toyota-etios" },
        { id: 4, name: "Maruti Ertiga", href: "/maruti-ertiga" },
        { id: 5, name: "Toyota Innova Crysta", href: "/toyota-innova-crysta" }
    ];

    return (
        <>
        <Layout>
        <Breadcrumbs/>
        <div className="container mx-auto mt-4 px-4">
            <h1 className='text-3xl text-center   mb-6'>BMW CARS</h1>
            <h4 className=" text-dark text-md font-bold mb-6  px-2 lg:px-20 text-justify">
                BMW has a rich heritage and a strong reputation for producing high-quality, reliable vehicles. Their commitment to engineering excellence and continuous innovation has made them a respected name in the automotive industry. BMW cars offer a combination of performance, driving pleasure, advanced technology, luxury, and safety. Every one of our luxury car for lease are inseparable from style, execution and extravagance. The BMW vehicles on rent can move of 2 to 5 passengers comfortably across long distances. Indian Car Rental super exotic and luxury vehicle rental service in India specializes in renting all BMW models- BMW 5 Series, BMW 7 Series, BMW X5, BMW X7, BMW 6GT with great comfort, safety features and well trained uniform drivers. Indian Car Rental is a service provider of BMW Cars that include all latest brand models in metro cities of Delhi, Mumbai, Chennai, Hyderabad, Kochi, Bengaluru and adjoining cities. Reservation of luxurious BMW car can be done for Leisure Trips, VIP Meetings & Conventions, Business Travel, Wedding, Corporate Meeting, Video Shoots, Celebrity. Online Booking of BMW luxury car is available for Airport Pick Up and Drop Service, Local Run, City Tour and Outstation Trips. The BMW Cars are available in metro cities Only. For booking in other cities BMW Luxury Cars will be sent from nearby metro cities. Charges applicable.

            </h4>
            <div className="flex flex-wrap">

                <div className="w-full lg:w-3/4">
                    <div className="flex flex-wrap">
                        {vehicles.map((vehicle) => (
                            <div key={vehicle.id} className="w-full md:w-1/2 px-2 mb-4">
                                <Link href={`/bmw-cars/${vehicle.name.toLowerCase().replace(/ /g, '-')}`} className="block no-underline">
                                    <div className="border-2 border-[#32064A] text-center p-3 bg-gray-100 rounded-lg hover:shadow-lg transition-shadow duration-300">
                                        <div className="relative w-full h-52 md:h-48 lg:h-[22rem] xl:h-[20rem]">
                                            <Image src={vehicle.image} alt={vehicle.name} layout="fill" objectFit="cover" className="rounded-md" />
                                        </div>
                                        <h6 className="text-lg font-semibold mt-3">{vehicle.name}</h6>
                                        <p className="text-black-700 text-sm">{vehicle.description}</p>
                                        <div className="flex justify-center flex-wrap gap-3 mt-5">
                                            {vehicle.features.map((feature, index) => (
                                                <div key={index} className="group relative">
                                                    <div className="w-8 h-8 border-2 border-black rounded-full flex items-center justify-center bg-white hover:scale-110 transition-transform cursor-pointer">
                                                        {feature.icon}
                                                    </div>
                                                    <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded w-24 text-center">
                                                        {feature.tooltip}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="p-3 rounded-full mt-4 text-white bg-[#32064A]  px-6 hover:bg-blue-600 transition-colors duration-300">
                                            View Detail <span className="ml-1">→</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-full lg:w-1/4 px-2 ">
                    <div className="bg-gray-100 p-4 rounded-lg shadow">
                        <h5 className="text-lg font-semibold mb-4">Quick Enquiry</h5>
                        <form>
                            <input type="text" className="w-full p-2 border border-gray-300 rounded mb-3" placeholder="Name" />
                            <input type="email" className="w-full p-2 border border-gray-300 rounded mb-3" placeholder="Email" />
                            <input type="text" className="w-full p-2 border border-gray-300 rounded mb-3" placeholder="Phone Number" />
                            <input type="text" className="w-full p-2 border border-gray-300 rounded mb-3" placeholder="Country/City" />
                            <textarea className="w-full p-2 border border-gray-300 rounded mb-3" placeholder="Requirements"></textarea>
                            <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors duration-300">Submit Now</button>
                        </form>
                        <div className="mt-6 hidden lg:block">
                            <div className="bg-gray-900 text-white p-4 rounded-lg">
                                <h5 className="mb-3 font-medium">Vehicle Categories</h5>
                                {vehicleCategories.map((category) => (
                                    <Link key={category.id} href={category.href} className="text-white no-underline block py-2 border-b border-gray-700 hover:bg-gray-800 transition-colors duration-200">
                                        {category.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Layout>
        </>
    );
}
