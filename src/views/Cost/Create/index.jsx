import React from 'react';

import { Form, Input, Tooltip, Icon, Select, Row, Col, Checkbox, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
import PanelBox from '../../../components/PanelBox';
import {costType} from '@/common/constants.js'
import './index.less';
import axios from 'axios'
class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        
        axios.get('/expenses/create', { params: values })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 8 },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 14,
          offset: 0,
        },
        sm: {
          span: 14,
          offset: 6,
        },
      },
    };
    return (
      <PanelBox title="新建流水">
        <Form onSubmit={this.handleSubmit}>
          <FormItem
            {...formItemLayout}
            label="本次消费类型"
            hasFeedback
          >
            {getFieldDecorator('itemType', {
              rules: [{
                required: true, message: 'Please input your E-mail!',
              }],
            })(
              <Select>
                {costType.map((v, index)=>{return (<Option key={index} value={v.key}>{v.value}</Option>)})}
              </Select>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="本次开销"
            hasFeedback
          >
            {getFieldDecorator('itemValue', {
              rules: [{
                required: true, message: 'Please input your password!',
              }],
            })(
              <Input />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="购买内容"
            hasFeedback
          >
            {getFieldDecorator('itemDescription', {
              rules: [{
                required: true, message: 'Please confirm your password!',
              }],
            })(
              <Input　type="textarea"/>
            )}
          </FormItem>
          <FormItem {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" size="large">提交</Button>
          </FormItem>
        </Form>
      </PanelBox>
    );
  }
}

export default Form.create()(RegistrationForm)
