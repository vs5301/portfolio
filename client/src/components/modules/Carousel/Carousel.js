import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid"

const Carousel = ({ array, arrayName }) => {
    return (
        <div className="w-full h-screen relative overflow-hidden bg-gray-100  dark:bg-gray-900 items-center justify-center p-3">
            {array?.length > 0 ? (
                array.map((item, index) => {
                    return (
                        <div key={item._id || index}>
                            <input type="radio" name={`carousel-${arrayName}`} id={`carousel-${arrayName}-${index}`} defaultChecked={index === 0} className="sr-only peer" />
                            <div className="w-full h-screen absolute top-0 left-0 transform bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg transition-all duration-300 opacity-0 peer-checked:opacity-100 peer-checked:z-10 z-0">
                                <img src={item.imageUrl} alt={item.name} className='w-full h-full object-cover' />
                                <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex flex-col justify-center items-center text-gray-100">
                                    <div className="text-center max-w-2xl px-4">
                                        <h1 className="text-4xl font-mono mb-4">
                                            {item.name}
                                        </h1>
                                        <p className="text-lg font-mono">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                                {/* controls */}
                                <div className="absolute top-1/2 w-full flex justify-between px-8">
                                    <label htmlFor={`carousel-${arrayName}-${index === 0 ? array.length - 1 : index - 1}`} className="inline-block cursor-pointer bg-red-600 dark:bg-red-400 bg-opacity-50 rounded-full p-3 hover:bg-opacity-70 transition-all">
                                        <ArrowLeftIcon className='size-10 text-gray-100 dark:text-gray-100'/>
                                    </label>
                                    <label htmlFor={`carousel-${arrayName}-${index === array.length - 1 ? 0 : index + 1}`} className="inline-block cursor-pointer bg-red-600 dark:bg-red-400 bg-opacity-50 rounded-full p-3 hover:bg-opacity-70 transition-all">
                                        <ArrowRightIcon className='size-10 text-gray-100 dark:text-gray-100' />
                                    </label>
                                </div>
                            </div>
                        </div>
                    )
                })
            ): (
                <div><p className="text-2xl font-mono text-center">Loading...</p></div>  
            )}
        </div>
    )
}

export default Carousel;