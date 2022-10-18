import { Button, DatePicker, DatePickerProps, Space } from "antd";
import moment from "moment";
import { useState } from "react";
import "./index.css";

export type PresetDate = {
  label: string;
  setTargetDate: (d: moment.Moment) => moment.Moment;
};

export type AntDDatePickerProps = {
  presetDates?: PresetDate[]; // 预设的日期
} & DatePickerProps;

export const _presetDates: PresetDate[] = [
  {
    label: "Today",
    setTargetDate: (day) => day,
  },
  {
    label: "Tomorrow",
    setTargetDate: (day) => day.add(-1, "day"),
  },
  {
    label: "Yesterday",
    setTargetDate: (day) => day.add(-1, "day"),
  },
  {
    label: "A week age",
    setTargetDate: (day) => day.add(-1, "week"),
  },
  {
    label: "A month age",
    setTargetDate: (day) => day.add(-1, "month"),
  },
  {
    label: "Three month age",
    setTargetDate: (day) => day.add(-3, "month"),
  },
  {
    label: "Six month age",
    setTargetDate: (day) => day.add(-6, "month"),
  },
  {
    label: "A year age",
    setTargetDate: (day) => day.add(-1, "year"),
  },
  {
    label: "A week later",
    setTargetDate: (day) => day.add(1, "week"),
  },
  {
    label: "A month later",
    setTargetDate: (day) => day.add(1, "month"),
  },
  {
    label: "Three month later",
    setTargetDate: (day) => day.add(3, "month"),
  },
  {
    label: "Six month later",
    setTargetDate: (day) => day.add(6, "month"),
  },
  {
    label: "A year later",
    setTargetDate: (day) => day.add(1, "year"),
  },
];

export const presetDates = [..._presetDates];

export const AntDDatePicker = ({
  presetDates = _presetDates,
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

  const _PresetDateButtons = () => {
    return (
      presetDates && (
        <div className='container'>
          {presetDates.map(({ label, setTargetDate }) => {
            return (
              <Button
                className='preset-btn'
                type='link'
                onClick={() => {
                  const newDay = setTargetDate(today);
                  _onChange(newDay, newDay.toString());
                }}>
                {label}
              </Button>
            );
          })}
        </div>
      )
    );
  };

  return (
    <div>
      <DatePicker
        {...restProps}
        popupClassName='antd-datepicker-popup-container'
        value={value}
        onChange={_onChange}
        renderExtraFooter={_PresetDateButtons}
        showToday={false}
        placement={"bottomLeft"}
      />
    </div>
  );
};
