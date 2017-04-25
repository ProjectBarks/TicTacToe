import React, { Component } from "react";
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import FontIcon from 'material-ui/FontIcon';

class BottomBar extends Component {

    state = {selectedIndex: 1};

    select = (index) => this.setState({selectedIndex: index});

    render() {
        return (
            <Paper zDepth={1}>
                <BottomNavigation selectedIndex={this.state.selectedIndex}>
                    <BottomNavigationItem
                        label="Person vs Person"
                        icon={<FontIcon className="material-icons">people</FontIcon>}
                        onTouchTap={() => this.select(0)}
                    />
                    <BottomNavigationItem
                        label="Person vs Computer"
                        icon={<FontIcon className="material-icons">computer</FontIcon>}
                        onTouchTap={() => this.select(1)}
                    />
                </BottomNavigation>
            </Paper>
        )
    }
}

export default BottomBar