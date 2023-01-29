/* eslint-disable no-undef */
import { shallowMount } from "@vue/test-utils";
import VideoContent from "@/components/VideoContent";

describe("VideoContent", () => {
  const wrapper = shallowMount(VideoContent, {
    propsData: {
      videoProps: {
        url: "",
      },
    },
  });
  it("renders the correct props Data", () => {
    expect(wrapper.vm.videoProps).toEqual({ url: "" });
    expect(typeof wrapper.vm.videoProps).toBe("object");
  });

  it("has a videoProps data property", () => {
    expect(wrapper.vm.videoProps).toBeDefined();
  });
});
