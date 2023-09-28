import React from 'react';

const TitleSection = ({newTitle, teams}) => {
    return (
        <div>
             <div className=" mt-10 flex justify-center  relative">
        <div className=" font-bold text-[200px]">
          <h1 className="text-[#f9f7f3] ">{newTitle}</h1>
        </div>
        <div className=" top-24 absolute">
          <h1 className="text-center text-4xl italic font-bold">{teams}</h1>
          <p className="text-center">
            Lorem ipsum dolor sit amet, conseetuer adipiscing elit. Aenan comdo{" "}
            <br />
            igula eget. Aenean massa cum sociis Theme natoque
          </p>
        </div>
      </div>
        </div>
    );
};

export default TitleSection;