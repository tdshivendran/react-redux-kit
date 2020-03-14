import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import {
  Grow,
  Typography,
  Card,
  CardActions,
  CardContent,
  TextField,
  Button
} from "@material-ui/core";

import withProps from "../with-props";

const styles = theme => ({
  root: {
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },

  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  cardActions: { marginTop: theme.spacing(3) },
  title: { fontSize: "2rem" }
});

class WelcomeNote extends Component {
  state = {
    userName: "",
    showIn: true,
    message: "Hello, Welcome to react-kit!"
  };

  onNameChange = e => this.setState({ userName: e.target.value });

  onSubmit = event => {
    if (event) event.preventDefault();
    const { userName } = this.state;
    const { updateUserInfo } = this.props;

    const infoProps = { userName };
    updateUserInfo(infoProps);
  };

  toggleShowIn = () => {
    const { showIn } = this.state;

    this.setState({ showIn: !showIn });
  };

  updateMessage = () => {
    const { userFlag, userName } = this.props;

    if (userFlag) {
      setTimeout(() => {
        this.setState({ message: `Welcome back, ${userName}!` });
        this.toggleShowIn();
      }, 1500);
    }
  };

  componentDidMount = () => {
    const { userFlag } = this.props;

    if (userFlag) {
      this.toggleShowIn();
      this.updateMessage();
    }
  };

  componentDidUpdate = prevProps => {
    const { userFlag, userName } = this.props;

    const isFlagUpdated = prevProps.userFlag !== userFlag;
    const isNameUpdated = prevProps.userName !== userName;

    if (isFlagUpdated || isNameUpdated) {
      this.toggleShowIn();
      this.updateMessage();
    }
  };

  render() {
    const { classes } = this.props;
    const { showIn, userName, message } = this.state;

    return (
      <Grow in={showIn} timeout={{ enter: 1500, exit: 1500 }}>
        <form onSubmit={this.onSubmit}>
          <Card className={classes.root} elevation={5}>
            <CardContent className={classes.content}>
              <Typography className={classes.title}>{message}</Typography>

              <TextField
                label="Username"
                required
                content={userName}
                onChange={this.onNameChange}
              />
            </CardContent>
            <CardActions className={classes.cardActions}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                onClick={this.onSubmit}
              >
                Submit
              </Button>
            </CardActions>
          </Card>
        </form>
      </Grow>
    );
  }
}

WelcomeNote.defaultProps = {
  userFlag: false,
  userName: "",

  updateUserInfo: () => {}
};
WelcomeNote.propTypes = {
  userFlag: PropTypes.bool,
  userName: PropTypes.string,

  updateUserInfo: PropTypes.func
};

const Styled = withStyles(styles)(WelcomeNote);
export default withProps.withProps("HomeContainer")(Styled);
