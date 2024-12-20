"use client";
/* eslint-disable no-alert */
import { meaningOfLife } from "@bhf/models";
import React, { FC } from "react";

export const RandomNumberButton: FC = () => (
  <button
    type="button"
    onClick={() => alert(`The random number is ${meaningOfLife}`)}
  >
    Random Number
  </button>
);
