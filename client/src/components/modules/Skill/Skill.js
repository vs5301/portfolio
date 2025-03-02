import { useContext, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { skillContext } from "../../context/SkillsContext/SkillsContext"

const Skill = ( ) => {

    const { getSkillDetailsAction, skill, loading } = useContext(skillContext)
    const skillName = useParams()
    console.log(skill)

    useEffect(() => {
        if (skillName.name) {
            getSkillDetailsAction(skillName.name)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [skillName.name])

    if (loading) {
        return <p className="text-center text-2xl font-mono">Loading...</p>
    }

    return (
        <div>
            {skill != null ? (
                <div className={`flex h-screen items-center justify-center relative overflow-hidden`}>
                    <div className="bg-cover bg-center absolute inset-0 before:absolute before:inset-0 before:backdrop-blur-md" style={{backgroundImage: `url(${skill.imageUrl})`}}></div>
                    <div className="m-10 p-4 max-h-fit max-w-5xl flex flex-col border-2 relative text-gray-800 dark:text-gray-200 bg-gray-200 dark:bg-gray-900 border-blue-500 dark:border-blue-400 rounded-2xl">
                        <h1 className="text-2xl text-center font-mono">{skill.name}</h1>
                        <h2 className="text-xl mt-5 text-center font-mono">"{skill.category}"</h2>
                        <p className="text-lg m-5 font-mono">{skill.description}</p>   
                        <h3 className="text-lg ms-5 mt-5 me-5 text-center font-mono">Projects</h3>
                        <ul className="list-disc list-inside">
                            {skill.projects?.length > 0 ? (
                                    skill.projects?.map((project) => <li key={project.name} className="text-base font-mono text-center m-3 underline underline-offset-4 text-red-500 dark:text-red-400"><Link to={`/project/${project.name}`}>{project.name}</Link></li>)
                            ): (
                                <p className="text-center text-base font-mono">Working on related projects...</p>    
                            )}    
                        </ul>
                        <h3 className="text-lg ms-5 mt-5 me-5 text-center font-mono">Certificates</h3>
                        <ul className="list-disc list-inside">
                            {skill.certificates?.length > 0 ? (
                                    skill.certificates?.map((certificate) => <li key={certificate.name} className="text-base font-mono text-center m-3 text-red-500 dark:text-red-400"><a className="underline underline-offset-4" href={certificate.link}>{certificate.name}</a></li>)
                            ): (
                                <p className="text-center text-base font-mono">Working on getting related certificates...</p>    
                            )}
                        </ul>
                    </div> 
                </div>
            ) : (
                <p className="text-center text-2xl font-mono">Loading...</p>
            )}
        </div>
    )
}

export default Skill