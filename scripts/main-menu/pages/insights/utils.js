
export const calculateTitlePosition = () => -(height() / 2) * 0.9;

export const createBackButton = (parent, callback) => {

  const buttonObj = parent.add([
    sprite("cancel", {
      width: 72,
      height: 70
    }),
    pos(-width() / 2 + 50, -height() / 2 + 50),
    area(),
    scale(1),
    anchor("center"),
  ]);

  buttonObj.onClick(() => callback());
}