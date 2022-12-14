const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  line: "w-[300px] h-[3px] border-3 bg-black my-5",
  lineHeading: "w-[110px] h-[3px] bg-black my-2 flex mx-auto ",
  heading3: "font-poppins font-semibold text-[18px] pt-5 pb-3",
  titleHead: "text-center font-archivo font-semibold text-[40px] mt-20",
  heading2:
    "font-vietnam font-normal xs:text-[48px] text-[40px] text-black xs:leading-[76.8px] leading-[66.8px] w-full",
  paragraph:
    "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
  prodImg: "w-15% 3/2 object-contain",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexStart} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
