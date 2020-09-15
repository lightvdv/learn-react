import LoginPage from "../views/pages/LoginPage";
import RegisterPage from "../views/pages/RegisterPage";

import Fingerprint from "@material-ui/icons/Fingerprint";
import PersonAdd from "@material-ui/icons/PersonAdd";
import labels from "../variables/labels";
import PeopleIcon from '@material-ui/icons/People';
import Patients from "../views/pages/Patients.js";

const routes = [
    {
        path: "/patients",
        name: labels.PATIENTS,
        icon: PeopleIcon,
        component: Patients,
        layout: "/workspace"
    },
    {
        path: "/login-page",
        name: labels.LOGIN,
        mini: "L",
        icon: Fingerprint,
        component: LoginPage,
        layout: "/auth"
    },
    {
        path: "/register-page",
        name: labels.REGISTRATION,
        icon: PersonAdd,
        component: RegisterPage,
        layout: "/auth"
    },
];

export default routes;
