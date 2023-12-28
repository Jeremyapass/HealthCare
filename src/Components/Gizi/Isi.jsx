import React from "react";
import gambar1 from "../Gambar/gambar 1.webp"



function Isi() {
  return (
    <div className="p-6  mt-7">
     <section className="">
      <h1 className="text-4xl geomotos"> MALNUTRITION</h1>
      <h2 className="rawon sm:text-base -mt-1 mb-6">lack of proper nutrition, caused by not having enough to eat, not eating enough of the right things,or being unable to use the food that one does eat.</h2>
      <img src={gambar1} className="w-full rounded-lg mb-6" alt="" />
      <p className="text-justify tracking-tighter sm:text-left text-lg worksans sm:tracking-tight mb-6"> 
      Malnutrition remains a significant public health concern in Indonesia, despite the country's recent economic growth and development. According to the World Bank, Indonesia has made substantial progress in reducing poverty and improving access to education and healthcare. However, malnutrition, particularly among children, continues to be a persistent issue. Data from the National Basic Health Research (Riskesdas) in 2018 showed that approximately one in three Indonesian children under the age of five was stunted, a condition resulting from chronic malnutrition. Stunting not only affects physical growth but also has long-term consequences for cognitive development and future productivity. Furthermore, anemia, another indicator of malnutrition, remains prevalent among women and children. The causes of malnutrition in Indonesia are multifaceted and include inadequate dietary diversity, limited access to clean water and sanitation facilities, and inadequate healthcare and nutrition education in some regions. Addressing these underlying factors is crucial to combating malnutrition and ensuring a healthier future for Indonesia's population.
      </p>
      <div className="bg-gambar2 bg-contain blur-sm mb-6 hover:blur-none rounded-lg bg-center bg-no-repeat h-64 sm:bg-fixed"></div>
      <p className="text-justify tracking-tighter text-lg worksans sm:tracking-tight sm:text-left mb-6">
      The Indonesian government has taken several measures to combat malnutrition and improve the nutritional status of its citizens. One of these initiatives is the National Movement of Food Fortification (GPPM), which aims to fortify staple foods with essential nutrients to address micronutrient deficiencies. Additionally, various social safety net programs, such as the Family Hope Program (Program Keluarga Harapan), provide financial assistance to vulnerable households, helping to alleviate poverty and food insecurity. Despite these efforts, challenges persist. Geographic disparities exist, with malnutrition rates higher in certain regions, such as Eastern Indonesia. Limited access to quality healthcare and nutrition education in these areas exacerbates the problem. Furthermore, economic inequalities and inadequate infrastructure continue to hinder progress. To effectively combat malnutrition, a comprehensive approach is necessary, involving not only government initiatives but also community engagement, private sector involvement, and international cooperation. Only through concerted efforts can Indonesia hope to significantly reduce the prevalence of malnutrition and ensure a brighter future for all its citizens.
      </p>
      <p className="text-lg worksans text-justify tracking-tighter sm:tracking-tight sm:text-left mb-6">
      In conclusion, malnutrition remains a pervasive challenge in Indonesia, with significant implications for the health and future well-being of its population. While the government has initiated various programs to combat malnutrition and improve nutrition education, much work remains to be done. To effectively address this issue, it is crucial to focus on equitable access to healthcare, sanitation, and nutrition education, particularly in underserved regions. Additionally, promoting dietary diversity and fortification of staple foods with essential nutrients can contribute to reducing malnutrition rates. As Indonesia continues to strive for economic growth and development, tackling malnutrition should remain a top priority to ensure a healthier and more prosperous future for all its citizens.
      </p>

     </section>
    </div>
  );
}

export default Isi;

