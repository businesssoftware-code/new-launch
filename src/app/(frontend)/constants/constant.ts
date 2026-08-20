import { TypeOfCheckField, TypeOfSelectField } from "../types/types";
import { ThumbsUp, Gauge, Utensils, Repeat, List, CheckCircle, Leaf, HeartPulse, CandyCane,  CloudSun,ShieldPlus,Sprout,Laugh,Sunrise,Sunset ,Sun,UtensilsCrossed,Replace} from "lucide-react";


export const section1checkbox: TypeOfCheckField[] = [
  {
    id: 1,
    name: "Staff Interaction",
    icon: CheckCircle, // Lucide Icon
  },
  {
    id: 2,
    name: "Hygiene of Kiosk",
    icon: ShieldPlus ,
  },
  {
    id: 3,
    name: "Speed of Preparation",
    icon: Gauge,
  },
  {
    id: 4,
    name: "Taste of Product",
    icon: Utensils,
  },
  {
    id: 5,
    name: "Consistency of Product",
    icon: Repeat,
  },
  {
    id: 6,
    name: "Menu Variety",
    icon: List,
  },
  {
    id: 7,
    name: "All is Okay",
    icon: ThumbsUp,
  },
];

export const section2checkbox: TypeOfCheckField[] = [
  {
    id: 1,
    name: "Fresh",
    icon: Leaf,
  },
  {
    id: 2,
    name: "Healthy",
    icon: HeartPulse,
  },
  {
    id: 3,
    name: "No Sugar",
    icon: CandyCane,
  },
  {
    id: 4,
    name: "Natural",
    icon: Sprout,
  },
  {
    id: 5,
    name: "Tasty",
    icon: Laugh,
  },
];

export const section3checkbox: TypeOfCheckField[] = [
  {
    id: 1,
    name: "With Lunch",
    icon: Sun,
  },
  {
    id: 2,
    name: "With Dinner",
    icon: Sunset,
  },
  {
    id: 3,
    name: "Breakfast",
    icon: Sunrise,
  },
  {
    id: 4,
    name: "Evening Snack",
    icon: CloudSun ,
  },
  {
    id: 5,
    name: "Fasting",
    icon: UtensilsCrossed ,
  },
  {
    id: 6,
    name: "Meal Replacement",
    icon: Replace,
  },
];


// constants.ts

export const customerTypes = [
  "new",
  "regular",
] as const;

export const productExperiences = [
  "LOVED",
  "GOOD",
  "OKAY",
  "DID_NOT_ENJOY",
] as const;

export const orderLikelihoods = [
  "DEFINITELY",
  "PROBABLY",
  "MAYBE",
  "UNLIKELY",
] as const;

export const customerPreferences: TypeOfCheckField[] = [
  { id: 1, name: "Breakfast" },
  { id: 2, name: "Lunch" },
  { id: 3, name: "Dinner" },
  { id: 4, name: "Evening Snack" },
  { id: 5, name: "Post Workout" },
  { id: 6, name: "Healthy Snack" },
  { id: 7, name: "Other" },
];

export const likedMostOptions = [
  { id: 1, name: "Taste" },
  { id: 2, name: "Freshness" },
  { id: 3, name: "No Added Sugar" },
  { id: 4, name: "High Protein" },
  { id: 5, name: "Clean Ingredients" },
  { id: 6, name: "Transparency" },
  { id: 7, name: "Value for Money" },
  { id: 8, name: "Other" },
];
export const interestedProducts: TypeOfSelectField[] = [
  { id: 1, name: "High Protein" },
  { id: 2, name: "Smoothies" },
  { id: 3, name: "Sandwiches" },
  { id: 4, name: "Wraps" },
  { id: 5, name: "Smoothie Bowls" },
  { id: 6, name: "Cold Coffee" },
  { id: 7, name: "Cold Pressed Juices" },
  { id: 8, name: "Other" },
];