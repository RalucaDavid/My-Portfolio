import { Text } from '@mantine/core';
import classes from './projects.module.css';
import { Dictionary } from '../../dictionaries/en';
import Project from '../../components/project';
import { specialProjects, webProjects } from '../../data/projects';

const Projects = () => {
    return (
        <div className={classes.bestProjectsWrapper}>
            <Text className={classes.title}>
                {Dictionary.projects}
            </Text>
            <div className={classes.projectsContainer}>
                {specialProjects.slice(0,1).map((project, index) => (
                    <Project src={project.src} link={project.link} description={project.description} name={project.name} buttonText={Dictionary.comingSoon}
                    technologies={project.technologies}
                    ></Project>
                ))}
                {webProjects.map((project, index) => (
                    <Project src={project.src} link={project.link} description={project.description} name={project.name} buttonText={Dictionary.githubRepository}
                    technologies={project.technologies}
                    ></Project>
                ))}
                {specialProjects.slice(1,2).map((project, index) => (
                    <Project src={project.src} link={project.link} description={project.description} name={project.name} buttonText={Dictionary.rightHere}
                    technologies={project.technologies}
                    ></Project>
                ))}
            </div>
        </div>
    );
};

export default Projects;