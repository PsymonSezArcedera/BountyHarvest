import banner1 from "../assets/homepage_banner1.png"
import banner2 from "../assets/homepage_banner2.png"

function HomePage(){
    return(
        <div className="flex flex-row">
            <div className="w-full content-center m-10 p-10">
                <h1 className="font-light text-3xl text-green-950">Welcome to</h1>
                <div className="flex flex-row text-center self-center">
                        <h1 className="font-black text-6xl text-green-950">Bounty</h1>
                        <h1 className="font-black text-6xl text-yellow-500">Harvest</h1>
                </div>
                <h2 className="w-96 mt-10 font-regular text-lg text-green-950">Lorem ipsum dolor sit amet consectetur. Phasellus suscipit tortor nec potenti in ut lorem in. Non gravida volutpat lectus purus. Mattis in arcu platea dolor felis. Donec cursus tristique mauris sem sit amet hac.
                </h2>
            </div>
            <div className="w-full flex flex-col m-8">
                <img src={banner1} alt="banner1" className="w-full h-72 rounded-2xl object-cover mb-10"/>
                <img src={banner2} alt="banner2" className="w-full h-72 rounded-2xl object-cover"/> 
            </div>

        </div>
    )
}

export default HomePage