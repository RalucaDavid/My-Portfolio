import { Dictionary } from '../../dictionaries/en';
import classes from './navigation-bar.module.css';
import { Link } from 'react-router-dom';

const NavigationBar = () => {

   return (
      <div className={classes.navBar}>
         <Link to="/" className={classes.text}>
            {Dictionary.home}
         </Link>
         <Link to="/about" className={classes.text}>
            {Dictionary.about}
         </Link>
         <Link to="/projects" className={classes.text}>
            {Dictionary.projects}
         </Link>
         <Link to="/contact" className={classes.text}>
            {Dictionary.contact}
         </Link>
      </div>
   );
};

export default NavigationBar;