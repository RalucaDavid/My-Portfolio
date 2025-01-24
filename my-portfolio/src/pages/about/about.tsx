import classes from './about.module.css';
import TopSkills from '../../components/top-skills';
import Description from '../../components/description';

const About = () => {
    return (
        <div className={classes.aboutWrapper}>
            <Description/>
            <TopSkills/>
        </div>
    );
}

export default About;