import React from "react";
import wshouse from "../assets/wshouse.jpeg";

const About = () => {
  return (
    <div name="about" className="w-full  text-black">
      <div className="mt-10 lg:mt-20 md:mt-16 sm:mt-0 max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-4">
          <p className="text-4xl font-signature  font-bold border-b-4 border-cyan-700">
            About
          </p>
        </div>
        <p className="text-sm md:text-lg">
          <strong>William Shakespeare</strong> was a renowned English poet,
          playwright, and actor born in 1564 in Stratford-upon-Avon. His
          birthday is most commonly celebrated on 23 April (see When was
          Shakespeare born), which is also believed to be the date he died in
          1616.
          <i>
            Shakespeare was born and raised in Stratford-upon-Avon,
            Warwickshire. At the age of 18, he married <em>Anne Hathaway</em>,
            with whom he had three children: Susanna and twins Hamnet and
            Judith.
          </i>
          Sometime between 1585 and 1592, he began a successful career in London
          as an actor, writer, and part-owner of a playing company called the
          <strong> Lord Chamberlain's Men</strong>, later known as the
          <i> King's Men</i>. <br></br>
          <br></br>
          <div className="flex flex-col  md:flex-row">
            <div>
              <u>
                At age 49 (around 1613), he appears to have retired to
                Stratford, where he died three years later.
              </u>
              Few records of Shakespeare's private life survive; this has
              stimulated considerable speculation about such matters as his
              physical appearance, his sexuality, his religious beliefs and
              whether the works attributed to him were written by others.
              Shakespeare was the son of
              <strong> John Shakespeare</strong>, an alderman and a successful
              glover (glove-maker) originally from Snitterfield in Warwickshire,
              and Mary Arden, the daughter of an affluent landowning family. He
              was born in Stratford-upon-Avon, where he was baptised on 26 April
              1564. His date of birth is unknown, but is traditionally observed
              on 23 April, Saint George's Day.
            </div>
            <img
              className="w-[350px] h-[210px] md:h-[310px] md:w-[420px] mx-auto rounded-lg p-1"
              src={wshouse}
              alt="my profile"
            />
          </div>
          <br></br>
          <br></br>
          <i>
            This date, which can be traced to William Oldys and George Steevens,
            has proved appealing to biographers because Shakespeare died on the
            same date in 1616. He was the third of eight children, and the
            eldest surviving son.
          </i>
        </p>
      </div>
    </div>
  );
};

export default About;
