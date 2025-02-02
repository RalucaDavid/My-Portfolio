import { Button, Card, Group, Image as MantineImage, Text } from '@mantine/core';
import classes from './project.module.css';
import { useEffect, useState } from 'react';

interface ProjectProps {
    src: string;
    link: string;
    description: string;
    name: string;
    buttonText: string;
    technologies: string[];
}

const Project = ({ src, link, description, name, buttonText, technologies }: ProjectProps) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => setLoaded(true);
    }, [src]);

    const openLink = () => {
        try {
            const url = new URL(link);
            window.open(url.toString(), '_blank');
        } catch (error) {
            console.error("Invalid URL:", link);
        }
    };

    return (
        <Card className={classes.transparentCard}>
            <Card.Section>
                <div className={classes.imageWrapper}>
                    <MantineImage
                        src={src}
                        height={160}
                        alt={name}
                        loading="lazy"
                        className={loaded ? classes.loaded : classes.blur}
                    />
                </div>
            </Card.Section>

            <div className={classes.cardContent}>
                <Group mt="xs" mb="xs">
                    <Text fw={500}>{name}</Text>
                    <Text className="description" size="sm" c="dimmed">
                        {description}
                    </Text>
                </Group>

                <Group mt="xs" mb="xs" className={classes.others}>
                    <Text className={classes.technologies}>
                        {technologies.join(" | ")}
                    </Text>
                    <Button fullWidth mt="sm" radius="md" className={classes.customButton} onClick={link.trim() !== "" ? openLink : undefined}>
                        {buttonText}
                    </Button>
                </Group>
            </div>
        </Card>
    );
};

export default Project;