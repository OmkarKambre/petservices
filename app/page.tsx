"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent} from "@/components/ui/card"
import { PawPrint, Heart, Clock, Shield } from 'lucide-react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const notify = () => toast("Wow so easy!");

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-r from-purple-900 to-black">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">PawPerfect Pet Services</h1>
          <p className="text-xl mb-8 text-purple-200">Professional care for your beloved pets</p>
          <Link href="/book">
            <Button className="bg-purple-600 hover:bg-purple-700 transition-colors" onClick={notify}>Book Now</Button>
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-black">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: PawPrint, title: "Dog Walking", description: "Daily walks and exercise" },
              { icon: Heart, title: "Pet Sitting", description: "In-home pet care" },
              { icon: Clock, title: "Day Care", description: "Full day pet supervision" },
              { icon: Shield, title: "Training", description: "Professional pet training" },
            ].map((service, index) => (
              <Card key={index} className="bg-purple-900/20 border-purple-800 transition-transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <service.icon className="w-12 h-12 mx-auto mb-4 text-purple-400" />
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-purple-200">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services">
              <Button variant="outline" className="border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white transition-colors">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-purple-900/20">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Happy Pet Parents</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah M.",
                text: "Amazing service! My dog loves their walks.",
                rating: 5,
              },
              {
                name: "John D.",
                text: "Professional and caring pet sitters. Highly recommend!",
                rating: 5,
              },
              {
                name: "Emma L.",
                text: "Great training sessions. Saw improvement in just weeks!",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-purple-900/20 border-purple-800">
                <CardContent className="p-6">
                  <p className="mb-4">{testimonial.text}</p>
                  <p className="font-semibold text-purple-400">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to give your pet the best care?</h2>
          <p className="text-xl mb-8 text-purple-200">Book a service today and see the PawPerfect difference!</p>
          <Link href="/book">
            <Button className="bg-purple-600 hover:bg-purple-700 transition-colors text-lg px-8 py-3" onClick={notify}>
              Book Now
            </Button>
          </Link>
        </div>
      </section>

      <ToastContainer />
    </main>
  )
}

