import Footer from '../component/Footer';
import Navbar  from'../component/Navbar'
function About(){
    return (
        <>
  
            <div className="w-screen h-150 relative">
                <img src="/public/Picture_3.png" alt="" className="w-full h-full object-cover" />
                <div className="w-full h-full inset-0 bg-[#00000079] absolute"> 
                    <Navbar />
                    <div className="flex items-center justify-center w-full flex-col  mt-15 ">
                        <span className="text-[hsl(45_72%_59%)] uppercase">our story</span>
                        <h1 className="text-7xl text-white myFont">About Us</h1>
                    </div>

                </div>
                <div className="w-screen bg-[#f8f6f1] h-auto py-10 ">
                    <div className="max-w-220 h-auto w-[90%]  m-auto pt-20 flex flex-col gap-10">
                        <h1 className="md:text-6xl text-4xl  popFont ">
                            Born From the Pain of a People,
                            Driven by <span className="text-[hsl(45_72%_59%)]">Hope</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-500">Peace and Justice International was founded by a group of young Afghans who grew up witnessing the devastating effects of decades of conflict. Rather than succumbing to despair, they chose to channel their experiences into a force for positive change.</p>
                        <p className="text-xl md:text-2xl text-gray-500">Our founders understood that the suffering of the Afghan people is not unique — it is shared by millions around the world who live under the shadow of injustice, inequality, and violence. This realization became the cornerstone of our mission: to fight for peace and justice not just for Afghanistan, but for all of humanity.</p>
                        <p className="text-xl md:text-2xl  text-gray-500">Today, we operate across multiple countries, running education programs, community development initiatives, women's empowerment projects, and emergency relief operations. Every program we create is designed with one goal: to prove that a better, more just world is possible.</p>
                    </div>
                </div>

                <Footer />
            </div>
        </>
        

    )
}
    

export default About;