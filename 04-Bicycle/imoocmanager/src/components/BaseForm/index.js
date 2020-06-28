import React from 'react'
import {Input, Select, Form, Button, Checkbox, Radio, DatePicker} from 'antd'
import Utils from '../../utils/utils';

const FormItem = Form.Item;
const Option = Select.Option;

class FilterForm extends React.Component {

  handleFilterSubmit = () => {
    let fieldsValue = this.props.form.getFieldsValue();
    this.props.filterSubmit(fieldsValue);
  }

  reset = () => {
    this.props.form.resetFields();
  }

  initFormList = () => {
    const formList = this.props.formList;
    const formItemList = [];

    if(formList && formList.length > 0) {
      formList.forEach((item, i) => {
        let label = item.label;
        let field = item.field;
        let initialValue = item.initialValue || '';
        let placeholder = item.placeholder;
        let width = item.width;
        if(item.type == '时间查询') {
          const begin_time =
            <FormItem name='begin_time' label="订单时间" key={field}>
              <DatePicker showTime={true} placeholder={placeholder} format="YYYY-MM-DD HH:mm:ss"/>
            </FormItem>;

          formItemList.push(begin_time)

          const end_time =
            <FormItem name='end_time' label="~" colon={false} key={field}>
                <DatePicker showTime={true} placeholder={placeholder} format="YYYY-MM-DD HH:mm:ss"/>
            </FormItem>;

          formItemList.push(end_time)

        } else if(item.type == 'INPUT') {
          const INPUT =
            <FormItem name={field} label={label} key={field}>
              <Input type="text" placeholder={placeholder}/>
            </FormItem>;

          formItemList.push(INPUT)

        } else if(item.type == 'SELECT') {
          const SELECT =
            <FormItem name={field} label={label} key={field}>
              <Select
                style={{width: width}}
                placeholder={placeholder}
              >
                {Utils.getOptionList(item.list)}
              </Select>
            </FormItem>;

          formItemList.push(SELECT)

        } else if(item.type == 'CHECKBOX') {
          const CHECKBOX =
            <FormItem name={field} label={label} key={field} valuePropName="checked">
              <Checkbox>
                {label}
              </Checkbox>
            </FormItem>;

          formItemList.push(CHECKBOX)

        }
      })
    }
    return formItemList;
  }

  render() {
    return (
      <Form layout="inline">
        {this.initFormList()}
        <FormItem>
          <Button type="primary" style={{margin: '0 20px'}} onClick={this.handleFilterSubmit}>查询</Button>
          <Button onClick={this.reset}>重置</Button>
        </FormItem>
      </Form>
    );
  }
}

// export default Form.create({})(FilterForm);
export default FilterForm;