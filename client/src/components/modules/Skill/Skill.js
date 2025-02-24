import { useContext, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { skillContext } from "../../context/SkillsContext/SkillsContext"

const Skill = ( ) => {

    const { getSkillDetailsAction, skill } = useContext(skillContext)
    const skillName = useParams()

    useEffect(() => {
        if (skillName.name) {
            getSkillDetailsAction(skillName.name)
        } else {
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            {skill != null ? (
                <div className="flex justify-center">
                    <div className="m-10 p-4 max-w-5xl flex flex-col border-2 border-gray-500 rounded-xl">
                        <h1 className="text-2xl text-center font-mono">{skill.name}</h1>
                        <h2 className="text-xl mt-5 text-center font-mono">"{skill.category}"</h2>
                        <p className="text-lg m-5 font-mono">{skill.description}</p>   
                        <h3 className="text-lg ms-5 mt-5 me-5 text-center font-mono">Projects</h3>
                        <ul className="list-disc list-inside">
                            {skill.projects?.length > 0 ? (
                                    skill.projects?.map((project) => <li key={project.name} className="text-base font-mono text-center m-3 underline underline-offset-4"><Link to={`/project/${project.name}`}>{project.name}</Link></li>)
                            ): (
                                <p className="text-center text-base font-mono">Working on related projects...</p>    
                            )}    
                        </ul>
                        <h3 className="text-lg ms-5 mt-5 me-5 text-center font-mono">Certificates</h3>
                        <ul className="list-disc list-inside">
                            {skill.certificates?.length > 0 ? (
                                    skill.certificates?.map((certificate) => <li key={certificate.name} className="text-base font-mono text-center m-3"><a className="underline underline-offset-4" href={certificate.link}>{certificate.name}</a></li>)
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