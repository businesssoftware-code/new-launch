import { LucideIcon } from "lucide-react";

export type TypeOfSelectField = {
    id: number;
    name: string;
  }

export type TypeOfCheckField={
    id: number;
    name: string;
    icon?:LucideIcon;
}

export type OutletForm={
    feedbackPersonId:number|null;
    outletId:number|null;
    staffIds:number[];
}

export interface CustomerData {
    name: string;
    phoneNumber: string;
    type: 'new' | 'regular';
    preference: string[];
  }
  
  export interface FeedbackResponse {
    questionId: number;
    value: string;
  }
  
  export interface ProductRating {
    productId: number|null;
    rating: number|null;
  }
  
  export interface CustomerReviewForm {
    customerData: CustomerData;
    netPromoterScore: number;
    improvementAreas: string[];
    whyBasil: string[];
    feedbackResponses: FeedbackResponse[];
    productRatings: ProductRating[];
  }
  

  export interface ResultProps {
  customerName: string;
}

  export interface SummaryReport{
    date:string;
    feedbackPerson:string;
    outletName:string;
    totalForms:number;
    averageNps:number;
    averageProductRating:number;
    mostCommonImprovent:string;
    mostCommonWhy:string;
    mostCommonOccasion:string;
  }
  export interface FeedbackDataItem {
    dateWiseMetrics: {
      date: string;
      totalFormsFilled: number;
      avgNps: number;
      avgProductRating: number;
    }[];
    FeedbackPerson?: {  // Optional property
      name: string;
    };
    Outlet?: {  // Optional property
      name: string;
    };
    mostCommonImprovementArea: string;
    mostCommonWhyBasil: string;
    mostCommonConsumption: string;
  }
  
  // Define an array of feedback data items
  export type FeedbackDataArray = FeedbackDataItem[];


  export type TypeSamplingFormData =  {
  customerData: {
    name: string;
    phoneNumber: string;
    email: string;
  };
}
