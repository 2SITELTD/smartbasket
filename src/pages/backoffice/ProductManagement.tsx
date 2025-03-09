import React from 'react';
import {ProductForm} from '../../components/backoffice/product/ProductForm.tsx';

export const ProductManagement: React.FC = () => {
  const productData = {
    productName: "ערגליות תפוח",
    category: "חטיפים",
    smartBasketPrice: "₪12.90",
    purchasePrice: "₪10.90",
    marketPrice: "₪18.90",
    supplierName: "שוק העיר",
    companyName: "אסם",
    sku: "43242",
    stockQuantity: "13",
    description: "ערגליות תפוחים קלאסיות עם מילוי עשיר של תפוחים מתוקים וטעימים בבצק רך ונימוח. מתאימות לכל רגע ביום – כנשנוש עם הקפה, בתיק לדרך או כפינוק מתוק לכל המשפחה.",
    nutritionalInfo: "מילוי עשיר: תפוחים מובחרים במרקם קרמי וטעם משגע.\nבצק רך: אפוי במדויק ליצירת מרקם מושלם.\nללא חומרים משמרים: עשויות מרכיבים איכותיים בלבד.",
    extendedDescription: "הטעם המוכר והאהוב של ערגליות תפוחים חוזר ומפנק בכל ביס. שילוב מדויק של בצק רך ונעים למגע, עם מילוי עשיר ועסיסי של תפוחים טריים שמתפוצצים בטעם טבעי ומתוק. המוצר המושלם להפסקת קפה מרגיעה, לנשנוש קל באמצע היום או כפינוק משפחתי שמשאיר את כולם מרוצים.\n\nערגליות התפוחים מיוצרות בקפידה, תוך שימוש במרכיבים איכותיים בלבד, כדי להבטיח טעם בלתי נשכח ומרקם שמרגיש כמו בבית. כל ביס מלא בניחוח המוכר של תפוחים אפויים, עם איזון מושלם בין המתיקות של המילוי לרכות הבצק."
  };

  return (
    <div className="container mx-auto px-4">
      <ProductForm {...productData} />
    </div>
  );
};

