import React from 'react';
import { Paper, Tabs } from 'material-ui';
import { Tab } from 'material-ui/Tabs';
import withWidth from 'material-ui/utils/withWidth';

export default withWidth()(({
  muscles, onSelect, category, width,
}) => {
  const index = category ?
    muscles.findIndex(group => group === category) + 1 :
    0;

  const onIndexSelect = (e, index) => {
    onSelect(index === 0 ? '' : muscles[index - 1]);
  };

  return (
    <Paper>
      <Tabs
        onChange={onIndexSelect}
        value={index}
        indicatorColor="primary"
        textColor="primary"
        scrollable={width === 'xs'}
        centered={width !== 'xs'}
        scrollButtons="on"
      >
        <Tab label="All" />
        {muscles.map(group =>
          <Tab key={group} label={group} />)}
      </Tabs>
    </Paper>);
});
