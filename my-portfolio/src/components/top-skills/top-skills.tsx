import { Text } from '@mantine/core';
import classes from './top-skills.module.css';
import classNames from 'classnames';
import { Dictionary } from '../../dictionaries/en';
import { skills } from '../../data/skills';

const TopSkills = () => {
   return (
      <div className={classes.topSkillsWrapper}>
         <Text className={classes.title}>{Dictionary.topSkills}</Text>
         <div className={classes.logoContainer}>
            {skills.slice(0, 5).map((skill, index) => (
               <div key={index} className={classNames(classes.logo, classes.logoAnimation)}>
                 <img src={skill.src} alt={skill.alt} />
               </div>
            ))}
         </div>
         <div className={classes.logoContainer}>
            {skills.slice(5, 10).map((skill, index) => (
               <div key={index} className={classNames(classes.logo, classes.logoAnimation)}>
                 <img src={skill.src} alt={skill.alt} />
               </div>
            ))}
         </div>
      </div>
   );
}

export default TopSkills;