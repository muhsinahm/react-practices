/* eslint-disable react/prop-types */
import classNames from "classnames";
import { useEffect, useMemo, useRef, useState } from "react";
import "./Shapes.css";
const Shapes = ({ data }) => {
  const boxes = useMemo(() => data.flat(Infinity), [data]);
  const [selected, setSelected] = useState(new Set());
  const [unloading, setUnloading] = useState(false);
  const timerRef = useRef(null);
  const countOfVisibleBoxes = useMemo(() => {
    return boxes.reduce((acc, box) => {
      if (box === 1) {
        acc += 1;
      }
      return acc;
    }, 0);
  }, [boxes]);
  const handleClick = (e) => {
    const { target } = e;
    const index = target.getAttribute("data-index");
    const status = target.getAttribute("data-status");
    if (
      index === null ||
      status === "hidden" ||
      selected.has(index) ||
      unloading
    ) {
      return;
    }
    setSelected((prev) => {
      return new Set(prev.add(index));
    });
  };

  const unload = () => {
    setUnloading(true);
    const keys = Array.from(selected.keys());

    const removeNextKey = () => {
      if (keys.length) {
        const currentKey = keys.shift();
        setSelected((prev) => {
          const updatedKeys = new Set(prev);
          updatedKeys.delete(currentKey);
          return updatedKeys;
        });
        timerRef.current = setTimeout(removeNextKey, 500);
      } else {
        setUnloading(false);
        clearTimeout(timerRef.current);
      }
    };
    timerRef.current = setTimeout(removeNextKey, 100);
  };

  useEffect(() => {
    if (selected.size >= countOfVisibleBoxes) {
      unload();
    }
  }, [selected]);
  return (
    <div className="boxes" onClick={handleClick}>
      {boxes.map((box, index) => {
        const status = box === 1 ? "visible" : "hidden";
        const isSelected = selected.has(index.toString());
        return (
          <div
            key={`${box}-${index}`}
            className={classNames("box", status, isSelected && "selected")}
            data-index={index}
            data-status={status}
          ></div>
        );
      })}
    </div>
  );
};

export default Shapes;
