import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/Delete";
import { removeHTMLTags } from "../helpers";

class SidebarItem extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Hello from the Sidebar Item</h1>
      </div>
    );
  }
}

export default withStyles(styles)(SidebarItem);
