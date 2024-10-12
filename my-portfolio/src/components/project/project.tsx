
import { Image } from '@mantine/core';
import classes from './project.module.css';

interface ProjectProps {
    src: string;
    link: string;
    description: string;
    title: string;
}

const Project = ({ src, link, description, title }: ProjectProps) => {
    return (
        <a href={link} className={classes.project} target="_blank" rel="noopener noreferrer">
            <div className={classes.imageContainer}>
                <Image src={src} />
                <div className={classes.overlay}>
                    <h3 className={classes.title}>{title}</h3>
                    <p className={classes.description}>{description}</p>
                </div>
            </div>
        </a>
    );
};

export default Project;