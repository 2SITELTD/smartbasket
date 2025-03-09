import React from 'react';
import ImageWithOverlay from './ImageWithOverlay.tsx';
import InputField from './InputField.tsx';
import SelectField from './SelectField.tsx';
import TagSelector from './TagSelector.tsx';
import Button from './Button.tsx';

interface ProductFormProps {
  productName: string;
  category: string;
  smartBasketPrice: string;
  purchasePrice: string;
  marketPrice: string;
  supplierName: string;
  companyName: string;
  sku: string;
  stockQuantity: string;
  description: string;
  nutritionalInfo: string;
  extendedDescription: string;
}

export const ProductForm: React.FC<ProductFormProps> = ({
  productName,
  category,
  smartBasketPrice,
  purchasePrice,
  marketPrice,
  supplierName,
  companyName,
  sku,
  stockQuantity,
  description,
  nutritionalInfo,
  extendedDescription
}) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap gap-8 justify-center w-full max-md:max-w-full">
        <ImageWithOverlay
          imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/73d89870dc20492c0d12b1e01d48b24edaa74013a21ebf9927933b63cdf9c395?placeholderIfAbsent=true&apiKey=a2912972c87048d393f4667cd84e0030"
          altText="Product image"
        />
        <div className="flex flex-col flex-1 shrink p-10 bg-white rounded-2xl shadow-sm basis-0 min-w-[240px] max-md:px-5 max-md:max-w-full">
          <h2 className="flex flex-col items-end w-full text-2xl font-semibold leading-none text-right text-black max-md:max-w-full">
            <div className="flex flex-col max-w-full w-[117px]">
              <div className="self-end">הוספת מוצר</div>
              <div className="flex mt-3 w-full bg-sky-500 min-h-[3px]" />
            </div>
          </h2>
          <div className="flex mt-4 w-full bg-neutral-300 min-h-[1px] max-md:max-w-full" />
          <div className="flex flex-col p-5 mt-4 w-full text-sm bg-white rounded-xl shadow-sm max-md:max-w-full">
            <div className="flex gap-4 items-start w-full leading-loose text-black max-md:max-w-full">
              <div className="flex flex-wrap flex-1 shrink gap-4 items-center w-full basis-0 min-w-[240px] max-md:max-w-full">
                <SelectField label="קטגוריה:" value={category} options={['חטיפים']} />
                <InputField label="שם מוצר:" value={productName} />
              </div>
            </div>
            <div className="flex gap-4 items-start mt-3 w-full leading-loose max-md:max-w-full">
              <div className="flex flex-wrap flex-1 shrink gap-4 items-center w-full basis-0 min-w-[240px] max-md:max-w-full">
                <InputField label="מחיר SmartBasket:" value={smartBasketPrice} helperText="זה המחיר שיופיע באדום." />
                <InputField label="מחיר רכישה:" value={purchasePrice} helperText="מחיר מבצע מהספק." />
                <InputField label="מחיר שוק:" value={marketPrice} helperText="מחיר מוצר בשוק כרגע" />
              </div>
            </div>
            <div className="flex flex-wrap gap-4 items-start mt-3 w-full leading-loose text-black max-md:max-w-full">
              <SelectField label="שם ספק:" value={supplierName} options={['שוק העיר']} />
              <SelectField label="שם חברה:" value={companyName} options={['אסם']} />
            </div>
            <div className="flex flex-wrap gap-4 items-start mt-3 w-full leading-loose text-black max-md:max-w-full">
              <InputField label="מק&quot;ט:" value={sku} />
              <InputField label="כמות מלאי:" value={stockQuantity} />
            </div>
            <TagSelector />
            <div className="flex flex-col mt-3 w-full text-black max-md:max-w-full">
              <div className="flex flex-col w-full max-md:max-w-full">
                <div className="leading-loose text-right max-md:max-w-full">
                  הצג מוצר ב:
                </div>
                <div className="flex mt-2.5 w-full bg-neutral-300 min-h-[1px] max-md:max-w-full" />
                <div className="flex flex-col items-end self-end mt-2.5 font-semibold text-center">
                  <div className="flex gap-2.5 items-center">
                    <Button variant="outline">מבצעים שאסור לפספס</Button>
                    <Button variant="outline">הצעת השבוע</Button>
                    <Button variant="filled">מוצרים חמים</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col p-10 mt-8 w-full text-sm text-right bg-white rounded-2xl shadow-sm min-h-[542px] max-md:px-5 max-md:max-w-full">
        <h2 className="flex flex-col items-end w-full text-2xl font-semibold leading-none text-black max-md:max-w-full">
          <div className="flex flex-col w-52 max-w-full">
            <div className="self-end">תיאור וערכים תזונתיים</div>
            <div className="flex mt-3 w-full bg-sky-500 min-h-[3px]" />
          </div>
        </h2>
        <div className="flex mt-4 w-full bg-neutral-300 min-h-[1px] max-md:max-w-full" />
        <div className="flex flex-wrap gap-4 mt-4 w-full text-black min-h-[132px] max-md:max-w-full">
          <InputField label="ערכים תזונתיים:" value={nutritionalInfo} multiline />
          <InputField label="תיאור קצר:" value={description} multiline />
        </div>
        <InputField label="תיאור מורחב:" value={extendedDescription} multiline />
        <div className="flex flex-wrap gap-8 items-start mt-4 w-full text-xl text-center max-md:max-w-full">
          <Button variant="filled" fullWidth>עדכן מוצר במלאי</Button>
          <Button variant="outline" color="red" fullWidth>הסר מוצר</Button>
        </div>
      </div>
    </div>
  );
};
