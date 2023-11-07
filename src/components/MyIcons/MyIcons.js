import cx from "classnames";
import css from "./MyIcons.module.scss";

export default function MyIcons({ icon, size }) {
  const changeColor = (icon) => (icon.includes("night") ? "night" : "day");
  const changeType = (icon) => {
    switch (true) {
      case icon.includes("clear"):
        return "clearSky";
      case icon.includes("few"):
        return "fewClouds";
      case icon.includes("scattered"):
        return "clouds";
      case icon.includes("broken"):
        return "clouds";
      case icon.includes("rain"):
        return "rain";
      case icon.includes("thunderstorm"):
        return "thunderstorm";
      case icon.includes("snow"):
        return "snow";
      case icon.includes("mist"):
        return "mist";
      default:
        console.log("icon type is wrong");
    }
  };

  return (
    <div className={css.container}>
      <div
        className={cx(
          css.icon,
          css[changeColor(icon)],
          css[changeType(icon)],
          css.animation
        )}
      ></div>
    </div>
  );
}
