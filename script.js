const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("mouseenter", () => {
    const hoveredDirection = box.getAttribute("data-direction");
    updateImagesBasedOnHover(hoveredDirection);
  });
});

function updateImagesBasedOnHover(hoveredDirection) {
  boxes.forEach((box) => {
    const img = box.querySelector("img");
    const direction = box.getAttribute("data-direction");

    if (hoveredDirection === "front") {
      if (direction === "front") img.src = "assets/front.jpeg";
      if (direction === "top-left") img.src = "assets/top-left.jpeg";
      if (direction === "top") img.src = "assets/top.jpeg";
      if (direction === "top-right") img.src = "assets/top-right.jpeg";
      if (direction === "left") img.src = "assets/left.jpeg";
      if (direction === "right") img.src = "assets/right.jpeg";
      if (direction === "bottom-left") img.src = "assets/bottom-teft.jpeg";
      if (direction === "bottom") img.src = "assets/bottom.jpeg";
      if (direction === "bottom-right") img.src = "assets/bottom-right.jpeg";
    } else if (hoveredDirection === "top-left") {
      if (direction === "top-left") img.src = "assets/front.jpeg";
      if (direction === "front") img.src = "assets/bottom-right.jpeg";
      if (direction === "top") img.src = "assets/right.jpeg";
      if (direction === "top-right") img.src = "assets/right.jpeg";
      if (direction === "left") img.src = "assets/bottom.jpeg";
      if (direction === "right") img.src = "assets/bottom-right.jpeg";
      if (direction === "bottom-left") img.src = "assets/bottom.jpeg";
      if (direction === "bottom") img.src = "assets/bottom-right.jpeg";
      if (direction === "bottom-right") img.src = "assets/bottom-right.jpeg";
    } else if (hoveredDirection === "top") {
      if (direction === "top") img.src = "assets/front.jpeg";
      if (direction === "front") img.src = "assets/bottom.jpeg";
      if (direction === "top-left") img.src = "assets/left.jpeg";
      if (direction === "top-right") img.src = "assets/right.jpeg";
      if (direction === "left") img.src = "assets/bottom-teft.jpeg";
      if (direction === "right") img.src = "assets/bottom-right.jpeg";
      if (direction === "bottom-left") img.src = "assets/bottom-teft.jpeg";
      if (direction === "bottom") img.src = "assets/bottom.jpeg";
      if (direction === "bottom-right") img.src = "assets/bottom-right.jpeg";
    } else if (hoveredDirection === "top-right") {
      if (direction === "top-right") img.src = "assets/front.jpeg";
      if (direction === "front") img.src = "assets/bottom-teft.jpeg";
      if (direction === "top") img.src = "assets/left.jpeg";
      if (direction === "top-left") img.src = "assets/left.jpeg";
      if (direction === "left") img.src = "assets/bottom-teft.jpeg";
      if (direction === "right") img.src = "assets/bottom.jpeg";
      if (direction === "bottom-left") img.src = "assets/bottom-teft.jpeg";
      if (direction === "bottom") img.src = "assets/bottom-teft.jpeg";
      if (direction === "bottom-right") img.src = "assets/bottom.jpeg";
    } else if (hoveredDirection === "left") {
      if (direction === "left") img.src = "assets/front.jpeg";
      if (direction === "front") img.src = "assets/right.jpeg";
      if (direction === "top-left") img.src = "assets/top.jpeg";
      if (direction === "top") img.src = "assets/top-right.jpeg";
      if (direction === "top-right") img.src = "assets/top-right.jpeg";
      if (direction === "right") img.src = "assets/right.jpeg";
      if (direction === "bottom-left") img.src = "assets/bottom.jpeg";
      if (direction === "bottom") img.src = "assets/bottom-right.jpeg";
      if (direction === "bottom-right") img.src = "assets/bottom-right.jpeg";
    } else if (hoveredDirection === "right") {
      if (direction === "right") img.src = "assets/front.jpeg";
      if (direction === "front") img.src = "assets/left.jpeg";
      if (direction === "top-left") img.src = "assets/top-left.jpeg";
      if (direction === "top") img.src = "assets/top-left.jpeg";
      if (direction === "top-right") img.src = "assets/top.jpeg";
      if (direction === "right") img.src = "assets/right.jpeg";
      if (direction === "bottom-left") img.src = "assets/bottom-teft.jpeg";
      if (direction === "bottom") img.src = "assets/bottom-teft.jpeg";
      if (direction === "bottom-right") img.src = "assets/bottom.jpeg";
    } else if (hoveredDirection === "bottom-left") {
      if (direction === "bottom-left") img.src = "assets/front.jpeg";
      if (direction === "front") img.src = "assets/top-right.jpeg";
      if (direction === "top-left") img.src = "assets.top.jpeg";
      if (direction === "top") img.src = "assets.top-right.jpeg";
      if (direction === "top-right") img.src = "assets.top-right.jpeg";
      if (direction === "left") img.src = "assets.top.jpeg";
      if (direction === "right") img.src = "assets.top-right.jpeg";
      if (direction === "bottom") img.src = "assets.right.jpeg";
      if (direction === "bottom-right") img.src = "assets.right.jpeg";
    } else if (hoveredDirection === "bottom") {
      if (direction === "bottom") img.src = "assets/front.jpeg";
      if (direction === "front") img.src = "assets/top.jpeg";
      if (direction === "top-left") img.src = "assets/top-left.jpeg";
      if (direction === "top") img.src = "assets.top.jpeg";
      if (direction === "top-right") img.src = "assets.top-right.jpeg";
      if (direction === "left") img.src = "assets.top-left.jpeg";
      if (direction === "right") img.src = "assets.top-right.jpeg";
      if (direction === "bottom-left") img.src = "assets/left.jpeg";
      if (direction === "bottom-right") img.src = "assets/right.jpeg";
    } else if (hoveredDirection === "bottom-right") {
      if (direction === "bottom-right") img.src = "assets/front.jpeg";
      if (direction === "front") img.src = "assets/top-left.jpeg";
      if (direction === "top-left") img.src = "assets/top-left.jpeg";
      if (direction === "top") img.src = "assets.top-left.jpeg";
      if (direction === "top-right") img.src = "assets.top.jpeg";
      if (direction === "left") img.src = "assets.top-left.jpeg";
      if (direction === "right") img.src = "assets.top.jpeg";
      if (direction === "bottom-left") img.src = "assets/left.jpeg";
      if (direction === "bottom") img.src = "assets/left.jpeg";
    }
  });
}
