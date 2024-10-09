
import { Text } from '@mantine/core';
import { Dictionary } from '../../dictionaries/en';
import classes from './navigation-bar.module.css';

const NavigationBar = () => {

   return (
      <div className={classes.navBar}>
         <div className={classes.titlePortfolio}>
            <Text lineClamp={2} className={classes.title}>
               {Dictionary.davidRaluca}
            </Text>
         </div>
         <div className={classes.portfolioInfo}>
            <Text className={classes.text}>
               {Dictionary.home}
            </Text>
            <Text className={classes.text}>
               {Dictionary.about}
            </Text>
            <Text className={classes.text}>
               {Dictionary.topSkills}
            </Text>
            <Text className={classes.text}>
               {Dictionary.bestProjects}
            </Text>
            <Text className={classes.text}>
               {Dictionary.otherProjects}
            </Text>
            <Text className={classes.text}>
               {Dictionary.contact}
            </Text>
         </div>
      </div>
   );
};

export default NavigationBar;