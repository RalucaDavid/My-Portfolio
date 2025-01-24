import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import classes from './contact.module.css';
import { Dictionary } from "../../dictionaries/en";
import { Text } from "@mantine/core";

const Contact = () => {
  return (
    <div className={classes.contactWrapper}>
      <Text className={classes.title}>{Dictionary.contact}</Text>
      <Text className={classes.text}>{Dictionary.contactText}</Text>
      <div className={classes.contactLinks}>
        <a
          href="https://www.linkedin.com/in/raluca-david-996735242/"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.linkedin}
        >
          <FaLinkedin /> {Dictionary.linkedIn}
        </a>
        <a
          href="https://github.com/RalucaDavid"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.github}
        >
          <FaGithub /> {Dictionary.gitHub}
        </a>
        <a
          href="mailto:andreearalucadavid@gmail.com"
          className={classes.email}
        >
          <FaEnvelope /> {Dictionary.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;