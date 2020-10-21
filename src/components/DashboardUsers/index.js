import React from 'react'
import './DashboardUsers.css'

export default class DashboardUsers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }

  render() {
    const { users } = this.props
    console.log(users)

    return (
      <div className="dashboardContainer">
        <p>Hello, this is the dashboard</p>
      </div>
    )
  }
}