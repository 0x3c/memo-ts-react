import React, { useState, useEffect, useCallback } from "react";
import { WorkItemInterface, WorkItemProps, InputValueType } from "./index.d";
import { workItem } from "../../utils/api";
import "./list.css";

const WorkItem = (props: WorkItemProps) => {
  const item: WorkItemInterface = props.item;
  const { checked, text } = item;
  const { index, changeHandler } = props;
  return (
    <div className="listWrapper">
      <span>{index}</span>
      <input type="checkbox" checked={checked} onChange={changeHandler(item)} />
      <p>{text}</p>
    </div>
  );
};

const MemoList = porps => {
  const inputValue: InputValueType = undefined;
  const [list, setList] = useState([]);
  const [text, setText] = useState(inputValue);
  const texttHandler = useCallback(e => setText(e.target.value), []);
  const fetchList = async () => {
    const data = await workItem.r();
    if (data.ok) {
      setList(data.data);
    }
  };
  useEffect(() => {
    fetchList();
  }, []);
  const updateWorkItem = async (
    id: number,
    checked: boolean
  ): Promise<void> => {
    const data = await workItem.u({ checked, id });
    if (data.ok) {
      fetchList();
    }
  };
  const createWorkItem = async (): Promise<void> => {
    if (!text) {
      return;
    }
    const data = await workItem.c({ text });
    if (data.ok) {
      setText(undefined);
      fetchList();
    }
  };

  const checkHandler = item => e => {
    const checked = e.target.checked;
    if (checked === item.checked) {
      return;
    }
    updateWorkItem(item.id, checked);
  };
  return (
    <div className="itemWrapper">
      <div className="itemHeader">
        <input value={text} onChange={texttHandler} />
        <button className="addItemBtn" onClick={createWorkItem}>
          Add workitem
        </button>
      </div>
      {list.map((item: WorkItemInterface, index) => {
        return (
          <WorkItem
            index={index + 1}
            key={item.id}
            item={item}
            changeHandler={checkHandler}
          />
        );
      })}
    </div>
  );
};

export default MemoList;
