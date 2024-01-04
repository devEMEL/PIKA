import React from "react";

const Flex = () => {
  return (
    <div className="max-w-[96%] md:max-w-[90%] xl:max-w-[80%] w-[100%] mx-auto bg-[#ffffff] my-20">
      <div className="flex flex-col lg:flex-row">
        <div className="bg-[#000000] text-[#ffffff] basis-1 lg:basis-1/2 p-5">
          <form action="">  
            <div>
              <input
                type="text"
                placeholder="Email address"
                className="border-0 outline-0 bg-[#FAFAFA] rounded-[5px] py-3 px-5 w-[100%] mb-2 placeholder:text-[#5A5A5A] placeholder:text-[16px] placeholder:font-[400] placeholder:font-['Gothic A1']"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Full Name"
                className="border-0 outline-0 bg-[#FAFAFA] rounded-[5px] py-3 px-5 w-[100%] mb-2 placeholder:text-[#5A5A5A] placeholder:text-[16px] placeholder:font-[400] placeholder:font-['Gothic A1']"
              />
            </div>
			<div>
                <textarea
                  name="Message"
                  placeholder="Message"
                  id=""
                  cols="30"
                  rows="10"
                  className="border-0 outline-0 bg-[#FAFAFA] rounded-[5px] py-3 px-5 w-[100%] mb-4 placeholder:text-[#5A5A5A] placeholder:text-[16px] placeholder:font-[400] placeholder:font-['Gothic A1']"
                ></textarea>
              </div>
          </form>
        </div>
        <div className="basis-1 lg:basis-1/2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
          placeat? Iusto facilis iure laborum dicta debitis maiores molestiae
          eaque voluptas, dignissimos similique, aliquid reprehenderit
          asperiores eum. Nisi hic ea eligendi.
        </div>
      </div>
    </div>
  );
};

export default Flex;
