import { Text, Image } from '@mantine/core';
import classes from './description.module.css';
import profileImage from '../../assets/profile.jpg';
import { Dictionary } from '../../dictionaries/en';

const { hello, aboutMeText } = Dictionary;

const Description = () => {
    return (
        <div className={classes.descriptionWrapper}>
            <div className={classes.info}>
                <Text className={classes.greeting}>
                    {hello}
                </Text>
                <Text className={classes.aboutMe}>
                    {aboutMeText}
                </Text>
            </div>
            <Image
                height={200}
                width="auto"
                className={classes.image}
                src={profileImage}
                loading="lazy"
            />
        </div>
    );
};

export default Description;