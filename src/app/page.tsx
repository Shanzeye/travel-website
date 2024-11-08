import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="dark:bg-gray-900 bg-stone-100 py-24">
    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Let's Travel WorldWide!</h2>
            <p className="mb-4 text-2xl">Travel is a powerful way to broaden one's horizons, offering new perspectives, experiences, and a deeper connection to the world. Whether it's exploring bustling cities, tranquil landscapes, or immersing oneself in different cultures, travel opens up opportunities to learn, grow, and appreciate the diversity of life. The act of journeying allows people to step outside their comfort zones, encounter unfamiliar traditions, taste new cuisines, and forge lasting memories. Beyond the excitement of exploration, travel also fosters a sense of wonder, reminding us of the vastness of the world and the richness of human experience.
            </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
            <img className="w-full rounded-lg" src="https://images.pexels.com/photos/3250613/pexels-photo-3250613.jpeg?auto=compress&cs=tinysrgb&w=600" alt="pic1"/>
            <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://images.pexels.com/photos/3155639/pexels-photo-3155639.jpeg?auto=compress&cs=tinysrgb&w=600" alt="pic2"/>
        </div>
    </div>
</section>


<section className="text-gray-600 body-font bg-stone-100">
  <div className="container px-5 py-24 mx-auto">
    <h1 className="py-9 pb-24 text-center text-5xl font-bold">SOME BEAUTIFUL PLACES!</h1>

    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden transition-all duration-500 transform hover:scale-105 hover:opacity-90">
          <img 
            
            className="object-cover object-center w-full h-full block transition-transform duration-500 ease-in-out" 
            src="https://images.pexels.com/photos/1450354/pexels-photo-1450354.jpeg?auto=compress&cs=tinysrgb&w=600"alt="pic1"/>
        </a>
        <div className="mt-4">
          <h2 className="text-gray-900 title-font text-2xl font-semibold transition-all duration-300 hover:text-teal-500">
            MALDIVES
          </h2>
        </div>
      </div>


      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden transition-all duration-500 transform hover:scale-105 hover:opacity-90">
          <img 
             
            className="object-cover object-center w-full h-full block transition-transform duration-500 ease-in-out" 
            src="https://images.pexels.com/photos/2767815/pexels-photo-2767815.jpeg?auto=compress&cs=tinysrgb&w=600" alt="pic2"/>
        </a>
        <div className="mt-4">
          <h2 className="text-gray-900 title-font text-2xl font-semibold transition-all duration-300 hover:text-teal-500">
            TURKEY
          </h2>
        </div>
      </div>


      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden transition-all duration-500 transform hover:scale-105 hover:opacity-90">
          <img 
            
            className="object-cover object-center w-full h-full block transition-transform duration-500 ease-in-out" 
            src="https://images.pexels.com/photos/3763190/pexels-photo-3763190.jpeg?auto=compress&cs=tinysrgb&w=600" alt="pic3"/>
        </a>
        <div className="mt-4">
          <h2 className="text-gray-900 title-font text-2xl font-semibold transition-all duration-300 hover:text-teal-500">
            DUBAI
          </h2>
        </div>
      </div>


      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden transition-all duration-500 transform hover:scale-105 hover:opacity-90">
          <img className="object-cover object-center w-full h-full block transition-transform duration-500 ease-in-out" 
            src="https://images.pexels.com/photos/358229/pexels-photo-358229.jpeg?auto=compress&cs=tinysrgb&w=600"alt="pic4" />
        </a>
        <div className="mt-4">
          <h2 className="text-gray-900 title-font text-2xl font-semibold transition-all duration-300 hover:text-teal-500">THAILAND</h2>
        </div>
      </div>


      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden transition-all duration-500 transform hover:scale-105 hover:opacity-90">
          <img 
            alt="pic5" 
            className="object-cover object-center w-full h-full block transition-transform duration-500 ease-in-out" 
            src="https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
        </a>
        <div className="mt-4">
          <h2 className="text-gray-900 title-font text-2xl font-semibold transition-all duration-300 hover:text-teal-500">
            ENGLAND
          </h2>
        </div>
      </div>



      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden transition-all duration-500 transform hover:scale-105 hover:opacity-90">
          <img 
            alt="pic6" 
            className="object-cover object-center w-full h-full block transition-transform duration-500 ease-in-out" 
            src="https://images.pexels.com/photos/723177/pexels-photo-723177.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
        </a>
        <div className="mt-4">
          <h2 className="text-gray-900 title-font text-2xl font-semibold transition-all duration-300 hover:text-teal-500">
            SWITZERLAND
          </h2>
        </div>
      </div>


      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden transition-all duration-500 transform hover:scale-105 hover:opacity-90">
          <img 
            alt="pic7" 
            className="object-cover object-center w-full h-full block transition-transform duration-500 ease-in-out" 
            src="https://images.pexels.com/photos/3117216/pexels-photo-3117216.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
        </a>
        <div className="mt-4">
          <h2 className="text-gray-900 title-font text-2xl font-semibold transition-all duration-300 hover:text-teal-500">
            DENMARK
          </h2>
        </div>
      </div>



      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden transition-all duration-500 transform hover:scale-105 hover:opacity-90">
          <img 
             
            className="object-cover object-center w-full h-full block transition-transform duration-500 ease-in-out" src="https://images.pexels.com/photos/755050/pexels-photo-755050.jpeg?auto=compress&cs=tinysrgb&w=600" alt="pic8"/>
        </a>
        <div className="mt-4">
          <h2 className="text-gray-900 title-font text-2xl font-semibold transition-all duration-300 hover:text-teal-500">AMERICA</h2>
        </div>
      </div>
    </div>
  </div>
