import React from "react";

import { Form, Input, Button } from "antd";

import School from "./searchForm/school";
import Level from "./searchForm/level";
import "./search.scss";

interface IProps {
    a?: string;
}

interface IState {
    formLayout: "horizontal" | "inline" | "vertical" | undefined;
}

class Search extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            formLayout: "horizontal"
        };
    }

    handleFormLayoutChange = (e: any) => {
        this.setState({ formLayout: e.target.value });
    };

    render() {
        const { formLayout } = this.state;
        return (
            <section className="search-wrap">
                <Form
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 20 }}
                    layout={formLayout}
                >
                    <Form.Item label="选择门派">
                        <School />
                    </Form.Item>
                    <Form.Item label="等级范围">
                        <Level />
                    </Form.Item>
                    <Form.Item label="价格范围">
                        <Input placeholder="input placeholder" />
                    </Form.Item>
                    <Form.Item label="加护范围">
                        <Input placeholder="input placeholder" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary">Submit</Button>
                    </Form.Item>
                </Form>
            </section>
        );
    }
}

export default Search;

// act=overall_search_role&order_by=&page=1&other_arg=&fly_level=225&school=1&sex=1&price_min=8800&price_max=9900&equip_level_min=24&equip_level_max=80&xiuwei_min=777&xiuwei_max=999999&equ_xiuwei_min=555&equ_xiuwei_max=7775&marry=1&tong_pao=0&
