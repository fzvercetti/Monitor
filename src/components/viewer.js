import { Card, Space, Image, Typography } from "antd";
import { useEffect, useState } from "react";
import { getMap } from "../API";
import ImgCalendar from "./calendar/imgcalendar"; // Importar el componente ImgCalendar

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const {Text} = Typography;

function Viewer() {
  const [Maprgb, setMaprgb] = useState("");
  const [Mapndvi, setMapndvi] = useState("");
  const [ImgDate, setImgDate] = useState("");
  const [ndviVals, setndviVals] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    getMap().then((res) => { 
    setMaprgb(res.maprgb);
    setMapndvi(res.mapndvi);
    setImgDate(res.imgDate);   
    
    const labels = ["<0","0-.1",".1-.2",".2-.3",".3-.4",".4-.5",".5-.6",".6-.7",".7-.8",".8-.9",".9-1"];

    const dataSource = {
      labels,
      datasets: [
        {
          label: "NDVI",
          data: res.ndvival,
          backgroundColor: "rgba(255, 0, 0, 1)",
        },
      ],
    };

    setndviVals(dataSource);


    });
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Índice de vegetación NDVI",
      },
    },
  };
  
  return (
    <Space size={20} direction="vertical">
    <div style={{textAlign:"center"}}>
     Imagen satelital {ImgDate} 
     </div>
      <Space direction="horizontal">     
       <Card style={{ width: 400, height: 300 }}>
       <Image
          height={250}
          width={350}
          src={Maprgb}
        ></Image>
      </Card>
        <ImgCalendar /> {/* Llamar al componente ImgCalendar */}
      </Space>

      <Space direction= "horizontal">
      <Card style={{ width: 400, height: 300 }}>
        <Image
          height={250}
          width={350}
          src={Mapndvi}
        ></Image>
      </Card>
      <Card style={{ width: 500, height: 250 }}>
        <Bar options={options} data={ndviVals} />
      </Card>
      </Space>
    </Space>
  );
}



export default Viewer;
