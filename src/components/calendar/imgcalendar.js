import React, { useEffect, useState } from 'react';
import { Calendar, theme } from 'antd';
import fechas from './fechas.json';

const ImgCalendar = () => {
  const { token } = theme.useToken();
  const wrapperStyle = {
    width: 300,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };

  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    setEventos(fechas);
  }, []);

  const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };

  const dateFullCellRender = (date) => {
    const event = eventos.find((evento) => evento.fecha === date.format('YYYY-MM-DD'));
    const cellStyle = {
      backgroundColor: event ? 'blue' : 'transparent',
      borderRadius: '10%',
      color: event ? 'white' : 'inherit',
    };

    return (
      <div style={cellStyle}>
        <div>{date.date()}</div>
        {event && <div>{event.evento}</div>}
      </div>
    );
  };

  return (
    <div style={wrapperStyle}>
      <Calendar
        fullscreen={false}
        onPanelChange={onPanelChange}
        dateFullCellRender={dateFullCellRender}
      />
    </div>
  );
};

export default ImgCalendar;