import React from "react";

import { Radio } from "antd";

class School extends React.Component {
    render() {
        return (
            <Radio.Group defaultValue="1" buttonStyle="solid">
                <Radio.Button value="1">荒火</Radio.Button>
                <Radio.Button value="2">天机</Radio.Button>
                <Radio.Button value="3">翎羽</Radio.Button>
                <Radio.Button value="4">魍魉</Radio.Button>
                <Radio.Button value="5">太虚</Radio.Button>
                <Radio.Button value="6">云麓</Radio.Button>
                <Radio.Button value="7">冰心</Radio.Button>
                <Radio.Button value="8">弈剑</Radio.Button>
                <Radio.Button value="9">龙巫</Radio.Button>
                <Radio.Button value="10">鬼墨</Radio.Button>
                <Radio.Button value="11">幽篁</Radio.Button>
            </Radio.Group>
        );
    }
}

export default School;
