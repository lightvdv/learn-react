import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";


import {makeStyles} from "@material-ui/core/styles";

// core components
import Button from "../CustomButtons/Button.js";

import styles from "../../assets/jss/material-dashboard-pro-react/components/adminNavbarLinksStyle.js";

const useStyles = makeStyles(styles);

export default function WorkspaceNavbarLinks(props) {
    const [openProfile, setOpenProfile] = React.useState(null);
    const handleClickProfile = event => {
        if (openProfile && openProfile.contains(event.target)) {
            setOpenProfile(null);
        } else {
            setOpenProfile(event.currentTarget);
        }
    };
    const classes = useStyles();
    const {rtlActive} = props;

    const wrapper = classNames({
        [classes.wrapperRTL]: rtlActive
    });
    const managerClasses = classNames({
        [classes.managerClasses]: true
    });
    return (
        <div className={wrapper}>
            <div className={managerClasses}>
                <Button
                    color="transparent"
                    aria-label="Person"
                    justIcon
                    aria-owns={openProfile ? "profile-menu-list" : null}
                    aria-haspopup="true"
                    onClick={handleClickProfile}
                    className={rtlActive ? classes.buttonLinkRTL : classes.buttonLink}
                    muiClasses={{
                        label: rtlActive ? classes.labelRTL : ""
                    }}
                >
                </Button>
            </div>
        </div>
    );
}

WorkspaceNavbarLinks.propTypes = {
    rtlActive: PropTypes.bool
};
