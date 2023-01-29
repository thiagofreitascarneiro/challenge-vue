/* eslint-disable no-undef */
import { shallowMount } from "@vue/test-utils";
import Content from "~/components/Content.vue";

describe("Content", () => {
  const wrapper = shallowMount(Content, {
    propsData: {
      product: {
        type: "",
        title: "",
        description: "",
        allow_download: Boolean,
      },
    },
  });
  it("renders the correct props Data", () => {
    expect(wrapper.vm.product).toEqual({
      type: "",
      title: "",
      description: "",
      allow_download: Boolean,
    });
    expect(typeof wrapper.vm.product).toBe("object");
  });
});
