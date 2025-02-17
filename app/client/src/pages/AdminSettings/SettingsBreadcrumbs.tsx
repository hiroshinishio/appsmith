import React from "react";
import { Breadcrumbs } from "@appsmith/ads-old";
import { BreadcrumbCategories } from "ee/pages/AdminSettings/BreadcrumbCategories";

export const getBreadcrumbList = (category: string, subCategory?: string) => {
  const breadcrumbList = [
    BreadcrumbCategories.HOMEPAGE,
    ...(subCategory
      ? [BreadcrumbCategories[category], BreadcrumbCategories[subCategory]]
      : [BreadcrumbCategories[category]]),
  ];

  return breadcrumbList;
};

function SettingsBreadcrumbs({
  category,
  subCategory,
}: {
  category: string;
  subCategory?: string;
}) {
  return <Breadcrumbs items={getBreadcrumbList(category, subCategory)} />;
}

export default SettingsBreadcrumbs;
