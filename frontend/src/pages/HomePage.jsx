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
                <h2 className="w-96 mt-10 font-regular text-lg text-green-950">BountyHarvest, the premier online marketplace for all your agricultural needs. Our platform connects you directly with local farmers and producers, ensuring you get the freshest and highest quality products delivered right to your doorstep. Whether you're looking for organic vegetables, farm-fresh fruits, dairy products, or artisanal goods, BountyHarvest has it all.
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