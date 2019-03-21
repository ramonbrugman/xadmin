import React from 'react'
import { DatePicker } from 'antd'
import moment from 'moment'

export default class DatePickerInput extends React.Component {

  getValue(value) {
    const { field } = this.props
    const format = field.datetimeFormat || 'YYYY-MM-DD'

    return value.format(format)
  }

  onChange = (value) => {
    const { input } = this.props
    input.onChange(this.getValue(value))
  }

  render() {
    const { input, label, meta, field, group: FieldGroup } = this.props
    const format = field.datetimeFormat || 'YYYY-MM-DD'
    return (
      <FieldGroup label={label} meta={meta} input={input} field={field}>
        <DatePicker onChange={this.onChange} value={input.value ? moment(input.value): null} format={format} placeholder="选择日期" />
      </FieldGroup>
    )
  }
}