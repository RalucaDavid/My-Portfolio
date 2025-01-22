
import { Text } from '@mantine/core';
import classes from './home.module.css';
import { Dictionary } from '../../dictionaries/en';

const Home = () =>{
   return (
    <div className={classes.homeWrapper}>
      <Text className={classes.name}>
         {Dictionary.ralucaDavid}
      </Text>
      <Text className={classes.job}>
         {Dictionary.webDeveloper}
      </Text>
    </div>
   );
}

export default Home;