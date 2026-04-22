import React from "react";
import { shuffle, range } from "lodash";
import { App, snapshot, done, clear } from "./sort-visualizer";

import "./sort.css";

function sort(nums) {
  for (let i = 1; i < nums.length; i++) {
    snapshot(nums);
    const newItem = nums[i];

    let j; // inner counter

    for (j = i - 1; nums[j] > newItem; j--) {
      nums[j + 1] = nums[j];
    }

    nums[j + 1] = newItem;
  }
  snapshot(nums);
}

export default function SortComponent() {
  clear();
  sort(shuffle(range(11)));
  done();
  return <App />;
}
