import { Button, Card, Group, Image, Text } from '@mantine/core';
import classes from './project.module.css';

interface ProjectProps {
    src: string;
    link: string;
    description: string;
    name: string;
    buttonText: string;
    technologies: string[];
}

const Project = ({ src, link, description, name, buttonText, technologies }: ProjectProps) => {
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
                <Image
                    src={src}
                    height={160}
                    alt={name}
                />
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