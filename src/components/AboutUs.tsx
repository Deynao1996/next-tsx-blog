import React from 'react'

export default function AboutUs() {
  return (
    <section>
      <span className="text-lg sm:text-md text-accent-foreground font-medium">
        About Agency
      </span>
      <h3 className="scroll-m-20 text-4xl font-extrabold lg:text-6xl lg:leading-[4rem] max-w-full mt-8">
        We create digital ideas that are bigger, bolder, braver and better
      </h3>
      <p className="max-w-full scroll-m-20 tracking-tight my-3">
        We create digital ideas that bigger, bolder, braver and better. We
        believe in good ideas flexibility and precission. Where Our Special Team
        best consulting and finance provider. Wide range of web and software
        development services.
      </p>
      <ul className="flex justify-between mt-10 flex-wrap gap-5">
        <li className="flex flex-col gap-2">
          <span className="text-2xl lg:text-3xl font-semibold uppercase">
            10k+
          </span>
          <p className="text-sm tracking-tight dark:font-thin font-light">
            Year of experience
          </p>
        </li>
        <li className="flex flex-col gap-2">
          <span className="text-2xl lg:text-3xl font-semibold uppercase">
            234k+
          </span>
          <p className="text-sm tracking-tight dark:font-thin font-light">
            People reached
          </p>
        </li>
        <li className="flex flex-col gap-2">
          <span className="text-2xl lg:text-3xl font-semibold uppercase">
            5k+
          </span>
          <p className="text-sm tracking-tight dark:font-thin font-light">
            Service and plugins
          </p>
        </li>
      </ul>
    </section>
  )
}
