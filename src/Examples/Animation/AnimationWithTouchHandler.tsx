import React from "react";
import { StyleSheet } from "react-native";
import {
  Canvas,
  Fill,
  useTouchHandler,
  Path,
  Skia,
  useCanvasRef,
} from "@shopify/react-native-skia";

import { AnimationDemo } from "./Components";

export const AnimationWithTouchHandler = () => {
  const canvasRef = useCanvasRef();

  const path = Skia.Path.Make();

  // Touch handler
  const touchHandler = useTouchHandler({
    onStart: ({ x, y }) => {
      path.moveTo(x, y);
    },
    onActive: ({ x, y }) => {
      path.lineTo(x, y);
    },
    onEnd: ({}) => {},
  });

  return (
    <AnimationDemo title={"Bouncing animation with touch handler"}>
      <Canvas style={styles.canvas} ref={canvasRef} onTouch={touchHandler}>
        <Fill color="white" />
        <Path path={path} color="lightblue" style={"stroke"} strokeWidth={3} />
      </Canvas>
    </AnimationDemo>
  );
};

const styles = StyleSheet.create({
  canvas: {
    height: "100%",
    width: "100%",
    backgroundColor: "#FEFEFE",
  },
});
