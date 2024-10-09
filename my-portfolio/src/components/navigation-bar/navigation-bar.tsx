
import { Text } from '@mantine/core';
import { Dictionary } from '../../dictionaries/en';
import classes from './navigation-bar.module.css';

const NavigationBar = () => {

   return (
      <div className={classes.navBar}>
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
   );
};

export default NavigationBar;