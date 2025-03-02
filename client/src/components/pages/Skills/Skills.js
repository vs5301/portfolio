import { useContext, useEffect } from 'react';
import { skillContext } from '../../context/SkillsContext/SkillsContext';
import Carousel from '../../modules/Carousel/Carousel';

export default function Skills() {

    const { fetchSkillsAction, skillsByCategory } = useContext(skillContext)
    console.log(skillsByCategory["Web Development"])
    
    useEffect(() => {
        const categories = ["Web Development", "Android Development", "Data Engineering"]
        categories.forEach(category => {
            fetchSkillsAction(category)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="flex flex-col justify-center">
            <div className="bg-blue-500 dark:bg-blue-400 underline underline-offset-4 w-full text-center text-4xl py-5 font-mono text-gray-800 dark:text-gray-100 items-center">
                <h1>Web Development</h1>
            </div>
            <Carousel array={skillsByCategory["Web Development"]} arrayName="web-development" />
            <div className="bg-blue-500 dark:bg-blue-400 underline underline-offset-4 w-full text-center text-4xl py-5 font-mono text-gray-800 dark:text-gray-100 items-center">
                <h1>Android Development</h1>
            </div>
            <Carousel array={skillsByCategory["Android Development"]} arrayName="android-development" />
            <div className="bg-blue-500 dark:bg-blue-400 underline underline-offset-4 w-full text-center text-4xl py-5 font-mono text-gray-800 dark:text-gray-100 items-center">
                <h1 >Data Engineering</h1>
            </div>
            <Carousel array={skillsByCategory["Data Engineering"]} arrayName="data-engineering" />
        </div>
    );
}