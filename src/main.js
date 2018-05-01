import React from 'react';
import ReactDOM from 'react-dom';

import { Button } from 'antd';
import './index.less';

ReactDOM.render(
    <div>
        <h2>Hello, World!</h2>,
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
    </div>,
    document.getElementById('app')
)