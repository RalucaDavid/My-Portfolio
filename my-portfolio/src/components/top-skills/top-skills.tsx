import { Text } from '@mantine/core';
import classes from './top-skills.module.css';
import classNames from 'classnames';
import { Dictionary } from '../../dictionaries/en';
import { skills } from '../../data/skills';
import { useEffect, useState } from 'react';

const TopSkills = () => {
   const [loadedImages, setLoadedImages] = useState<{ [key: number]: boolean }>({});

   useEffect(() => {
      skills.forEach((skill, index) => {
         const img = new Image();
         img.src = skill.src;
         img.onload = () => {
            setLoadedImages((prev) => ({ ...prev, [index]: true }));
         };
      });
   }, []);

   return (
      <div className={classes.topSkillsWrapper}>
         <Text className={classes.title}>{Dictionary.topSkills}</Text>
         <div className={classes.logoContainer}>
            {skills.slice(0, 5).map((skill, index) => (
               <div key={index} className={classNames(classes.logo, classes.logoAnimation)}>
                  <img
                     src={skill.src}
                     alt={skill.alt}
                     loading="lazy"
                     className={loadedImages[index] ? classes.loaded : classes.blur}
                  />
               </div>
            ))}
         </div>
         <div className={classes.logoContainer}>
            {skills.slice(5, 10).map((skill, index) => (
               <div key={index + 5} className={classNames(classes.logo, classes.logoAnimation)}>
                  <img
                     src={skill.src}
                     alt={skill.alt}
                     loading="lazy"
                     className={loadedImages[index + 5] ? classes.loaded : classes.blur}
                  />
               </div>
            ))}
         </div>
      </div>
   );
}

export default TopSkills;