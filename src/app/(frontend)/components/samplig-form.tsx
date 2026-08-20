"use client";

import { useState, useRef } from "react";
import { TypeSamplingFormData } from "../types/types";
import axios from "axios";
import { API } from "../config";
import RootLayout from "./root-layout";
import CustomerReview from "./CustomerReview";
import Buttons from "./Buttons";
import { toast, ToastContainer } from "react-toastify";
import { motion } from "framer-motion";

const SamplingForm = () => {
  const customerReviewRef = useRef<HTMLDivElement>(null);

  const [steps, setSteps] = useState<number>(3);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [resetTrigger, setResetTrigger] = useState<boolean>(false);

  const initialCustomerReviewForm: TypeSamplingFormData = {
    customerData: {
      name: "",
      email: "",
      phoneNumber: "",
    },
  };

  const [customerReviewForm, setCustomerReviewForm] =
    useState<TypeSamplingFormData>(initialCustomerReviewForm);

  /* =========================
     Validation
  ========================= */

  const validateCustomerReviewForm = () => {
    const errors: Record<string, string> = {};

    if (!customerReviewForm.customerData.name.trim()) {
      errors.name = "Name is required.";
    }

    if (!customerReviewForm.customerData.email.trim()) {
      errors.email = "Email is required.";
    }

    if (!customerReviewForm.customerData.phoneNumber.trim()) {
      errors.phoneNumber = "Contact number is required.";
    }

    return errors;
  };

  /* =========================
     Reset
  ========================= */

  const resetCustomerReviewForm = () => {
    setCustomerReviewForm(initialCustomerReviewForm);
    setResetTrigger((prev) => !prev);
  };

  /* =========================
     Form Handler
  ========================= */

  const handleCustomerDataChange = (
    field: string,
    value: string | string[]
  ) => {
    setCustomerReviewForm((prev) => ({
      ...prev,
      customerData: {
        ...prev.customerData,
        [field]: value,
      },
    }));
  };

  /* =========================
     Submit
  ========================= */

  const handleSubmit = async () => {
    try {
      const errors = validateCustomerReviewForm();

      if (Object.keys(errors).length > 0) {
        toast.info("Please fill in all the required fields.");

        customerReviewRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        return;
      }

      toast.info("Submitting form...");

      const payload = {
        name: customerReviewForm.customerData.name,
        email: customerReviewForm.customerData.email,
        contactNumber:
          customerReviewForm.customerData.phoneNumber,
      };

      const response = await axios.post(
        `${API}/new-launch/submit`,
        payload
      );

      if (response.status !== 201) {
        toast.error("Failed to submit form.");
        return;
      }

      toast.success("Form submitted successfully!");

      // Clear form
      resetCustomerReviewForm();
      setIsExpanded(false);

      // Show coupon screen
      setSteps(3);
    } catch (error: any) {
      console.error(error);

      if (error?.response?.status === 400) {
        toast.error(
          error?.response?.data?.message ??
            "This contact number has already been used."
        );

        return;
      }

      toast.error(
        "Something went wrong. Please try again."
      );
    }
  };

  /* =========================
     Submit Another Response
  ========================= */

  const handleAnotherResponse = () => {
    resetCustomerReviewForm();
    setIsExpanded(false);
    setSteps(2);
  };

  /* =========================
     UI
  ========================= */

  return (
    <div className="min-h-screen">
      <ToastContainer
        position="top-center"
        autoClose={3000}
      />

      {steps === 2 ? (
        <RootLayout
          isExpanded={isExpanded}
          setIsExpanded={setIsExpanded}
        >
          <div ref={customerReviewRef}>
            <CustomerReview
              formData={customerReviewForm}
              handleCustomerDataChange={
                handleCustomerDataChange
              }
              handleFormChange={() => {}}
              resetTrigger={resetTrigger}
              errors={{}}
            />
          </div>

          <Buttons
            onNext={handleSubmit}
            onClear={resetCustomerReviewForm}
            isDisabled={false}
          />
        </RootLayout>
      ) : (

<div className="min-h-screen flex items-center justify-center p-6 bg-[#063312] text-[#F8F5E9]">
  <div className="w-full max-w-md text-center">

    {/* Flying Celebration */}
    <motion.div
      initial={{
        opacity: 0,
        y: 120,
        scale: 0.5,
        rotate: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        rotate: 0,
      }}
      transition={{
        type: "spring",
        stiffness: 180,
        damping: 10,
        duration: 0.8,
      }}
      className="text-6xl mb-4"
    >
      🎉
    </motion.div>

    {/* Success Message */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.4,
        duration: 0.6,
      }}
      className="mb-6"
    >
      <h1 className="text-2xl font-bold">
        Thank You!
      </h1>

      <p className="mt-2">
        Your form has been submitted successfully.
      </p>
    </motion.div>

    {/* Coupon */}
    <motion.div
      initial={{
        opacity: 0,
        y: 80,
        scale: 0.85,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        delay: 0.7,
        type: "spring",
        stiffness: 120,
        damping: 12,
      }}
      className="border-2 border-dashed border-black rounded-2xl p-8 bg-[#F8F5E9]"
    >
      <p className="text-sm text-gray-500">
        Your Coupon Code
      </p>

      <motion.p
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 1.1,
          type: "spring",
          stiffness: 200,
        }}
        className="mt-3 text-4xl font-bold tracking-[0.2em] text-[#063312]"
      >
        BASIL10
      </motion.p>

      <p className="mt-4 text-sm text-gray-500">
        Get 10% exclusive off on your first order.
      </p>
    </motion.div>

  </div>
</div>
      )}
    </div>
  );
};

export default SamplingForm;