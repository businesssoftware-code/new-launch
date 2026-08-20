"use client";

import React from "react";
import CustomCheckbox from "./custom-checkbox";
import CustomMessage from "./custom-message";
import InputField from "./InputField";
import {
  customerTypes,
  interestedProducts,
  likedMostOptions,
  orderLikelihoods,
  productExperiences,
} from "../constants/constant";
import { TypeSamplingFormData } from "../types/types";

interface Props {
  formData: TypeSamplingFormData;

  handleCustomerDataChange: (
    field: string,
    value: string | string[]
  ) => void;

  handleFormChange: (
    field: string,
    value: string | string[] | boolean
  ) => void;

  resetTrigger: boolean;

  errors: Record<string, string>;
}

const CustomerReview: React.FC<Props> = ({
  formData,
  handleCustomerDataChange,
  handleFormChange,
  resetTrigger,
  errors,
}) => {
  return (
    <div className="text-black p-4 bg-[#F8F5E9]">


      {/* Customer Name */}
      <InputField
        label="Your Name"
        placeholder="Enter your name"
        value={formData.customerData.name}
        fieldName="name"
        onChange={handleCustomerDataChange}
      />

      {/* Email */}
      <InputField
        label="Email ID"
        placeholder="Enter email ID"
        value={formData.customerData.email}
        fieldName="email"
        onChange={handleCustomerDataChange}
      />

      {/* Contact Number */}
      <InputField
        label="Contact Number"
        placeholder="Enter contact number"
        value={formData.customerData.phoneNumber}
        fieldName="phoneNumber"
        onChange={handleCustomerDataChange}
      />
    </div>
  );
};

export default CustomerReview;