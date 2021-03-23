import React from "react";
import { AppRegistry, asset, Pano, Text, View } from "react-vr";

export default class MyFirstReactVR extends React.Component {
  constructor(props) {
    super(props);
    scenes: [
      {
        scene_image: "initial.jpg",
        step: 1,
        navigations: [
          {
            step: 2,
            translate: [0.73, -0.15, 0.66],
            rotation: [0, 36, 0],
          },
        ],
      },
      {
        scene_image: "step1.jpg",
        step: 2,
        navigations: [
          {
            step: 3,
            translate: [-0.43, -0.01, 0.9],
            rotation: [0, 140, 0],
          },
        ],
      },
      {
        scene_image: "step2.jpg",
        step: 3,
        navigations: [
          {
            step: 4,
            translate: [-0.4, 0.05, -0.9],
            rotation: [0, 0, 0],
          },
        ],
      },
      {
        scene_image: "step3.jpg",
        step: 4,
        navigations: [
          {
            step: 5,
            translate: [-0.55, -0.03, -0.8],
            rotation: [0, 32, 0],
          },
        ],
      },
      {
        scene_image: "step4.jpg",
        step: 5,
        navigations: [
          {
            step: 1,
            translate: [0.2, -0.03, -1],
            rotation: [0, 20, 0],
          },
        ],
      },
    ];
  }

  render() {
    return (
      <View>
        <Pano source={asset("panoramic-beach.jpg")} />
        <Text
          style={{
            backgroundColor: "#777879",
            fontSize: 0.8,
            fontWeight: "400",
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: "center",
            textAlignVertical: "center",
            transform: [{ translate: [0, 0, -3] }],
          }}
        >
          Osgenic Demo
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent("MyFirstReactVR", () => MyFirstReactVR);
