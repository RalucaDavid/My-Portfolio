import { Text } from '@mantine/core';
import { Image } from '@mantine/core';
import classes from './about.module.css';
import profileImage from '../../assets/profile.jpg';
import { Dictionary } from '../../dictionaries/en';

const About = () => {
    return (
        <div className={classes.aboutWrapper}>
            <div className={classes.info}>
                <Text className={classes.greeting}>
                    {Dictionary.hello}
                </Text>
                <Text className={classes.aboutMe}>
                    {Dictionary.aboutMeText}
                </Text>
            </div>
            <Image
                h={200}
                w="auto"
                className={classes.image}
                src={profileImage} />
        </div>
    );
}

export default About;