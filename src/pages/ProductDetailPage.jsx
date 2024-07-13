import FrameComponent2 from "../components/FrameComponent2";
import DetailsContent from "../components/DetailsContent";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import Footer from "../components/Footer";

const ProductDetailPage = () => {
  return (
    <div className="w-full relative bg-style overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[133px] box-border gap-[8.4px] leading-[normal] tracking-[normal]">
      <FrameComponent2 />
      <main className="self-stretch flex flex-row items-start justify-start py-0 pr-[59px] pl-[58px] box-border max-w-full mq750:pl-[29px] mq750:pr-[29px] mq750:box-border">
        <section className="flex-1 flex flex-col items-start justify-start gap-[100px] max-w-full mq750:gap-[50px] mq450:gap-[25px]">
          <DetailsContent />
          <FrameComponent1 />
          <FrameComponent />
          <Footer />
        </section>
      </main>
    </div>
  );
};

export default ProductDetailPage;
