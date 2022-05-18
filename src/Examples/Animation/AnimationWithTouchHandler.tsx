import React from "react";
import { StyleSheet } from "react-native";
import {
  Canvas,
  Fill,
  useTouchHandler,
  Path,
  Skia,
  PathVerb,
  useCanvasRef,
  useValue,
} from "@shopify/react-native-skia";

import { AnimationDemo } from "./Components";

export const AnimationWithTouchHandler = () => {
  const canvasRef = useCanvasRef();

  const drawPath = useValue("");

  // Touch handler
  const touchHandler = useTouchHandler({
    onStart: ({ x, y }) => {
      drawPath.current = `${drawPath.current} M ${x} ${y}`;
    },
    onActive: ({ x, y }) => {
      drawPath.current = `${drawPath.current} L ${x} ${y}`;
    },
    onEnd: ({}) => {},
  });

  return (
    <AnimationDemo title={"Bouncing animation with touch handler"}>
      <Canvas style={styles.canvas} ref={canvasRef} onTouch={touchHandler}>
        <Fill color="white" />
        <Path path={drawPath} color="lightblue" style={"stroke"} />
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
