/* eslint-disable no-undef */
import { shallowMount } from "@vue/test-utils";
import SlideContent from "@/components/SlideContent";

describe("SlideContent", () => {
  const wrapper = shallowMount(SlideContent, {
    propsData: {
      slideProps: {
        url: "",
      },
    },
  });
  it("renders the correct props Data", () => {
    expect(wrapper.vm.slideProps).toEqual({ url: "" });
    expect(typeof wrapper.vm.slideProps).toBe("object");
  });

  it("has a slideProps data property", () => {
    expect(wrapper.vm.slideProps).toBeDefined();
  });
});
