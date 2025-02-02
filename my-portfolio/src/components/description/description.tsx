import { Text, Image as MantineImage } from '@mantine/core';
import classes from './description.module.css';
import profileImage from '../../assets/profile.jpg';
import { Dictionary } from '../../dictionaries/en';
import { useEffect, useState } from 'react';

const { hello, aboutMeText } = Dictionary;

const Description = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = profileImage;
        img.onload = () => setLoaded(true);
    }, []);

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
            <div className={classes.imageWrapper}>
                <MantineImage
                    height={200}
                    width="auto"
                    className={`${classes.image} ${loaded ? classes.loaded : ''}`}
                    src={profileImage}
                    loading="lazy"
                />
            </div>
        </div>
    );
};

export default Description;