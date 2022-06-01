import React, { Component } from 'react'
import { connect } from 'react-redux';
import { loginAction,menuAction } from '../../redux/actions/login';
import { Menu, Dropdown } from 'antd';
import { NavLink } from 'react-router-dom';
import { DownOutlined,UserOutlined,HomeOutlined } from '@ant-design/icons';

  
class Index extends Component {
 logOut=()=>{
     //清除token
    sessionStorage.clear();
    //清除个人信息了
    this.props.loginAction({role:"",nickname:""});
    //清除菜单数据
    this.props.menuAction([]);
    this.props.history.push("/login")
}
  render() {
      const {nickname}=this.props.res.loginReducer;
      const menu = (
        <Menu>
          <Menu.Item icon={<UserOutlined/>} key="a">
              <NavLink to="/index/personal">
                    个人中心
              </NavLink>
            </Menu.Item>
          <Menu.Item icon={<HomeOutlined/>} onClick={this.logOut} key="b">退出登陆</Menu.Item>
        </Menu>
      );
    return (
      <div>
           <Dropdown overlay={menu}>
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                欢迎你，{nickname} <DownOutlined />
                </a>
            </Dropdown>
      </div>
    )
  }
}

export default connect(
    state=>({
        res:state
    }),
    {
        loginAction,
        menuAction
    }
)(Index)