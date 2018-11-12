import React from 'react';
import Users from '../src/component/users'
import Form from "./component/form";
import Test from "./component/test";
import Inputbox from "./component/inputbox";
import Button from "./component/button";
import Calculator from "./component/calculator";
import Login from './component/login';
import Student from './component/array';
import Match from './component/match';
import UserApi from './component/api';
import EssayForm from './component/justcheck';
import Bike from './component/bikeapi';
import AxiosTest from './component/axios';
import UserApis from './component/userapi';
import News from './component/newsapi';
import Apicall from './component/apicall';
import CustomTextInput from './component/inputtest';
import FormValidation from './component/formvalidation';
import CheckForm from './component/checkform';
import './style/style.css'


class App extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div>
        {/* <Users /> */}
        {/* <Form /> */}
        {/* <Test /> */}
        {/* <Userdetail /> */}
        {/* <Inputbox /> */}
        {/* <Inputbox /> */}
        {/* <EssayForm />> */}
        {/* <Calculator /> */}
        {/* <Login /> */}
        {/* <Student /> */}
        {/* <Match /> */}
        {/* <UserApi /> */}
        {/* <Bike /> */}
        {/* <AxiosTest /> */}
        {/* <UserApis /> */}
        {/* <News /> */}
        {/* <Apicall /> */}
        {/* <CustomTextInput /> */}
        {/* <FormValidation /> */}
        <CheckForm />
      </div>
    )
  }
}
export default App;


