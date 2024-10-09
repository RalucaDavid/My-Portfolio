
import { Text } from '@mantine/core';
import classes from './home-part.module.css';
import { Dictionary } from '../../dictionaries/en';

const HomePart = () =>{
   return (
    <div className={classes.background}>
      <Text className={classes.name}>
         {Dictionary.davidRaluca}
      </Text>
      <Text className={classes.job}>
         {Dictionary.webDeveloper}
      </Text>
    </div>
   );
}

export default HomePart;