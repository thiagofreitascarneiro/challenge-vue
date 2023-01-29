/* eslint-disable no-undef */
import { shallowMount } from "@vue/test-utils";
import ImageContent from "@/components/ImageContent";

describe("ImageContent", () => {
  const wrapper = shallowMount(ImageContent, {
    propsData: {
      imgProps: {
        url: "",
      },
    },
  });
  it("renders the correct props Data", () => {
    expect(wrapper.vm.imgProps).toEqual({ url: "" });
    expect(typeof wrapper.vm.imgProps).toBe("object");
  });

  it("has a imgProps data property", () => {
    expect(wrapper.vm.imgProps).toBeDefined();
  });
});
