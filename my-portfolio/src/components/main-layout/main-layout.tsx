import { Outlet } from "react-router-dom";
import NavigationBar from "../navigation-bar";
import StarryBackground from "../starry-background";
import classes from './main-layout.module.css';

const MainLayout = () => {
    return (
        <div className={classes.mainLayout}>
            <div className={classes.bar}>
                <NavigationBar />
            </div>
            <StarryBackground/>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default MainLayout;
