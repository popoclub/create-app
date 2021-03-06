import React, { Component } from 'react'
import styles from './Account.module.scss'
import Input from '@/components/Input/Input'
import { Button } from 'antd'
import List from './Com/List'
import store from '@/redux'

export default class Account extends Component {
  constructor (props) {
    super(props)
    this.state = {
      form: {
        account: '',
        realname: ''
      },
    }
  }

  setFrom = (value, index) => {
    const form = Object.assign({}, this.state.form, { [index]: value })
    this.setState({
      form
    })
  }

  log = () => {
    console.log(this.state.form)
    store.dispatch({ type: 'login' })
  }

  reset = () => {
    console.log(store.getState())
  }

  render() {
    return (
      <div className={styles.account}>
        <div className={styles.search}>
          <div className={styles.row}>
            <label>账号：</label>
            <Input emit={this.setFrom} index="account"></Input>
          </div>
          <div className={styles.row}>
            <label>真实姓名：</label>
            <Input emit={this.setFrom} index="realname"></Input>
          </div>
          <div className={styles.row}>
            <Button onClick={this.log} type="primary" className={styles['ant-btn']}>查询</Button>
            <Button onClick={this.reset} className={styles['ant-btn']}>重置</Button>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.table}>
            <List></List>
          </div>
        </div>
      </div>
    )
  }
}
