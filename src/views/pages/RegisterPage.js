import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import Email from "@material-ui/icons/Email";


// core components
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import CustomInput from "../../components/CustomInput/CustomInput.js";
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";

import styles from "../../assets/jss/material-dashboard-pro-react/views/registerPageStyle.js";

import labels from "../../variables/labels";
import CardHeader from "../../components/Card/CardHeader";
import CardFooter from "../../components/Card/CardFooter";
import Button from "../../components/CustomButtons/Button";

const useStyles = makeStyles(styles);

export default function RegisterPage() {
  const classes = useStyles();
  return (
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={6} md={4}>
            <form>
              <Card login>
                <CardHeader
                    className={`${classes.cardHeader} ${classes.textCenter}`}
                    color="primary"
                >
                  <h4 className={classes.cardTitle}>{labels.REGISTRATION}</h4>

                </CardHeader>
                <CardBody>
                  <CustomInput
                      labelText={labels.EMAIL}
                      id="email"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                              <Email className={classes.inputAdornmentIcon} />
                            </InputAdornment>
                        )
                      }}
                  />
                  <CustomInput
                      labelText={labels.PASSWORD}
                      id="password"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                              <Icon className={classes.inputAdornmentIcon}>
                                lock_outline
                              </Icon>
                            </InputAdornment>
                        ),
                        type: "password",
                        autoComplete: "off"
                      }}
                  />
                  <CustomInput
                      labelText={labels.CONFIRM_PASSWORD}
                      id="confirmPassword"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                              <Icon className={classes.inputAdornmentIcon}>
                                lock_outline
                              </Icon>
                            </InputAdornment>
                        ),
                        type: "password",
                        autoComplete: "off"
                      }}
                  />
                </CardBody>
                <CardFooter className={classes.justifyContentCenter}>
                  <Button color="primary" simple size="lg" block>
                    {labels.CONFIRM_REGISTRATION}
                  </Button>
                </CardFooter>
              </Card>
            </form>
          </GridItem>
        </GridContainer>
      </div>
  );
}
