import { Outlet } from "react-router-dom";
import NavigationBar from "../navigation-bar";
import classes from './main-layout.module.css';

const MainLayout = () => {
    return (
        <div className={classes.mainLayout}>
            <div className={classes.bar}>
                <NavigationBar />
            </div>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default MainLayout;