</section>










<section className="text-gray-600 py-24 bg-stone-100 body-font">
<h1 className="py-24 text-center text-5xl font-bold">About Us</h1>

  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
      <img  className="object-cover object-center h-full w-full" src="https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?auto=compress&cs=tinysrgb&w=600" alt="pic"/>
    </div>
    <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
      <div className="flex flex-col mb-10 lg:items-start items-center">
        
        <div className="flex-grow">
          <h2 className="text-gray-900 text-4xl title-font font-bold mb-3">OUR MISSION!</h2>
          <p className="leading-relaxed text-2xl">At <b className="text-red-700">"TRAVEL WORLDWIDE"</b>, we are passionate about helping you discover the world in meaningful and unforgettable ways. Whether you're seeking an adventure in far-off destinations, a relaxing retreat, or a cultural immersion, we curate travel experiences that suit every type of traveler. With years of expertise and a deep love for exploration, our team is dedicated to making your journey as smooth, exciting, and enriching as possible. From hidden gems to popular hotspots, we believe that every trip is an opportunity to create memories that will last a lifetime.</p>
          
        </div>
      </div>
      <div className="flex flex-col mb-10 lg:items-start items-center">
          
        </div>
        
      </div>
    </div>
</section>





<section className="text-gray-600 bg-stone-100 body-font">
  <div className="container px-5 py-24 mx-auto">
    <h1 className="text-3xl font-bold title-font text-gray-900 mb-12 text-center">What Our Customers Says About-Us</h1>
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/2 w-full">
        <div className="h-full bg-stone-300 p-8 rounded">
          
          <p className="leading-relaxed mb-6">"I’ve traveled all over the world, but my experience with <b className="text-bold">TRAVEL WORLDWIDE</b> was by far the best! Their attention to detail, personalized recommendations, and seamless planning made our trip stress-free and full of unforgettable moments. Highly recommend!"</p>
            <span className="flex-grow flex flex-col pl-4">
              <span className="title-font font-medium text-gray-900">Sarah & John M.</span>
            </span>
        </div>
      </div>
      <div className="p-4 md:w-1/2 w-full">
        <div className="h-full bg-stone-300 p-8 rounded">
          
          <p className="leading-relaxed mb-6">"From the moment we booked our trip, <b className="text-bold">TRAVEL WORLDWIDE</b> the team was incredibly helpful. They crafted a perfect itinerary that allowed us to explore hidden gems while ensuring we had time to relax. We’ll definitely be booking our next trip with them!"</p>
            <span className="flex-grow flex flex-col pl-4">
              <span className="title-font font-medium text-gray-900">Michael & Emma R.</span>
            </span>
        </div>
      </div>
    </div>
  </div>
</section>





    </div>
  );
}
