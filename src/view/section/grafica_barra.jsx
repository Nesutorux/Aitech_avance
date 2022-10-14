//Si funciona no lo muevan//
import { ColumnChart } from "react-chartkick";
import "chartkick/chart.js";
export function Barra1() {
  return (
    <ColumnChart
      data={[
        ["Sun", 32],
        ["Mon", 46],
        ["Tue", 56],
        ["Wed", 21],
        ["Thu", 20],
        ["Fri", 13],
        ["Sat", 27]
      ]}
      colors={[
        "#FF2D00",
        "#00FF04",
        "#008FFF",
        "#FFF300",
        "#5100FF",
        "#FB00FF",
        "#8E8E8E"
      ]}
      height="300px"
      width="400px"
      download={true}
    />
  );
}

export function Barra2() {
  return (
    <ColumnChart
      data={[
        ["Sun", 32],
        ["Mon", 46],
        ["Tue", 56],
        ["Wed", 21],
        ["Thu", 20],
        ["Fri", 13],
        ["Sat", 27]
      ]}
      colors={["#b00", "#666"]}
      height="300px"
      width="400px"
      download={true}
    />
  );
}

export function Barra3() {
  return (
    <ColumnChart
      data={[
        ["Sun", 32],
        ["Mon", 46],
        ["Tue", 56],
        ["Wed", 21],
        ["Thu", 20],
        ["Fri", 13],
        ["Sat", 27]
      ]}
      colors={["#b00", "#666"]}
      height="300px"
      width="400px"
      download={true}
    />
  );
}
export function Barra4() {
  return (
    <ColumnChart
      data={[
        ["Sun", 32],
        ["Mon", 46],
        ["Tue", 56],
        ["Wed", 21],
        ["Thu", 20],
        ["Fri", 13],
        ["Sat", 27]
      ]}
      colors={[
        "#FF2D00",
        "#00FF04",
        "#008FFF",
        "#FFF300",
        "#5100FF",
        "#FB00FF",
        "#8E8E8E"
      ]}
      height="300px"
      width="400px"
      download={true}
    />
  );
}
