import React, { useState } from "react";
import { TicketCategory } from "utils/types/TicketType";
import { Category } from "utils";
import Text from "antd/lib/typography/Text";
import "./CategoryLabel.css"

interface CategoryLabelProps {
  category: string;
}

export const CategoryLabel = ({ category }: CategoryLabelProps) => {
  function getCategoryStyle(category: string): string {
    switch (category) {
      case Category.NewFeature:
        return "newFeature"
        break;
      case Category.Error:
          return "error"
        break;
      case Category.Update:
        return "update"
        break;  

      default:
          return ''
        break;
    }
  }

  function getLabelStyle(category: string): string {
    switch (category) {
      case Category.NewFeature:
        return "newFeatureLabel"
        break;
      case Category.Error:
          return "errorLabel"
        break;
      case Category.Update:
        return "updateLabel"
        break;

      default:
          return ''
        break;
    }
  }

  return (
    <div className={getCategoryStyle(category)}>
      <Text className={getLabelStyle(category)}>
        {category}
      </Text>
    </div>
  );
};
