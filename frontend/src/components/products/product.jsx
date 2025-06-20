import { motion } from 'framer-motion';
import { FaLeaf, FaRunning, FaUserAlt, FaMoneyBillWave, FaCalendarAlt, FaPrescriptionBottle, FaTablets, FaCalculator } from 'react-icons/fa';
import { RiDrinksFill, RiDrinks2Fill } from "react-icons/ri";
import { GiPowderBag, GiJumpingRope } from "react-icons/gi";
import { GrYoga } from "react-icons/gr";
import Navbar from '../Navbar';
import Footer from '../footer';
import Image from 'next/image';
import shakeweight from '../../app/assets/shakeweight.jpg';
import tablettarget from '../../app/assets/tablettarget.jpg';
import energydrink from '../../app/assets/energydrink.jpg';
import shakes from '../../app/assets/shakes.jpg';
import tabletbox from '../../app/assets/tabletbox.jpg';
import marathon from '../../app/assets/marathon.jpg';
import dietplan from '../../app/assets/dietplan.jpg';
import basicexercise from '../../app/assets/basicexercise.jpg';
import yoga from '../../app/assets/yoga.jpg';

const products = [
  {
    id: 1,
    title: "Shakes for Weight Management",
    image: shakeweight,
    icon: <RiDrinksFill />,
    description: "Personalized shakes to help you reach your weight goals.",
    highlight: "Personalized Plans",
    action: "Learn More"
  },
  {
    id: 2,
    title: "Tablets for Target",
    image: tablettarget,
    icon: <FaTablets />,
    description: "Targeted supplements for your specific needs.",
    highlight: "Targeted Nutrition",
    action: "Learn More"
  },
  {
    id: 3,
    title: "Energy Drinks",
    image: energydrink,
    icon: <RiDrinks2Fill />,
    description: "Wholesome energy drinks for a quick, healthy energy boost without the crash.",
    highlight: "Natural ingredients, quick energy, no crash",
    action: "Buy Now"
  },
  {
    id: 4,
    title: "Shakes",
    image: shakes,
    icon: <GiPowderBag />,
    description: "Delicious, nutritious shakes for meal replacement or snack, rich in protein and vitamins.",
    highlight: "Convenient, balanced nutrition, tasty",
    action: "Buy Now"
  },
  {
    id: 5,
    title: "Tablet Box",
    image: tabletbox,
    icon: <FaPrescriptionBottle />,
    description: "A convenient box containing a variety of essential supplements for daily health",
    highlight: "All-in-one, easy to use, supports wellness",
    action: "Buy Now"
  },
  {
    id: 6,
    title: "Special Marathons",
    image: marathon,
    icon: <FaRunning />,
    description: "Community-driven marathons to challenge yourself and connect with others.",
    highlight: "Motivational, social, fun, goal-oriented",
    action: "Register Now"
  },
  {
    id: 7,
    title: "One-to-One Diet Plan",
    image: dietplan,
    icon: <FaCalculator />,
    description: "Personalized diet plan tailored to your unique needs and goals by expert nutritionists.",
    highlight: "Customized, expert advice, sustainable",
    action: "Book Now"
  },
  {
    id: 8,
    title: "Daily Basic Exercise",
    image: basicexercise,
    icon: <GiJumpingRope />,
    description: "Simple, effective daily exercise routines suitable for all fitness levels.",
    highlight: "Easy to follow, improves fitness, flexible",
    action: "Start Now"
  },
  {
    id: 9,
    title: "Yoga",
    image: yoga,
    icon: <GrYoga />,
    description: "Guided yoga sessions for flexibility, strength, and mental clarity.",
    highlight: "Mind-body balance, relaxing, accessible",
    action: "Book Now"
  },
  
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
        <Navbar/>
      {/* Hero Section */}
      <div className="relative h-64 md:h-96 bg-blue-700 flex items-center justify-center">
        <img
          src="/images/hero-products.jpg"
          alt="Health Products"
          className="absolute w-full h-full object-cover opacity-70"
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white">Empower Your Health Journey</h1>
          <p className="mt-4 text-xl text-white">Premium Products & Services Tailored for You</p>
          <button className="mt-6 bg-white text-blue-700 px-6 py-2 rounded-lg font-medium hover:bg-blue-100 transition">
            Explore Our Offerings
          </button>
        </div>
      </div>

      {/* Products/Services Grid */}
      <div className="max-w-6xl mx-auto py-12 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="text-blue-600 mr-2">{product.icon}</span>
                  <h3 className="text-xl font-bold">{product.title}</h3>
                </div>
                <p className="text-gray-600 mb-3">{product.description}</p>
                <div className="flex items-center mb-4">
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">
                    {product.highlight}
                  </span>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
                  {product.action}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Special Highlights */}
      <div className="bg-gray-100 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-start">
              <FaMoneyBillWave className="text-blue-600 text-2xl mr-4" />
              <div>
                <h3 className="font-bold">Money Back Guarantee</h3>
                <p className="text-gray-600">Not satisfied? Get your money back, no questions asked.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-start">
              <FaUserAlt className="text-blue-600 text-2xl mr-4" />
              <div>
                <h3 className="font-bold">2 Special Coaches</h3>
                <p className="text-gray-600">Expert guidance from our dedicated coaches.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-start">
              <FaCalendarAlt className="text-blue-600 text-2xl mr-4" />
              <div>
                <h3 className="font-bold">4 Times One-to-One Consultation</h3>
                <p className="text-gray-600">Ongoing support with regular check-ins.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer/>
    </div>
  );
}
