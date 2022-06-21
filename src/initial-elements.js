import React from "react";
import { MarkerType } from "react-flow-renderer";

export const nodes = [
  {
    id: "1",
    type: "input",
    data: {
      label: <strong>Geriatric Depression</strong>
    },
    position: { x: 250, y: 0 }
  },
  {
    id: "2",
    data: {
      label: (
        <>
          <strong>Geriatric Severe</strong>
        </>
      )
    },
    position: { x: 250, y: 100 }
  },
  {
    id: "3",
    data: {
      label: (
        <>
          <strong>Geriatric Severe AD</strong>
        </>
      )
    },
    position: { x: 250, y: 200 }
    // style: {
    //   background: "#D6D5E6",
    //   color: "#333",
    //   border: "1px solid #222138",
    //   width: 180
    // }
  },
  {
    id: "4",
    position: { x: 0, y: 300 },
    data: {
      label: <strong>hasTreatmentOfChoice AD</strong>
    }
  },
  {
    id: "5",
    data: {
      label: <strong>has1stLine AD</strong>
    },
    position: { x: 250, y: 300 }
  },
  {
    id: "6",
    // type: "output",
    data: {
      label: <strong>has2stLine AD</strong>
    },
    position: { x: 500, y: 300 }
  },
  {
    id: "7",
    type: "output",
    data: {
      label: <strong>Escitalopram</strong>
    },
    position: { x: 0, y: 400 }
  },
  {
    id: "8",
    type: "output",
    data: {
      label: <strong>Desvenlafaxine</strong>
    },
    position: { x: 250, y: 400 }
  },
  {
    id: "9",
    type: "output",
    data: {
      label: <strong>Duloxetine</strong>
    },
    position: { x: 250, y: 450 }
  },
  {
    id: "10",
    type: "output",
    data: {
      label: <strong>Fluoxetine</strong>
    },
    position: { x: 250, y: 500 }
  },
  {
    id: "11",
    type: "output",
    data: {
      label: <strong>Milnacipran</strong>
    },
    position: { x: 250, y: 550 }
  },
  {
    id: "12",
    type: "output",
    data: {
      label: <strong>Mirtazapine</strong>
    },
    position: { x: 250, y: 600 }
  },
  {
    id: "13",
    type: "output",
    data: {
      label: <strong>Paroxetine</strong>
    },
    position: { x: 250, y: 650 }
  },
  {
    id: "14",
    type: "output",
    data: {
      label: <strong>Sertraline</strong>
    },
    position: { x: 250, y: 700 }
  },
  {
    id: "15",
    type: "output",
    data: {
      label: <strong>Venlafaxine</strong>
    },
    position: { x: 250, y: 750 }
  },
  {
    id: "16",
    type: "output",
    data: {
      label: <strong>Vortioxetine</strong>
    },
    position: { x: 250, y: 800 }
  },
  {
    id: "17",
    type: "output",
    data: {
      label: <strong>Agomelatine</strong>
    },
    position: { x: 500, y: 400 }
  },
  {
    id: "18",
    type: "output",
    data: {
      label: <strong>Bupropion</strong>
    },
    position: { x: 500, y: 450 }
  },
  {
    id: "19",
    type: "output",
    data: {
      label: <strong>TCAs</strong>
    },
    position: { x: 500, y: 500 }
  },
  {
    id: "20",
    type: "output",
    data: {
      label: <strong>Tianeptine</strong>
    },
    position: { x: 500, y: 550 }
  }
];

export const edges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    animated: true,
    label: "BDISUM : 30"
  },
  // { id: "e1-3", source: "1", target: "3" },
  {
    id: "e2-3",
    source: "2",
    target: "3",
    animated: true,
    label: "Strategies 1st"
  },
  {
    id: "e3-4",
    source: "3",
    target: "4",
    animated: true,
    label: "Priority 1",
    type: "step",
    style: { stroke: "#f6ab6c", opacty: "0.4" },
    labelStyle: { fill: "#f6ab6c", fontWeight: 700 }
  },
  {
    id: "e3-5",
    source: "3",
    target: "5",
    animated: true,
    label: "Priority 2",
    type: "step",
    style: { stroke: "#f6ab6c" },
    labelStyle: { fill: "#f6ab6c", fontWeight: 700 }
  },
  {
    id: "e3-6",
    source: "3",
    target: "6",
    animated: true,
    label: "Priority 3",
    type: "step",
    style: { stroke: "#f6ab6c" },
    labelStyle: { fill: "#f6ab6c", fontWeight: 700 }
  },
  {
    id: "e4-7",
    source: "4",
    target: "7",
    animated: true
  },
  {
    id: "e5-8",
    source: "5",
    target: "8",
    animated: true
  },
  {
    id: "e5-9",
    source: "5",
    target: "9",
    animated: true
  },
  {
    id: "e5-10",
    source: "5",
    target: "10",
    animated: true
  },
  {
    id: "e5-11",
    source: "5",
    target: "11",
    animated: true
  },
  {
    id: "e5-12",
    source: "5",
    target: "12",
    animated: true
  },
  {
    id: "e5-13",
    source: "5",
    target: "13",
    animated: true
  },
  {
    id: "e5-14",
    source: "5",
    target: "14",
    animated: true
  },
  {
    id: "e5-15",
    source: "5",
    target: "15",
    animated: true
  },
  {
    id: "e5-16",
    source: "5",
    target: "16",
    animated: true
  },
  {
    id: "e6-17",
    source: "6",
    target: "17",
    animated: true
  },
  {
    id: "e6-18",
    source: "6",
    target: "18",
    animated: true
  },
  {
    id: "e6-19",
    source: "6",
    target: "19",
    animated: true
  },
  {
    id: "e6-20",
    source: "6",
    target: "20",
    animated: true
  }
];
