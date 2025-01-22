
import { Carousel } from '@mantine/carousel';
import { Text } from '@mantine/core';
import classes from './best-projects.module.css';
import Project from '../project';
import chatConnectPhoto from '../../assets/chat-connect.png';
import flightBookingPhoto from '../../assets/flight-booking.png';
import checkersPhoto from '../../assets/checkers.png';
import garticPhoto from '../../assets/gartic.png';
import { Dictionary } from '../../dictionaries/en';

const BestProjects = () => {
    return (
        <div className={classes.bestProjectsWrapper}>
            <Text className={classes.title}>
                {Dictionary.projects}
            </Text>
            <Carousel withControls dragFree withIndicators
                slideSize="100%" height="500px">
                <Carousel.Slide>
                    <Project src={chatConnectPhoto}
                        link={'https://github.com/RalucaDavid/Chat-Connect'}
                        description={Dictionary.chatConnectDescription}
                        title={Dictionary.chatConnect} />
                </Carousel.Slide>
                <Carousel.Slide>
                    <Project src={flightBookingPhoto}
                        link={'https://github.com/RalucaDavid/Flight-Booking'}
                        description={Dictionary.flightBookingDescription}
                        title={Dictionary.flightBooking} />
                </Carousel.Slide>
                <Carousel.Slide>
                    <Project src={garticPhoto}
                        link={'https://github.com/RalucaDavid/Gartic'}
                        description={Dictionary.garticDescription}
                        title={Dictionary.gartic} />
                </Carousel.Slide>
                <Carousel.Slide>
                    <Project src={checkersPhoto}
                        link={'https://github.com/RalucaDavid/Checkers'}
                        description={Dictionary.checkersDescription}
                        title={Dictionary.checkers} />
                </Carousel.Slide>
            </Carousel>
        </div>
    );
};

export default BestProjects;