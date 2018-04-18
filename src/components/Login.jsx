import React from 'react';
import { createForm } from 'rc-form';
import { district } from 'antd-mobile-demo-data';

import { Picker, DatePicker, List, Checkbox, InputItem, Icon, Flex, Button, WhiteSpace } from 'antd-mobile';
import enUs from 'antd-mobile/lib/date-picker/locale/en_US';

const CheckboxItem = Checkbox.CheckboxItem;

// 如果不是使用 List.Item 作为 children
const CustomChildren = (props) => {
  return (
    <div
      onClick={props.onClick}
      style={{ backgroundColor: '#fff', height: 45, lineHeight: '45px', padding: '0 15px' }}
    >
      {props.children}
      <span style={{ float: 'right' }}>{props.extra}</span>
    </div>
  );
};

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pickerValue: [],
      // pickerValue: ['340000', '340800', '340824']
      // dpValue: new Date(),
      dpValue: null,
    };
  }
  componentDidMount() {

  }
  render() {
    const { getFieldProps } = this.props.form;
    const { pickerValue, dpValue } = this.state;
    return (<form className="form" onsubmit="return false">
      <List renderHeader={() => <b>密码登录</b>}>
      <InputItem
          placeholder="工号"
          clear
          moneyKeyboardAlign="left"
        ></InputItem>
      <InputItem
          placeholder="Password"
          clear
          moneyKeyboardAlign="left"
        ></InputItem>
        <Button type="primary">登录</Button><WhiteSpace /><WhiteSpace />
        <a className="forget-pas">忘记密码</a><WhiteSpace /><WhiteSpace /><WhiteSpace /><WhiteSpace />
        <span className="bottom_info">为顾客量身推荐最适合的保险</span>
      </List>
    </form>);
  }
}

export default createForm()(Demo);
