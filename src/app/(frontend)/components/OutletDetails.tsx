import React, { useState, useEffect } from "react";
import DynamicSelectField from "./dynamic-select-field";
import { OutletForm, TypeOfSelectField } from "../types/types";

interface OutletDetailsProps {
  feedbackPersons: TypeOfSelectField[];
  outletNames: TypeOfSelectField[];
  staffNames: TypeOfSelectField[];
  formData: OutletForm;
  handleFormChange: (field: string, value: string | number | number[] | null) => void;

}

const OutletDetails: React.FC<OutletDetailsProps> = ({
  feedbackPersons,
  outletNames,
  staffNames,
  formData,
  handleFormChange,
}) => {
  const [staffCount, setStaffCount] = useState<number>(formData.staffIds.length || 1);

  // Function to filter already selected staff but allow currently selected staff
  const getFilteredStaff = (index: number) => {
    return staffNames.filter(
      (staff) =>
        !formData.staffIds.includes(staff.id) || 
        formData.staffIds[index] === staff.id // Allow current selection
    );
  };

  // Handle selecting staff member for a particular index
  const handleStaffSelect = (selectedId: number | null, index: number) => {
    const updatedStaff = [...formData.staffIds];
    updatedStaff[index] = selectedId || 0;
    handleFormChange("staffIds", updatedStaff);

    // Add a new dropdown only if the last dropdown has a valid selection
    if (selectedId !== null && index === formData.staffIds.length - 1) {
      setStaffCount((prev) => prev + 1);
    }
  };

  useEffect(() => {
    // Ensure staff count matches the form data when coming back to the step.
    setStaffCount(formData.staffIds.length || 1);
  }, [formData.staffIds]);

  return (
    <div className="flex justify-center items-center flex-col gap-6 mt-6 w-[100%] pr-4 pl-4">
      {/* Feedback Person Selection */}
      <DynamicSelectField
        labelTitle="Feedback Person Name"
        required={true}
        placeholder="Select Feedback Person"
        onChange={(selectedId) => handleFormChange("feedbackPersonId", selectedId)}
        value={formData.feedbackPersonId}
        dropDownData={feedbackPersons}
        
      />

      {/* Outlet Name Selection */}
      <DynamicSelectField
        labelTitle="Outlet Name"
        required={true}
        placeholder="Select Outlet"
        onChange={(selectedId) => handleFormChange("outletId", selectedId)}
        value={formData.outletId}
        dropDownData={outletNames}
       
      />

      {/* Staff Selection */}
      {Array.from({ length: staffCount }).map((_, index) => (
        <DynamicSelectField
          key={index}
          labelTitle={`Staff Name ${index + 1}`}
          required={true}
          placeholder="Select Staff"
          onChange={(selectedId) => handleStaffSelect(selectedId, index)}
          value={formData.staffIds[index] || null}
          dropDownData={getFilteredStaff(index)}
        />
      ))}

      {/* Add More Staff Button */}
      <p
        onClick={() => {
          if (formData.staffIds[staffCount - 1]) {
            setStaffCount((prev) => prev + 1);
          }
        }}
        className="text-black underline cursor-pointer self-start ml-[30px] mt-2"
      >
        Add More Staff
      </p>
    </div>
  );
};

export default OutletDetails;
