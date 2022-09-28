import React from "react";
import '../css/Header.css'
const Header = () => {
  return (
    <div className="header">
      <label>Tên lớp sơ đồ </label>
      <select id="Search-Map">
        <option value="">Search chọn sơ đồ, có gợi ý để chọn : gồm tên sơ đồ, năm đơn vị thành lập, tỉnh(hiện tối đa 3 tỉnh đầu tiên)</option>
      </select>
      <button className ="button-header">Thêm</button>
    </div>
  );
};

export default Header;
