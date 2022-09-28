import React, { useState } from "react";
import "../css/Body.css";
const Lists = [
  {
    stt: 1,
    from: 0.1,
    to: 0.2,
    Trongso: 1,
  },
  {
    stt: 2,
    from: 0.201,
    to: 0.3,
    Trongso: 2,
  },
  {
    stt: 3,
    from: 0.301,
    to: 0.4,
    Trongso: 3,
  },
];
const Body = () => {
  const [datas, setDatas] = useState(Lists);
  const [stt, setStt] = useState(Lists.length + 1);
  const Add = () => {
    setStt(e => e+1)
    setDatas((e) => [
      ...e,
      {
        stt: stt,
      },
    ]);
  };
  const Delete = (id) => {
    console.log(id);
    setDatas(
      datas.filter((e) => {
        if (e.stt.toString() === (id).toString()) {
          return false;
        } else {
          return true;
        }
      })
    );

  };

  return (
    <div className="body">
      <div className="auto-fill">
        <div>
          <label>Giá trị min-max của lớp</label>
          <input type="text" />
          <input type="text" />
        </div>
        <div>
          <label>Trọng số lớp</label>
          <input type="text" />
        </div>
      </div>
      <div>
        <label>Trọng số giá trị</label>
        <div>
          <table className="table-body">
            <thead>
              <tr>
                <td>STT</td>
                <td>Giá trị từ</td>
                <td>Giá trị đến</td>
                <td>Trọng số</td>
                <td>
                  <button onClick={Add}>+</button>
                </td>
              </tr>
            </thead>
            <tbody>
              {datas.map((data, index) => (
                <tr key={index}>
                  <td>{data.stt}</td>
                  <td>
                    <input type="text" value={data.from} />
                  </td>
                  <td>
                    <input type="text" value={data.to} />
                  </td>
                  <td>
                    <input type="text" value={data.Trongso} />
                  </td>
                  <td>
                    <button onClick={() => Delete(data.stt)}>Xóa</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Body;
