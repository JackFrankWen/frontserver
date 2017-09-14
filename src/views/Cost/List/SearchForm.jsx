import React, {PropTypes} from 'react';

import { Form, Input, Button, Row, Col, DatePicker } from 'antd';
const FormItem = Form.Item;
const RangePicker = DatePicker.RangePicker;
import moment from 'moment';

class SearchForm extends React.Component {
  constructor() {
    super();
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 18 },
    };
    const rangeConfig = {
      initialValue: [moment(new Date()).subtract(30, 'days'), moment(new Date())],
      rules: [{ type: 'array', required: true, message: 'Please select time!' }],
    };
    return (
      <div>
        <Form>
          <Row>
          <Col span={8}>
              <FormItem
              {...formItemLayout}
              label="日期"
            >
              {getFieldDecorator('range-picker', rangeConfig)(
                <RangePicker />
              )}
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem
              label="Field B"
              {...formItemLayout}
            >
              <Input placeholder="input placeholder" />
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem
              label="dddd"
              {...formItemLayout}
            >
              <Input placeholder="input placeholder" />
            </FormItem>
          </Col>
          </Row>
          <Row>
            <Col  offset={18} span={8}>
              <Button size="large" type="primary" style={{marginRight: '15px'}}>Search</Button>
              <Button size="large" type="ghost">Reset</Button>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}
SearchForm.propTypes = {
  form: PropTypes.object,
}
export default Form.create()(SearchForm);
