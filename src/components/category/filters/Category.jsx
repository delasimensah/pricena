import React from "react";
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import FilterItem from "./FilterItem";

const Category = () => {
  return (
    <FilterItem title="Category">
      <FormGroup>
        <FormControlLabel
          control={<Checkbox />}
          label="Mobiles, Tablets & Wearables"
        />
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Mobile Phones"
        />
      </FormGroup>
    </FilterItem>
  );
};

export default Category;
