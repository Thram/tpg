import ice from "@siimple/preset-ice";
import colors from "@siimple/colors";

export default {
  ...ice,
  colors: {
    ...Object.keys(colors).reduce(
      (prev, name) => ({
        ...prev,
        ...Object.fromEntries(
          Object.keys(colors[name]).map((shade) => {
            return [`${name}-${shade}`, colors[name][shade]];
          })
        ),
      }),
      {}
    ),
    // ...other colors
    ...ice.colors,
  },
};
