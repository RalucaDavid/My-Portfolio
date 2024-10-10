
import { Text } from '@mantine/core';
import classes from './top-skills.module.css';
import classNames from 'classnames';
import aspnetLogo from '../../assets/aspnet-logo.png';
import cplusplusLogo from '../../assets/cplusplus-logo.png';
import csharpLogo from '../../assets/csharp-logo.png';
import reactLogo from '../../assets/react-logo.png';
import typescriptLogo from '../../assets/typescript-logo.png';
import { Dictionary } from '../../dictionaries/en';

const TopSkills = () => {
   return (
      <div className={classes.topSkillsWrapper}>
         <Text className={classes.title}>{Dictionary.topSkills}</Text>
         <div className={classes.logoContainer}>
            <div className={classNames(classes.logo, classes.logoAnimation)}>
               <img src={aspnetLogo} alt="ASP.NET Logo" />
            </div>
            <div className={classNames(classes.logo, classes.logoAnimation)}>
               <img src={cplusplusLogo } alt="C++ Logo" />
            </div>
            <div className={classNames(classes.logo, classes.logoAnimation)}>
               <img src={typescriptLogo} alt="TypeScript Logo" />
            </div>
            <div className={classNames(classes.logo, classes.logoAnimation)}>
               <img src={csharpLogo} alt="C# Logo" />
            </div>
            <div className={classNames(classes.logo, classes.logoAnimation)}>
               <img src={reactLogo} alt="React Logo" />
            </div>
         </div>
      </div>
   );
}

export default TopSkills;