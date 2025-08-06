export default function HomePage() {
  return (
    <main>
      <section className="mx-auto max-w-6xl">
        <div className="py-40 grid gap-12 lg:grid-cols-2 lg:grid-rows-1 md:grid-cols-1 md:grid-rows-2">
          <div className="flex items-center">
            <div>
              <h1 className="text-5xl sm:text-7xl">
                Hi, I'm Gustavo Iha 👋
              </h1>

              <p className="text-xl mt-16 text-gray-300">
                I debug serverless stacks and make sure we compost the coffee grounds
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <img
              src="/gustavo-iha-profile-1.jpg"
              alt="A photo of Gustavo Iha smiling. He's wearing a blue jacket, black t-shirt, and a pair of black glasses. The background is blurred, but has books, action figures, and a red poster."
              className="h-[460px] w-[460px] rounded-full"
              loading="eager"
              width={460}
              height={460}
            />
          </div>
        </div>
      </section>
    </main>
  )
}
