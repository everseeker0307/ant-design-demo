import React from 'react';
import ReactDOM from 'react-dom';
// import { DatePicker, message } from 'antd';
import Login from '../components/login/login.js';
import Register from '../components/register/register.jsx';

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       date: '',
//       result: 'aaa',
//     };
//   }
//   handleChange(value) {
//     message.info(`您选择的日期是: ${value.toString()}`);
//     this.setState({ date: value, result: value });
//   }
//   render() {
//     return (
//       <div style={{ width: 400, margin: '100px auto' }}>
//         <DatePicker format="yyyy/MM/dd" onChange={(value) => this.handleChange(value)} />
//         <div style={{ marginTop: 20 }}>当前日期：{this.state.date.toString()}</div>
//         <p>{this.state.result.toString()}</p>
//       </div>
//     );
//   }
// }

ReactDOM.render(<Login />, document.getElementById('root'));
