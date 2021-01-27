import React from "react";
import MUIDataTable from "mui-datatables";

function TableC(props) {
  const columns = ["Title", "Distance (km)", "Absolute Magnitude", "Is potentially hazardous", "Diameter (meters)"];
  const data = [];

  {
    props.rows && Object.entries(props.rows).map(([name, info]) => {
      info.map((item) => {
        data.push(
          [
            item.name,
            item.close_approach_data["0"].miss_distance.kilometers,
            item.absolute_magnitude_h,
            item.is_potentially_hazardous_asteroid ? "Yes" : "No",
            item.estimated_diameter.meters.estimated_diameter_max + "-" + item.estimated_diameter.meters.estimated_diameter_min
          ]
        )
      })
    })
  }

  const options = {
    download: false,
    print: false,
    filter: true,
    filterType: "dropdown"
  };

  return (
    <MUIDataTable
      data={data}
      columns={columns}
      options={options}
    />
  );
}

export default TableC;