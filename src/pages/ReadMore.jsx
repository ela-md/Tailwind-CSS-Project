function ReadMore() {
  return (
    <>
      <div className=" flex flex-wrap justify-center items-center h-screen bg-slate-200">
        <div className="w-[1400px] grid grid-cols-12 font-mono gap-4 ">
          <div className="bg-gray-400 col-span-10 sm:col-span-6 lg:col-span-7 rounded-lg p-8 flex flex-col justify-between ">
            <div className="flex items-center gap-4">
              <img
                src="https://course.next1code.ir/tailwind/images/profile1.jpg"
                className="rounded-full border-2 border-gray-300"
              />
              <span className="text-white">Daniel Clifford</span>
            </div>
            <p className="text-white font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis vel soluta.
            </p>
            <p className="text-gray-100 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
              eius! In quia odio adipisci amet, veniam nemo officia nihil!
              Quaerat corporis eius perspiciatis, libero porro ipsum ducimus
              atque dicta illo tenetur sapiente dolores, magni eligendi deserunt
              asperiores impedit quae, quas animi consequuntur!magni eligendi
              deserunt asperiores impedit quae, quas animi consequuntur!
            </p>
          </div>

          <div className="bg-gray-300 col-span-12 sm:col-span-6  lg:col-span-2 rounded-lg p-8 flex flex-col justify-between">
            <p className="text-gray-700 font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="text-gray-500 text-sm mt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
              eius! In quia odio adipisci amet.
            </p>
          </div>

          <div className="bg-white col-span-12 sm:col-span-6 lg:col-span-3  row-span-2 rounded-lg p-8 flex flex-col justify-between">
            <div className="flex items-center gap-4">
              <img
                src="https://course.next1code.ir/tailwind/images/profile2.jpg"
                className="rounded-full border-2 border-gray-500"
              />
              <span className="text-gray-800">Jeniffer Rogers</span>
            </div>
            <p className="text-gray-600 font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="text-gray-500 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
              eius! In quia odio adipisci amet, veniam nemo officia nihil! Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Dolore, eius!
              In quia odio adipisci amet, veniam nemo officia nihil!Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Dolore, eius! In quia
              odio adipisci amet, veniam nemo officia nihil! Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Dolore, eius! In quia odio
              adipisci amet, veniam nemo officia nihil!Dolore, eius! In quia
              odio adipisci amet, veniam nemo officia nihil!
            </p>
          </div>

          <div className="bg-white col-span-12 sm:col-span-6 lg:col-span-4 rounded-lg p-8 flex flex-col justify-between">
            <div className="flex items-center gap-4">
              <img
                src="https://course.next1code.ir/tailwind/images/profile3.jpg"
                className="rounded-full border-2 border-gray-500"
              />
              <span className="text-gray-800">Anna Dixon</span>
            </div>
            <p className="text-gray-600 font-bold ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="text-gray-500 text-sm mt-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. eius! In
              quia odio adipisci amet, veniam nemo officia nihil! Quaerat
              corporis eius perspiciatis.
            </p>
          </div>

          <div className="bg-gray-700 col-span-12 sm:col-span-6  lg:col-span-5 rounded-lg p-8 ">
            <p className="text-white font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="text-gray-100 text-sm mt-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
              eius! In quia odio adipisci amet, veniam nemo officia nihil!
              Quaerat corporis eius perspiciatis, repellendus commodi quae sint
              velit dolorem doloremque!Dolore, eius! In quia odio adipisci amet,
              veniam nemo officia nihil!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReadMore;
