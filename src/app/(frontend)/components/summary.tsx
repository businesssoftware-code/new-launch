import { ArrowLeft, Copy } from 'lucide-react'
import React from 'react'
import { SummaryReport } from '../types/types';

interface SummaryProps {
    handleBack: () => void;
    data: SummaryReport;
}
const Summary:React.FC<SummaryProps> = ({handleBack,data}) => {
    const {averageNps,averageProductRating,date,feedbackPerson,mostCommonImprovent,mostCommonOccasion,mostCommonWhy,outletName,totalForms}=data;

     

    const copyToClipboard = () => {
        const summaryText = `
          Date: ${date},
          Feedback By: ${feedbackPerson},
          Outlet Name: ${outletName},
          Total Forms Filled: ${totalForms},
          Average NPS: ${averageNps.toFixed(2)},
          Average Product Rating: ${averageProductRating},
          Most Common Improvement Area: ${mostCommonImprovent},
          Most Common Why Basil: ${mostCommonWhy},
          Most Common Occasion of Consumption: ${mostCommonOccasion}
        `;
    
        navigator.clipboard.writeText(summaryText)
          .then(() => alert('Summary copied to clipboard!'))
          .catch((err) => console.error('Failed to copy:', err));
      };
    return (
    <div className='flex flex-col justify-evenly w-full h-full text-[#05070B]'>
        <div className='flex justify-around w-full'>
        <ArrowLeft onClick={handleBack}/>
        <h1 className='font-[600] text-[20px] '>Summary Report</h1>
        <Copy  onClick={copyToClipboard}/>
        </div>

       <div className='flex flex-col gap-5'>
       <div className='flex justify-between items-center  w-full'>
        <div className='flex flex-col gap-2'>
            <div className='flex flex-col gap-2'>
            <p className='font-[700] text-[9.76px] text-[#222222]' >DATE</p>
            <p className='text-[11.39px] font-[500] text-[#222222]'>{date}</p>
            </div>
            <div className='flex flex-col gap-2'>
            <p className='font-[700] text-[9.76px] text-[#222222]'>FORMS</p>
            <p className='text-[11.39px] font-[500] text-[#222222]'>{totalForms}</p>
        </div>
        </div>
        <div className='flex flex-col gap-2'>
            <div className='flex flex-col gap-2'>
            <p className='font-[700] text-[9.76px] text-[#222222]'>FEEDBACK BY</p>
            <p className='text-[11.39px] font-[500] text-[#222222]'>{feedbackPerson}</p>
            </div>

          <div className='flex flex-col gap-2'>
          <p className='font-[700] text-[9.76px] text-[#222222]'>AV. NPS</p>
          <p className='text-[11.39px] font-[500] text-[#222222]'>{averageNps.toFixed(2)}</p>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
           <div className='flex flex-col gap-2'>
           <p className='font-[700] text-[9.76px] text-[#222222]'>OUTLET NAME</p>
           <p className='text-[11.39px] font-[500] text-[#222222]'>{outletName}</p>
           </div>

            <div className='flex flex-col gap-2'>
            <p className='font-[700] text-[9.76px] text-[#222222]'>AV. PRODUCT RATING</p>
            <p className='text-[11.39px] font-[500] text-[#222222]'>{averageProductRating.toFixed(2)}</p>
        </div>
        </div>
        </div>
       </div>

       <div>
        <p className='font-[700] text-[9.76px] text-[#222222]'>MOST COMMON IMPROVEMENT AREA</p>
        <p className='text-[11.39px] font-[500] text-[#222222]'>{mostCommonImprovent}</p>
       </div>
       <div>
        <p className='font-[700] text-[9.76px] text-[#222222]'>MOST COMMON WHY BASIL</p>
        <p className='text-[11.39px] font-[500] text-[#222222]'>{mostCommonWhy}</p>
       </div>
       <div>
        <p className='font-[700] text-[9.76px] text-[#222222]'>MOST COMMON OCASSION OF CONSUMPTION</p>
        <p className='text-[11.39px] font-[500] text-[#222222]'>{mostCommonOccasion}</p>
       </div>
    </div>
  )
}

export default Summary;
