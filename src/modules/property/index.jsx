import React from 'react'
import { Tabs, Tab } from 'material-ui/Tabs'
import axios from 'axios'
import moment from 'moment'

import PropertyLineChart from './LineChart'
import { CATEGORY } from './constants'
import PropertyList from './List'

export default class Property extends React.Component {
  constructor(props) {
    super(props)
    this.state = { properties: null }
  }

  componentDidMount() {
    axios
      .get('property', {})
      .then(response =>
        this.setState({
          properties: response.data.map(({ date, income, outlay }) => ({
            date: moment(date).format('YYYY/MM/DD'),
            totalAssets: 10000,
            netIncome: income - outlay,
            income,
            outlay,
          })),
        }),
      )
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    const { properties } = this.state
    if (!properties) return null

    return (
      <Tabs>
        <Tab label="资产列表">
          <PropertyList properties={properties} />
        </Tab>
        {Object.entries(CATEGORY).map(([key, { text, color }]) =>
          (<Tab label={text} key={key}>
            <PropertyLineChart
              color={color}
              dataKey={key}
              properties={properties}
            />
          </Tab>),
        )}
      </Tabs>
    )
  }
}
