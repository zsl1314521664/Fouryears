import React, { Component } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
class bmform extends Component {
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Form layout="horizontal" className="bmform"></Form>
                <FormItem>
                    {getFieldDecorator('userName',{
                        rules:[{required:true,message:'输入'}],
                    })(
                        <Input></Input>
                    )}
                </FormItem>
            </div>
        )
    }
}
// const BMform=Form.create({})(bmform);
// export default BMform;