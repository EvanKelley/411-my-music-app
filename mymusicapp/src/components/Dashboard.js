import React, { Component } from 'react';
import {
  Card,
  CardContent,
  Switch,
  Slider,
  Select,
  MenuItem,
  Typography,
} from '@mui/material';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      online: false,
      volume: 20,
      quality: 1, 
      notifications: [],
    };
  }

  componentDidUpdate(prevProps, prevState) {
    // Check for changes in online status
    if (this.state.online !== prevState.online) {
      const message = this.state.online
        ? "Your application is online. You can now share or stream music to other devices."
        : "Your application is offline. You won't be able to share or stream music to other devices.";
      this.addNotification(message);
    }

    // Check for changes in the volume
    if (this.state.volume !== prevState.volume && this.state.volume > 80) {
      const message =
        "Listening to music at a high volume could cause long-term hearing loss.";
      this.addNotification(message);
    }

    // Check for changes in the sound quality
    if (this.state.quality !== prevState.quality && this.state.quality === 1) {
      const message = "Music quality is degraded. Increase quality if your connection allows it.";
      this.addNotification(message);
    }
  }

  handleOnlineSwitchChange = (event) => {
    this.setState({ online: event.target.checked });
  };

  handleVolumeChange = (event, newValue) => {
    this.setState({ volume: newValue });
  };

  handleQualityChange = (event) => {
    this.setState({ quality: event.target.value });
  };

  addNotification = (message) => {
    this.setState((prevState) => ({
      notifications: [...prevState.notifications, message],
    }));
  };

  render() {
    return (
      <div>
        {/* Online Mode Card */}
        <Card>
          <CardContent>
            <Typography variant="h6">Online Mode</Typography>
            <Switch
              checked={this.state.online}
              onChange={this.handleOnlineSwitchChange}
            />
          </CardContent>
        </Card>

        {/* Master Volume Card */}
        <Card>
          <CardContent>
            <Typography variant="h6">Master Volume</Typography>
            <Slider
              value={this.state.volume}
              onChange={this.handleVolumeChange}
              min={0}
              max={100}
              step={10}
              valueLabelDisplay="auto"
            />
          </CardContent>
        </Card>

        {/* Sound Quality Card */}
        <Card>
          <CardContent>
            <Typography variant="h6">Sound Quality</Typography>
            <Select
              value={this.state.quality}
              onChange={this.handleQualityChange}
            >
              <MenuItem value={1}>Low</MenuItem>
              <MenuItem value={2}>Normal</MenuItem>
              <MenuItem value={3}>High</MenuItem>
            </Select>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Typography variant="h6">System Notifications</Typography>
            {this.state.notifications.map((message, index) => (
              <Typography key={index} variant="body2">
                {message}
              </Typography>
            ))}
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default Dashboard;
