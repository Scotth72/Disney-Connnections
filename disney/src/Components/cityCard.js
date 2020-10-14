import React, { useState } from 'react';

import { Layout, Card, Row, Col, Divider } from 'antd';

const cityName = {
  textAlign: 'center',
};

const CityCard = props => {
  return (
    <>
      <div>
        <Card bordered={true} style={{ width: 350 }}>
          <p style={cityName}>{props.name}</p>
          <p>Rating: {props.rating}</p>
          <p>Crime Rating: {props.crime}</p>
          <p>Population: {props.pop}</p>
        </Card>
      </div>
    </>
  );
};

export default CityCard;