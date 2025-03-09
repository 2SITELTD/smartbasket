import React from 'react';

interface ImageWithOverlayProps {
  imageSrc: string;
  altText: string;
}

const ImageWithOverlay: React.FC<ImageWithOverlayProps> = ({ imageSrc, altText }) => {
  return (
    <div className="flex flex-col justify-center self-start min-w-[240px] w-[435px] max-md:max-w-full">
      <div className="flex flex-col w-full rounded-none max-w-[435px] max-md:max-w-full">
        <div className="flex relative flex-col gap-5 justify-between items-start pt-3 pb-64 pl-5 w-full rounded-xl min-h-[411px] shadow-[0px_2px_11px_rgba(183,189,196,0.504)] max-md:pb-24 max-md:max-w-full">
          <img
            loading="lazy"
            src={imageSrc}
            alt={altText}
            className="object-cover absolute inset-0 size-full"
          />
          <div className="flex relative flex-col justify-center mt-1.5">
            <div className="flex gap-2.5 justify-center items-center px-2.5 bg-white shadow-sm h-[52px] min-h-[52px] rounded-[103px] w-[52px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/36329b8d897497add28b413d4ed170315f35ee84ae470d292f1b9130d0978685?placeholderIfAbsent=true&apiKey=a2912972c87048d393f4667cd84e0030"
                alt=""
                className="object-contain self-stretch my-auto aspect-square w-[13px]"
              />
            </div>
            <div className="flex gap-2.5 justify-center items-center px-2.5 mt-6 bg-white shadow-sm h-[52px] min-h-[52px] rounded-[103px] w-[52px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/cdf39051513956d0d6d1b7dbd81a0e9120e52505d59eae767a329eddccc6afee?placeholderIfAbsent=true&apiKey=a2912972c87048d393f4667cd84e0030"
                alt=""
                className="object-contain self-stretch my-auto aspect-square w-[13px]"
              />
            </div>
          </div>
          <div className="relative px-3.5 pt-1 pb-3.5 text-sm leading-normal text-right text-black whitespace-nowrap bg-amber-300 rounded-[71px_0px_0px_71px] shadow-[4px_2px_12px_rgba(138,148,159,0.407)]">
            מבצע!
          </div>
        </div>
      </div>
      <div className="flex gap-7 items-start mt-7 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/555d9d43df6241c4eea22e7d33ecbe20f18e02228e91d4d3b35134513e621816?placeholderIfAbsent=true&apiKey=a2912972c87048d393f4667cd84e0030"
          alt="Product thumbnail 1"
          className="object-contain shrink-0 rounded-none aspect-[1.09] w-[203px]"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/03908aff3247e0fb0c0990bbe164f829181bff2468b97ac7719a50fc8f9c3316?placeholderIfAbsent=true&apiKey=a2912972c87048d393f4667cd84e0030"
          alt="Product thumbnail 2"
          className="object-contain shrink-0 rounded-none aspect-[1.09] w-[203px]"
        />
      </div>
    </div>
  );
};

export default ImageWithOverlay;