import React, { useState } from 'react';

import { Button, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';


function SearchBar () {
    return (
        <Tooltip title="search">
      <Button shape="circle" icon={<SearchOutlined />} />
      Search
    </Tooltip>
    )
}


export default SearchBar;