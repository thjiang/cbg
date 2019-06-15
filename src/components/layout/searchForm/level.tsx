import React from "react";

import { Select, InputNumber } from "antd";

const { Option } = Select;

interface ILevel {
    equip_level_min?: number;
    equip_level_max?: number;
    fly_level?: number;
}

class Level extends React.Component {
    flyLevelAChange = (value: number) => {
        console.log(`selected ${value}`);
    };

    flyLevelBChange = (value: number) => {
        console.log(`selected ${value}`);
    };
    render() {
        return (
            <div>
                <InputNumber min={1} max={80} defaultValue={1} style={{ width: 50 }}/>&nbsp;-&nbsp;
                <InputNumber min={1} max={80} defaultValue={80} style={{ width: 50 }}/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;神启境界≥&nbsp;&nbsp;
                <Select
                    defaultValue={0}
                    style={{ width: 80 }}
                    onChange={this.flyLevelAChange}
                >
                    <Option value={0}>不限</Option>
                    <Option value={1}>天</Option>
                    <Option value={2}>地</Option>
                </Select>
                &nbsp;魂&nbsp;
                <Select
                    defaultValue={0}
                    style={{ width: 80 }}
                    onChange={this.flyLevelBChange}
                >
                    <Option value={0}>不限</Option>
                    <Option value={1}>一</Option>
                    <Option value={2}>二</Option>
                    <Option value={3}>三</Option>
                    <Option value={4}>四</Option>
                    <Option value={5}>五</Option>
                    <Option value={6}>六</Option>
                </Select>
                &nbsp;天&nbsp;
            </div>
        );
    }
}

export default Level;
