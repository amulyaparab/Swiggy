import {useState} from "react"

const Filters = ({filterData, filterSearchData}) => {
    const [searchText, setSearchText] = useState("")
    const [btnLabel, setBtnLabel] = useState("Show top-rated restaurants")

  return (
    <div className="filter-tab">
      <input type="text" className="search" placeholder="Search" value={searchText} onChange={(e) => {setSearchText(e.target.value);
        filterSearchData(e.target.value)
      }}/>
      <button className="filter-btn" onClick={() => {
        if(btnLabel === "Show top-rated restaurants"){
            filterData("some");
            setBtnLabel("Show all")
        } else{
            filterData("all");
            setBtnLabel("Show top-rated restaurants")
        }
        
      }}>{btnLabel}</button>
    </div>
  );
};

export default Filters;
