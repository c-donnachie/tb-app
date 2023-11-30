import { View, StyleSheet, useWindowDimensions, TouchableNativeFeedback } from "react-native"
import React, { useCallback, forwardRef, useImperativeHandle } from "react"
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  interpolate,
  useAnimatedGestureHandler,
} from "react-native-reanimated"
import { PanGestureHandler } from "react-native-gesture-handler"

const MyBottomSheet = forwardRef(
  ({ activeHeight, backDropColor, backgroundColor, children }, ref) => {
    let dampingValue = 35
    let stiffnessValue = 500
    const height = useWindowDimensions().height
    const newActiveHeight = height - activeHeight
    const topAnimation = useSharedValue(height)
    const animationStyle = useAnimatedStyle(() => {
      const top = topAnimation.value
      return {
        top,
      }
    })

    const backDropAnimation = useAnimatedStyle(() => {
      const opacity = interpolate(topAnimation.value, [height, newActiveHeight], [0, 0.5])
      const display = opacity === 0 ? "none" : "flex"
      return {
        opacity,
        display,
      }
    })

    const gestureHandler = useAnimatedGestureHandler({
      onStart: (_, ctx) => {
        ctx.startY = topAnimation.value
      },
      onActive: (event, ctx) => {
        if (event.translationY < 30) {
          topAnimation.value = withSpring(newActiveHeight, {
            damping: dampingValue,
            stiffness: stiffnessValue,
          })
        } else {
          topAnimation.value = withSpring(ctx.startY + event.translationY, {
            damping: dampingValue,
            stiffness: stiffnessValue,
          })
        }
      },
      onEnd: () => {
        if (topAnimation.value > newActiveHeight + 30) {
          topAnimation.value = withSpring(height, {
            damping: dampingValue,
            stiffness: stiffnessValue,
          })
        } else {
          topAnimation.value = withSpring(newActiveHeight, {
            damping: dampingValue,
            stiffness: stiffnessValue,
          })
        }
      },
    })

    const expand = useCallback(() => {
      "worklet"
      topAnimation.value = withSpring(newActiveHeight, {
        damping: dampingValue,
        stiffness: stiffnessValue,
      })
    }, [])

    const close = useCallback(() => {
      "worklet"
      topAnimation.value = withSpring(height, {
        damping: dampingValue,
        stiffness: stiffnessValue,
      })
    }, [])

    useImperativeHandle(
      ref,
      () => ({
        expand,
        close,
      }),
      [expand, close]
    )

    return (
      <>
        <TouchableNativeFeedback
          onPress={() => {
            close()
          }}
        >
          <Animated.View
            style={[styles.backDrop, backDropAnimation, { backgroundColor: backDropColor }]}
          />
        </TouchableNativeFeedback>
        <PanGestureHandler onGestureEvent={gestureHandler}>
          <Animated.View
            style={[
              styles.container,
              animationStyle,
              {
                height: activeHeight,
                backgroundColor: backgroundColor,
              },
            ]}
          >
            <View style={styles.lineContainer}>
              <View style={styles.line} />
            </View>
            {children}
          </Animated.View>
        </PanGestureHandler>
      </>
    )
  }
)

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 10,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius: 25,
    // paddingBottom: 100,
  },
  lineContainer: {
    marginVertical: 10,
    alignItems: "center",
  },
  line: {
    width: 75,
    height: 4,
    backgroundColor: "black",
    marginVertical: 8,
    borderRadius: 2,
  },
  backDrop: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
})

export default MyBottomSheet
