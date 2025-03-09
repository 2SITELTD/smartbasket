import * as React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useMobile } from '../../hooks/use-mobile';
import { useSelector } from 'react-redux';
import { selectProducts } from '../../store/productSlice';
import ProductImage from '../../components/front/productDetail/ProductImage.tsx';
import StoreItem from '../../components/front/productDetail/StoreItem.tsx';
import ProductDescription from '../../components/front/productDetail/ProductDescription.tsx';
import ProductBottomDetails from '../../components/front/productDetail/productBottomDetails.tsx';
import ProductShowcase from '../../components/front/packageFront/ProductShowcase';
import { CartItemProps } from '../../types/cartTypes';
import { addItem } from '../../store/cartSlice';
import Heart from '../../components/Heart';
import { QtyControls } from '../../components/front/QtyControls.tsx';

const MainComponent: React.FC = () => {
  const isMobile = useMobile();

  const [productQty, setProductQty] = React.useState(1);
  const dispatch = useDispatch();

  const handleIncreaseQuantity = () => {
    setProductQty((prev) => prev + 1);
  };

  const handleDecreaseQuantity = () => {
    setProductQty((prev) => Math.max(1, prev - 1));
  };
  const { id } = useParams<{ id: string }>();
  const products = useSelector(selectProducts);

  const product = products.find((product) => product.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }
  const handleAddToCart = () => {
    const cartItem: CartItemProps = {
      id,
      name: product.name,
      originalPrice: product.originalPrice,
      price: product.price,
      quantity: productQty,
      image: product.image,
    };
    dispatch(addItem(cartItem));
    // toast.success('המוצר נוסף לעגלה בהצלחה');
  };

  const storeItemIcons = [
    {
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/2c95348f576e2c151d01b16a181e9bc2c93b24f754bc3df859b0fb92d034dd7b?apiKey=3bd4fc55ef394bd184dc9786c01c1445&",
      iconAlt: "Facebook Icon",
    },
    {
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/48c6d5db99ffa51e69268ba0289eb0bddf82b6c5b8ee88318c22c9244106634c?apiKey=3bd4fc55ef394bd184dc9786c01c1445&",
      iconAlt: "Twitter Icon",
    },
  ];

  return isMobile ? (
    <div className="flex overflow-hidden flex-col items-center bg-zinc-100">
      <div className="mt-16 max-w-full w-[1105px] max-md:mt-10">
        <div className="flex gap-5 max-md:flex-col">
          <ProductImage imageSrc={product.image} onSale={product.isSale} />
          <StoreItem
            id= {product.id}
            price={product?.price}
            originalPrice={product?.originalPrice}
            name={product?.name}
            socialIcons={storeItemIcons}
            description={product?.shortDescription}
            image= {product?.image}
          />
        </div>
        {/* Product Description */}
        <hr className="mt-5" />
        <div className="text-sm text-right text-slate-700 mt-5 mx-1.5">
          {product?.shortDescription}
        </div>
      </div>

      <div className="flex flex-col py-8 mt-20 max-w-full bg-white rounded-xl w-[1105px] max-md:mt-10 mb-5">
        <div className="flex flex-col self-end mr-12 max-w-full text-2xl leading-none text-right text-slate-900 w-[100px] max-md:mr-2.5">
          <div className="self-end">תיאור</div>
          <div className="flex shrink-0 bg-sky-500 h-[3px]" />
        </div>
        <div className="flex flex-col md:flex-row mt-4 mb">
          <div className="w-full md:w-1/2 text-center">
            <ProductDescription description={product?.productDetails} />
            <ProductBottomDetails
              categories={product?.categories}
              tags={product?.tags}
              sku={product?.sku}
            />
          </div>
          <div className="w-full md:w-1/2">
            <ProductDescription description={product?.description} />
          </div>
          
        </div>
        
      </div>

      <div className="w-[1105px] max-w-full mt-10">
        <ProductShowcase />
      </div>
    </div>
  ) : (
    /* Desktop */
    <div className="flex overflow-hidden flex-col items-center bg-zinc-100">
      <div className="mt-16 max-w-full w-[1105px] max-md:mt-10">
        {/* Main product section with image and store item */}
        <div className="flex gap-5 max-md:flex-row">
          {/* Image section - 65% on mobile */}
          <div className="w-1/2 max-md:w-[35%]">
            <ProductImage imageSrc={product.image} onSale={product.isSale} />
          </div>
          {/* Store item section - 35% on mobile */}
          <div className="w-1/2 max-md:w-[58%]">
            <div className="flex flex-col max-md:ml-0 h-full justify-between">
              <div className="flex flex-col max-md:mt-0 max-md:max-w-full">
                {/* Product Name and Price Section */}
                <div className="flex flex-col items-end text-right">
                  <div className="text-lg font-semibold text-slate-900 mb-1">
                    {product?.name}
                  </div>
                  <div className="flex items-center  text-red-500 gap-2 mb-4">
                    {product?.originalPrice && (
                      <span className="text-base  line-through">
                        ₪{product?.originalPrice}
                      </span>
                    )}
                    <span className="text-xl text-gray-500">
                      ₪{product?.price}
                    </span>
                  </div>
                  <span className="text-md lg-text-xl text-[#313232]">
                    מחיר ליחידה
                  </span>
                </div>
                              {/* Quantity Controls */}
              {/* Add to Cart Button */}
              <div className="flex flex-col-reverse justify-around">
                <div className= "flex flex-row">
                  <Heart id={id} entity='product' size={'small'} />
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-sky-500 text-white rounded-full py-2 px-4 flex items-center justify-center gap-2 mb-4 ml-5"
                >
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/b9e1181743ba6b72e1a9d2667f2722ce297ec4875756b815209a672cd7c954e7?apiKey=3bd4fc55ef394bd184dc9786c01c1445&"
                    alt="Cart icon"
                    className="w-4 h-4"
                  />
                  <span className="text-sm font-bold">הוספה לעגלה</span>
                </button>
                </div>
                <div className="flex justify-end mb-4">
                  <QtyControls
                    id={id}
                    quantity={productQty}
                    onIncrease={() => handleIncreaseQuantity()}
                    onDecrease={() => handleDecreaseQuantity()}
                    size="small"
                  />
                </div>
              </div>
              </div>
                      {/* Bottom details section - full width on mobile */}

        <div className="max-md:mt-6">
          <ProductBottomDetails
            categories={product?.categories}
            tags={product?.tags}
            sku={product?.sku}
          />
        </div>
        {/* Product Description */}
        <hr className="mt-5" />
        <div className="text-sm text-right text-slate-700 mt-5 mx-1.5">
          {product?.shortDescription}
        </div>
            </div>
          </div>
        </div>

        {/* Bottom details section - full width on mobile */}

        {/* <div className="max-md:mt-6">
          <ProductBottomDetails
            categories={product?.categories}
            tags={product?.tags}
            sku={product?.sku}
          />
        </div> */}
        {/* Product Description */}
        {/* <hr className="mt-5" />
        <div className="text-sm text-right text-slate-700 mt-5 mx-1.5">
          {product?.shortDescription}
        </div> */}
      </div>

      <div className="flex flex-col py-8 mt-20 max-w-full bg-white rounded-xl w-[1105px] max-md:mt-10 mb-5">
        <div className="flex flex-col self-end mr-12 max-w-full text-2xl leading-none text-right text-slate-900 w-[100px] max-md:mr-2.5">
          <div className="self-end">תיאור</div>
          <div className="flex shrink-0 bg-sky-500 h-[3px]" />
        </div>
        <div className="flex flex-col md:flex-row mt-4 mb">
          <div className="w-full md:w-1/2 text-center">
            <ProductDescription description={product?.productDetails} />
            <ProductBottomDetails
              categories={product?.categories}
              tags={product?.tags}
              sku={product?.sku}
            />
          </div>
          <div className="w-full md:w-1/2">
            <ProductDescription description={product?.description} />
          </div>
        </div>
      </div>

      <div className="w-[1105px] max-w-full mt-10">
        <ProductShowcase />
      </div>
    </div>
  );
};

export default MainComponent;