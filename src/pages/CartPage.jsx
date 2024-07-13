import FrameComponent4 from "../components/FrameComponent4";
import FormContainer from "../components/FormContainer";
import FrameComponent3 from "../components/FrameComponent3";
import Recommendations from "../components/Recommendations";
import Footer1 from "../components/Footer1";

const CartPage = () => {
  return (
    <div className="w-full relative bg-style overflow-hidden flex flex-col items-end justify-start pt-[54px] px-[52px] pb-[131px] box-border gap-[101px] leading-[normal] tracking-[normal] mq750:gap-[50px] mq750:pl-[26px] mq750:pr-[26px] mq750:box-border mq450:gap-[25px]">
      <FrameComponent4 />
      <form className="m-0 w-[1308px] flex flex-col items-start justify-start pt-0 px-0 pb-[50px] box-border gap-[26px] max-w-full mq750:pb-8 mq750:box-border">
        <FormContainer />
        <FrameComponent3 />
      </form>
      <Recommendations />
      <Footer1 />
    </div>
  );
};

export default CartPage;
