import React from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '@/constants/homepage';
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Container from '@/components/Container';


export function TestimonialCarousel({ testimonials }) {
  return (
    <Carousel className="w-full max-w-6xl mx-auto">
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={testimonial.id}>
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col bg-brandLighter bg-opacity-40 text-brandDark py-5">
                  <p className="text-md sm:text-2xl md:text-2xl text-gray-900 font-semibold mb-10">&ldquo;{testimonial.review}&rdquo;</p>
                  <div className="flex justify-start">
                    <img className="block sm:w-20 sm:h-20 w-12 h-12 rounded-full object-cover" src={testimonial.image} alt="" />
                    <div className="flex flex-col gap-1 ml-5">
                      <span className="block text-lg font-semibold leading-none mb-1">{testimonial.name}</span>
                      <span className="block sm:text-sm text-xs font-semibold leading-none mb-1">{testimonial.postion}</span>
                      <div className="flex gap-1 mb-4 sm:pt-0 pt- justify-center">
                        {[...Array(5)].map((_, i) => (
                          <div class="flex gap-1 justify-start">
                            <Star size={13} key={i} className="text-yellow-500" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

const Testimonial = () => {
  return (
    <section className="relative py-10 px-6 lg:pt-10 lg:pb-30 bg-brandLighter bg-opacity-40 text-brandDark overflow-hidden">
        <Container>
          <div className="flex flex-wrap -mx-4 items-center mb-10">
            <div className="w-full px-4 lg:mb-0">
              <span className="text-green-950 md:flex md:mb-6 lg:pt-8 justify-center font-bold text-xl capitalize">Testimonials</span>
              <h1 className="font-heading text-3xl sm:text-4xl xs:text-6xl font-bold text-green-950 mb-4">
                <span>What our clients</span>
                <span className="font-serif text-orange-400 italic"> said</span>
              </h1>
              <p className="text-gray-700">We sersve clients from different levels and industries</p>
            </div>
          </div>
          <TestimonialCarousel testimonials={testimonials} />
        </Container>
    </section>
  );
}

export default Testimonial