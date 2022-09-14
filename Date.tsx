import React, { useState, useCallback } from 'react';

import { SelectDatepicker } from 'react-select-datepicker';

const Date = () => {
  const [value, setValue] = useState<Date | null>();

  const onDateChange = useCallback((date: Date) => {
    setValue(date);
  }, []);

  return (
    <SelectDatepicker
      order="day/month/year"
      selectedDate={value}
      onDateChange={onDateChange}
    />
  );
};

export default Date;
