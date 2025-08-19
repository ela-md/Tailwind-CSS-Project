


function CardItem ({id, image, title}) {

    return(
      <>
       <div className="py-9 px-3">
           <div className="w-80 border overflow-hidden bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-700 shadow-xl rounded-xl">
            <img src={image} />
            <div className="p-6 space-y-4">
                <h2 className="text-xl font-bold dark:text-gray-200">{title}</h2>
                <p className="font-normal text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, impedit voluptatem ut accusantium natus eveniet. Facere accusantium minus, odio commodi itaque incidunt dicta! Officiis corrupti nesciunt sapiente! Exercitationem, corrupti fuga.</p>
                <a className="inline-flex rounded-md items-center bg-blue-600 px-3 py-1 text-white " href="#">
                 Read more
                </a>
            </div>
        </div>
       </div>
      
      </>
    )

}
export default CardItem