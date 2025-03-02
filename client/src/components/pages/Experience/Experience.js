export default function Experience() {
    return (
        <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
            <h1 className="text-center text-5xl font-mono pt-10">Timeline</h1>
            <div className="container mx-auto px-4 py-8">
                <div className="relative wrap overflow-hidden">
                    <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-1/2"></div>
                    <div className="mb-8 flex justify-between items-center w-full right-timeline">
                        <div className="order-1 w-5/12"></div>
                        <div className="z-20 flex items-center order-1 bg-blue-500 dark:bg-blue-400 shadow-xl w-12 h-12 rounded-full">
                            <h1 className="mx-auto font-semibold text-lg ">3</h1>
                        </div>
                        <div className="order-1 bg-blue-500 dark:bg-blue-400 text-gray-800 dark:text-gray-200 rounded-lg shadow-xl w-5/12 px-6 py-4">
                            <h3 className="mb-3 font-bold  text-xl font-mono">Apprentice Software Developer@Azure Power Pvt Ltd</h3>
                            <h4 className="mb-3 font-bold  text-base font-mono">May 2024 - Present</h4>
                            <p className=" leading-tight font-mono">Working as apprentice at Azure Power developing data engineering solutions to automate workflows and analyse big data sets. Utilizing latest tech stacks to digitise internal enterprise operations via web and mobile applications.</p>
                            <p className="leading-tight font-mono">Projects worked on -</p>
                            <ul className="list-inside list-disc font-mono text-base">
                                <li><span className="font-mono">Data analysis algorithm automation - Implemented an automated algorithm using Python to collect field device data and process it to calculate KPIs, analyse the results and send notifications to stakeholders.</span></li>
                                <li><span className="font-mono">Full Stack Application development - Worked on internal full stack application built in Laravel along with Android/iOS applications to create internal workflow environment.</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                        <div className="order-1 w-5/12"></div>
                        <div className="z-20 flex items-center order-1 bg-blue-500 dark:bg-blue-400 shadow-xl w-12 h-12 rounded-full">
                            <h1 className="mx-auto font-semibold text-lg ">2</h1>
                        </div>
                        <div className="order-1 bg-blue-500 dark:bg-blue-400 text-gray-800 dark:text-gray-200 rounded-lg shadow-xl w-5/12 px-6 py-4">
                            <h3 className="mb-3 font-bold  text-xl font-mono">Campus Intern@Auribises Technologies Pvt Ltd</h3>
                            <h4 className="mb-3 font-bold  text-base font-mono">January 2023 - July 2023</h4>
                            <p className=" leading-tight font-mono">Worked as an intern learning web development. Trained to use AngularJS and Google Firebase to design and develop comprehensive full stack web applications, encompassing user-friendly interfaces, secure authentication, robust database management, and efficient integration of services.</p>
                        <p className="leading-tight font-mono">Projects worked on -</p>
                            <ul className="list-inside list-disc font-mono text-base">
                                <li><span className="font-mono">Designed and developed a comprehensive full stack web application for an immigration agency, encompassing user-friendly interfaces, secure authentication, robust database management, and efficient integration of services.</span></li>
                                <li><span className="font-mono">Crafted a sophisticated full-stack web solution for a school, harmonizing user-centric interfaces, fortified security protocols, efficient database handling, and seamless service integration</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mb-8 flex justify-between items-center w-full right-timeline">
                        <div className="order-1 w-5/12"></div>
                        <div className="z-20 flex items-center order-1 bg-blue-500 dark:bg-blue-400 shadow-xl w-12 h-12 rounded-full">
                            <h1 className="mx-auto font-semibold text-lg">1</h1>
                        </div>
                        <div className="order-1 bg-blue-500 dark:bg-blue-400 text-gray-800 dark:text-gray-200 rounded-lg shadow-xl w-5/12 px-6 py-4">
                            <h3 className="mb-3 font-bold  text-xl font-mono">Graduation</h3>
                            <h4 className="mb-3 font-bold  text-base font-mono">July 2019 - July 2024</h4> 
                            <p className=" leading-tight font-mono">Graduated in Bachelor of Technology in Computer Science from Vellore Institute of Technology, Amarvati, Andhra Pradesh.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}