import React from "react";

const PriceFilter = () => {
  return (
    <div className="filter">
      <div className="filter-result">{props.count}Hästar</div>
      <div className="filter-sort">
        Min.price
        <select>
          <option>Nyligen inlagd</option>
          <option value="lowest">Lägst pris</option>
          <option value="highest">Högsta pris</option>
        </select>
      </div>
      <div className="filter-horse">
        Max.price
        <select>
          <option value="">All</option>
          <option value="Min.pris">Min.pris</option>
          <option value="Max.pris">Max.pris</option>
        </select>
      </div>
    </div>
  );
};

export default PriceFilter;
