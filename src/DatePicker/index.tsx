import { Button, DatePicker, DatePickerProps, Space } from "antd";
import moment from "moment";
import { useState } from "react";

export type PresetData = {
  label: string;
  setTargetDate: (d: moment.Moment) => moment.Moment;
};

export type AntDDatePickerProps = {
  presetDates?: PresetData[]; // 预设的日期
} & DatePickerProps;

export const presetDates: PresetData[] = [
  {
    label: "yesterday",
    setTargetDate: (day) => day.add(-1, "day"),
  },
  {
    label: "a week age",
    setTargetDate: (day) => day.add(-1, "week"),
  },
];

const AntDDatePicker = ({
  presetDates,
  onChange,
  ...restProps
}: AntDDatePickerProps) => {
  const today = moment(new Date());
  const [value, setValue] = useState(moment(today));

  const _onChange: AntDDatePickerProps["onChange"] = (v, s) => {
    if (v === null) return;
    setValue(moment(v));
    onChange && onChange(v, s);
  };

  const _PresetDataButtons = () => {
    return (
      presetDates && (
        <Space>
          {presetDates.map(({ label, setTargetDate }) => {
            return (
              <Button
                onClick={() => {
                  const newDay = setTargetDate(today);
                  _onChange(newDay, newDay.toString());
                }}>
                {label}
              </Button>
            );
          })}
        </Space>
      )
    );
  };

  return (
    <DatePicker
      {...restProps}
      value={value}
      onChange={_onChange}
      renderExtraFooter={_PresetDataButtons}
    />
  );
};

export default AntDDatePicker;
