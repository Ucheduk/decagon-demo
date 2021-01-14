import React from 'react';

import { Input } from 'antd';
import { UserOutlined, SearchOutlined } from '@ant-design/icons';

const Section1 = ({className}) => {
  return (
    <div className={className}>
      <div className="heading">
        <h3>Hello, <span>Emerald</span></h3>
        <p>Welcome to your dashboard, kindly sort through the user base</p>
      </div>

      <div className="form-group">
        <label htmlFor="search"><SearchOutlined /></label>
        <input size="large" maxLength="1" name="search"  placeholder="Find a user" />
      </div>

      {/* <Input style={{ width: '60%', backgroundColor: 'transparent', height: '70px', borderRadius: '20px' }} size="large" maxLength="1" name="search"  placeholder="Find a user" prefix={<SearchOutlined />} /> */}

      <div className="options">
        <p className="options__heading">Show Users</p>

        <div className="options-group">
          <div className="option">
            <span className="btn btn-all"><i class="fa fa-users" aria-hidden="true"></i></span>
            <p>All Users</p>
          </div>

          <div className="option">
            <span className="btn btn-male"><i class="fa fa-male" aria-hidden="true"></i></span>
            <p>Male Users</p>
          </div>

          <div className="option">
            <span className="btn btn-female"><i class="fa fa-female" aria-hidden="true"></i></span>
            <p>Female Users</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Section1
