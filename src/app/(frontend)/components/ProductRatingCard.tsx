import React from 'react';
import { Star } from 'lucide-react';
import DynamicSelectField from './dynamic-select-field';
import { TypeOfSelectField, ProductRating } from '../types/types';

interface ProductRatingCardProps {
  index: number;
  formData: ProductRating[];
  errors: { productId?: string; rating?: string };
  handleProductSelect: (selectedId: number | null, index: number) => void;
  handleProductRating: (productId: number, rating: number) => void;
  getFilteredProduct: (index: number) => TypeOfSelectField[];
  handleDelete:(index:number)=>void;
}

const ProductRatingCard: React.FC<ProductRatingCardProps> = ({
  index,
  formData,
  errors,
  handleProductSelect,
  handleProductRating,
  getFilteredProduct,
  handleDelete
}) => {
  return (
    <div key={index} className="mt-6 border p-4 rounded-lg border-black">
      <p className="block font-semibold translate-y-[-28px]">
        <span className="bg-white leading-[18.69px] font-[600] text-[#05070B]">
          Product #{index + 1} <span className="text-[#D92D20]">*</span>
        </span>
      </p>

      {/* Product Selection */}
      <DynamicSelectField
        value={formData[index]?.productId || 0}
        onChange={(selectedId) => handleProductSelect(selectedId, index)}
        dropDownData={getFilteredProduct(index)}
        labelTitle="Product Name"
        required={true}
        placeholder="Select the product name"
        error={!!errors.productId}
        errorMessage={errors.productId || "Product is required"}
      />

      {/* Product Rating */}
      <div className="mt-4">
        <label className="block text-[13px] font-[600] text-[#05070B]">
          Product Rating <span className="text-[#D92D20]">*</span>
        </label>
        <div className="flex justify-between mt-2">
          {['V Bad', 'Bad', 'Okay', 'Good', 'Excellent'].map((rating, ratingIndex) => (
            <div
              key={rating}
              className="flex flex-col
               gap-3 items-center cursor-pointer"
              onClick={() => handleProductRating(formData[index]?.productId || 0, ratingIndex + 1)}
            >
              <span className="text-[10px] font-[600]">{rating}</span>
              <Star
  fill={formData[index]?.rating != null && formData[index]?.rating >= ratingIndex + 1 ? 'black' : 'none'}
  stroke="black"
                strokeWidth={1}
                className="w-8 h-8"
              />
            </div>
          ))}
        </div>
        {errors.rating && <p className="text-red-500 text-sm mt-1">{errors.rating}</p>}
       {index !== 0 && <button  onClick={() => handleDelete(index)} className='bg-[#05070B] text-white py-2 px-4 rounded mt-4'>Delete Product</button>}
      </div>
    </div>
  );
};

export default ProductRatingCard;
