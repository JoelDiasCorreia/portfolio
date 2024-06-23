import Image from "next/image";

export default function Testimonial() {
    return (
      <section className="border border-green-600 p-5 rounded-lg backdrop-blur-md bg-black/30  overflow-hidden px-6 py-24 sm:py-32 ">
        <div className="mx-auto max-w-2xl lg:max-w-4xl ">
          <div className="bg-white w-fit m-auto px-5 rounded-lg">
            <Image className="mx-auto" src="/brands/MillerKnoll-Logo.png" alt="" 
            width={300}
            height={100}
            />
          </div>
          <figure className="mt-10">
            <blockquote className="text-center text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
              <p>
                &rsquo;&rsquo;Joel was a valuable member of our team, working on our product, Compass, 
                and his contributions were instrumental in our success. (...)&rsquo;&rsquo;
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <Image
                className="mx-auto h-10 w-10 rounded-full"
                src="/testimonial/jason.jpeg"
                alt=""
                width={35}
                height={35}
              />
              <div className="mt-4 flex items-center justify-center space-x-3 text-white">
                <div className="font-semibold text-white">Jason Feyers</div>
                <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-white">
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <div className="text-white">IT Developer Architect</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
    )
  }