import Plot from "react-plotly.js";
import { useNavigate } from "react-router-dom";
// import * as d3 from "d3";

export default function BarChart() {
  //   d3.csv("https://github.com/rshaarma/react-portfolio/blob/main/data.csv",
  //   function(err, rows){

  //   function unpack(rows,key) {
  //     return rows.map(function(row) {
  //       console.log(row);
  //       return row[key];
  //     });
  //   }
  // }

  // var trace1 = {
  //   type: "bar",
  // };

  const navigate = useNavigate();
  const data = [
    {
      x: [
        [
          "C>A",
          "C>A",
          "C>A",
          "C>A",
          "C>A",
          "C>A",
          "C>A",
          "C>A",
          "C>A",
          "C>A",
          "C>A",
          "C>A",
          "C>A",
          "C>A",
          "C>A",
          "C>A",
        ],
        [
          "ACA",
          "ACC",
          "ACG",
          "ACT",
          "CCA",
          "CCC",
          "CCG",
          "CCT",
          "GCA",
          "GCC",
          "GCG",
          "GCT",
          "TCA",
          "TCC",
          "TCG",
          "TCT",
        ],
      ],
      y: [6.3, 5, 2, 3.3, 6.1, 3.4, 1, 5.8, 9.6, 9.4, 3, 9.3, 4, 3.4, 2, 3.4],
      type: "bar",
      name: "C>A",
      marker: { color: "rgba(22, 228, 255, 1)" },
    },

    {
      x: [
        [
          "C>G",
          "C>G",
          "C>G",
          "C>G",
          "C>G",
          "C>G",
          "C>G",
          "C>G",
          "C>G",
          "C>G",
          "C>G",
          "C>G",
          "C>G",
          "C>G",
          "C>G",
          "C>G",
        ],
        [
          "ACA",
          "ACC",
          "ACG",
          "ACT",
          "CCA",
          "CCC",
          "CCG",
          "CCT",
          "GCA",
          "GCC",
          "GCG",
          "GCT",
          "TCA",
          "TCC",
          "TCG",
          "TCT",
        ],
      ],
      y: [
        0.3, 0.2, 0.1, 0.2, 0.3, 0.4, 1, 0.1, 1, 0.2, 0.1, 0, 0.3, 0.25, 1.5,
        0.3, 0.1,
      ],
      type: "bar",
      name: "C>G",
      marker: { color: "rgba(0, 0, 0, 1)" },
    },

    {
      x: [
        [
          "C>T",
          "C>T",
          "C>T",
          "C>T",
          "C>T",
          "C>T",
          "C>T",
          "C>T",
          "C>T",
          "C>T",
          "C>T",
          "C>T",
          "C>T",
          "C>T",
          "C>T",
          "C>T",
        ],
        [
          "ACA",
          "ACC",
          "ACG",
          "ACT",
          "CCA",
          "CCC",
          "CCG",
          "CCT",
          "GCA",
          "GCC",
          "GCG",
          "GCT",
          "TCA",
          "TCC",
          "TCG",
          "TCT",
        ],
      ],
      y: [1.4, 1, 2.5, 0.6, 1, 0.5, 2.3, 0.2, 1.2, 0.6, 2, 1.3, 1.5, 0, 2.4, 1],
      type: "bar",
      name: "C>T",
      marker: { color: "rgba(255, 67, 71, 1)" },
    },

    {
      x: [
        [
          "T>A",
          "T>A",
          "T>A",
          "T>A",
          "T>A",
          "T>A",
          "T>A",
          "T>A",
          "T>A",
          "T>A",
          "T>A",
          "T>A",
          "T>A",
          "T>A",
          "T>A",
          "T>A",
        ],
        [
          "ATA",
          "ATC",
          "ATG",
          "ATT",
          "CTA",
          "CTC",
          "CTG",
          "CTT",
          "GTA",
          "GTC",
          "GTG",
          "GTT",
          "TTA",
          "TTC",
          "TTG",
          "TTT",
        ],
      ],
      y: [
        0.1, 0.2, 0.1, 0.3, 0.1, 0.2, 0.4, 0.1, 0.1, 0.2, 0.1, 0.3, 0.1, 0.2,
        0.3, 0.1,
      ],
      type: "bar",
      name: "T>A",
      marker: { color: "rgba(179, 183, 171, 0.65)" },
    },

    {
      x: [
        [
          "T>C",
          "T>C",
          "T>C",
          "T>C",
          "T>C",
          "T>C",
          "T>C",
          "T>C",
          "T>C",
          "T>C",
          "T>C",
          "T>C",
          "T>C",
          "T>C",
          "T>C",
          "T>C",
        ],
        [
          "ATA",
          "ATC",
          "ATG",
          "ATT",
          "CTA",
          "CTC",
          "CTG",
          "CTT",
          "GTA",
          "GTC",
          "GTG",
          "GTT",
          "TTA",
          "TTC",
          "TTG",
          "TTT",
        ],
      ],
      y: [
        0.1, 0.2, 0.1, 0.3, 0.1, 0.2, 0.4, 0.1, 0.4, 0.2, 0.1, 0.3, 0.3, 0.2,
        0.3, 0.1,
      ],
      type: "bar",
      name: "T>C",
      marker: { color: "rgba(155, 228, 131, 1)" },
    },

    {
      x: [
        [
          "T>G",
          "T>G",
          "T>G",
          "T>G",
          "T>G",
          "T>G",
          "T>G",
          "T>G",
          "T>G",
          "T>G",
          "T>G",
          "T>G",
          "T>G",
          "T>G",
          "T>G",
          "T>G",
        ],
        [
          "ATA",
          "ATC",
          "ATG",
          "ATT",
          "CTA",
          "CTC",
          "CTG",
          "CTT",
          "GTA",
          "GTC",
          "GTG",
          "GTT",
          "TTA",
          "TTC",
          "TTG",
          "TTT",
        ],
      ],
      y: [0.1, 0, 0.2, 0.1, 0.1, 0, 0.1, 0, 0, 0, 0.1, 0, 0, 0.1, 0, 0.2],
      type: "bar",
      name: "T>G",
      marker: { color: "rgba(255, 131, 202, 0.41)" },
    },
  ];

  return (
    <>
      <button
        className="text-lg md:w-fit text-cyan-900 border-4 rounded p-1 m-2"
        onClick={() => navigate("/")}
      >
        Back
      </button>
      <div className="h-screen flex">
        <div className="m-auto">
          <div className="flex">
            <div className="flex flex-col ml-20">
              <h5 className="m-auto text-lg font-bold">C>A</h5>
              <button className="h-4 bg-cyan-300 w-60"></button>
            </div>

            <div className="flex flex-col ml-4">
              <h5 className="m-auto text-lg font-bold">C>G</h5>
              <button className="h-4 bg-slate-900 w-60"></button>
            </div>
            <div className="flex flex-col ml-4">
              <h5 className="m-auto text-lg font-bold">C>T</h5>
              <button className="h-4 bg-red-500 w-60"></button>
            </div>
            <div className="flex flex-col ml-4">
              <h5 className="m-auto text-lg font-bold">T>A</h5>
              <button className="h-4 bg-gray-300 w-60"></button>
            </div>
            <div className="flex flex-col ml-4">
              <h5 className="m-auto text-lg font-bold">T>C</h5>
              <button className="h-4 bg-lime-500 w-60"></button>
            </div>
            <div className="flex flex-col ml-4">
              <h5 className="m-auto text-lg font-bold">T>G</h5>
              <button className="h-4 bg-rose-200 w-60"></button>
            </div>
          </div>
          <Plot
            data={data}
            layout={{
              showlegend: false,
              size: 16,

              title: {
                text: "SBS29",
                font: {
                  family: "Arial",
                  size: 25,
                },
                x: 0.05,
              },
              width: 1700,
              height: 500,
              xaxis: {
                showdividers: false,
                dividerwidth: 1,
                tickangle: -90,
              },
              yaxis: {
                // tickformats: "%d",
                title: { text: "Percentage of Single Base Substitutions" },

                tickvals: [0, 3.2, 6.3, 9.5, 12.6],
                range: [0, 13],
              },
            }}
          />
        </div>
      </div>
    </>
  );
}
