"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { inc, dic } from "@/redux/createSlice";
import { RootState } from "@/redux/store";

export const Counter = () => {
  const { count } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();
  return (
    <>
      <div className="max-w-[1320px] mx-auto">
        <div className="mt-7 text-center">
          <h1 className="text-5xl mb-5 font-semibold">{count}</h1>
          <div className="flex justify-center items-center gap-4">
            <button
              className="text-3xl font-bold border-2 px-2 rounded-lg border-gray-400"
              onClick={() => dispatch(inc())}
            >
              +
            </button>
            <button
              className="text-3xl font-bold border-2 px-2 rounded-lg border-gray-400"
              onClick={() => dispatch(dic())}
            >
              -
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
